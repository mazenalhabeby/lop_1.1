import {fetchAmount} from '@/lib/fetchAmount'
import {useWeb3React} from '@web3-react/core'
import {ethers} from 'ethers'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import {BiErrorCircle} from 'react-icons/bi'
import {ImSpinner2} from 'react-icons/im'
import {IoIosCloseCircleOutline} from 'react-icons/io'

const SaleSide = ({
  contract,
  recieverAddress,
  updateBalance,
  ableTransation,
  tokenRate,
  setFetchingUserLoading,
  setUserArray,
  fitchBalance,
}) => {
  const context = useWeb3React()
  const {library, account} = context
  const {register, handleSubmit, watch, formState, reset} = useForm({
    defaultValues: {amount: 0},
  })

  const [transactionLoading, setTransactionLoading] = useState(false)

  const [buyLopAmount, setBuyLopAmount] = useState(0)
  const [amount, setAmount] = useState('')
  const [successfulTransaction, setSuccessfulTransaction] = useState(false)

  const onSubmit = (data) => {
    sentTransaction()
  }

  const postTransaction = async () => {
    const transactionInfo = {
      walletAddress: account,
      amount: amount,
      seedRound: 'ico',
    }

    const result = await fetch(`/api/addTransaction`, {
      body: JSON.stringify(transactionInfo),
      method: 'POST',
    })
    const json = await result.json()
  }

  const sentTransaction = async () => {
    setTransactionLoading(true)
    try {
      //@ts-ignore
      let value = ethers.utils.parseEther(buyLopAmount)
      let txtSend = await contract.transfer(recieverAddress, value)
      let listen = await txtSend.wait()

      if (listen.confirmations > 0) {
        setTransactionLoading(false)
        toast.success('Transaction Successful')
        setFetchingUserLoading(true)
        setSuccessfulTransaction(true)
        postTransaction()
        updateBalance()
        reset()
        setTimeout(async function setTime() {
          let newUserFetching = await fetchAmount()
          setUserArray(newUserFetching)
          setSuccessfulTransaction(false)
          setFetchingUserLoading(false)
        }, 5000)
      }
    } catch (err) {
      if (err) {
        setTransactionLoading(false)
      }
    }
  }

  const onLopChange = (e) => {
    setBuyLopAmount(e.target.value)
    setAmount(e.target.value)
  }
  return (
    <div className=" w-full lg:w-2/6 relative">
      <div className=" nm-flat-slate-200-lg dark:nm-flat-slate-700-lg rounded-lg px-8 py-10 text-center flex flex-col space-y-6 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-4">
          <p className="text-xs place-self-end">{`${buyLopAmount} BUSD = ${(
            Number(buyLopAmount) * tokenRate
          ).toLocaleString()} LOP`}</p>
          <div className="w-full nm-inset-slate-100-lg dark:nm-inset-slate-700-lg flex flex-row rounded-lg px-2 divide-x dark:divide-slate-600">
            <input
              {...register('amount', {
                required: {value: true, message: 'The amount is required'},
                min: {value: 1, message: 'The minimum investment is 100'},
                max: {value: 5000, message: 'The maximum investment is 5000'},
              })}
              type="number"
              className="flex-1 bg-transparent outline-none placeholder:text-slate-300 dark:placeholder:text-slate-500 text-center placeholder:text-left placeholder:text-xs md:placeholder:text-base"
              placeholder="Minimum investment is 100 BUSD"
              autoComplete="off"
              onChange={onLopChange}
            />
            <span className="py-3 pl-2">BUSD</span>
          </div>
          <div className="w-full h-4">
            {formState.errors.amount && (
              <span className="flex flex-row items-center gap-1 text-xs text-red-500 place-self-start transition-all duration-700">
                <BiErrorCircle className="text-base" />{' '}
                {formState.errors.amount?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className=" flex flex-row items-center gap-1 bg-yellow-600 px-10 py-2 rounded-full disabled:bg-slate-300 dark:disabled:bg-slate-500 disabled:text-slate-400 dark:disabled:text-slate-700"
            disabled={transactionLoading}>
            {transactionLoading && <ImSpinner2 className=" animate-spin" />} Buy
            now
          </button>
        </form>
      </div>
      {!ableTransation && account && !fitchBalance && (
        <div className="  absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-xl font-aclonica tracking-widest text-xl">
          <div className="leading-relaxe flex flex-col justify-center items-center text-center w-4/5 leading-loose">
            <IoIosCloseCircleOutline className=" text-5xl text-red-500" />
            <span>Your balance is less than the minimum</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SaleSide

function setTransactionLoading(arg0) {
  throw new Error('Function not implemented.')
}
