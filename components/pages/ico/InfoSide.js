import Image from 'next/image'
import Link from 'next/link'
import {IoMdLock} from 'react-icons/io'
import {BsInfoCircle} from 'react-icons/bs'
import {useWeb3React} from '@web3-react/core'

const InfoSide = ({userAmount, tokenRate, fetchingUserLoading}) => {
  const context = useWeb3React()
  const {account} = context
  const infoTable = [
    {
      id: 1,
      infoKey: 'Sale starts Time',
      infoValue: '14-06-2022 00:00:00 GMT',
    },
    {
      id: 2,
      infoKey: 'Sale finishes Time',
      infoValue: '30-06-2022 20:00:00 GMT',
    },
    {
      id: 4,
      infoKey: 'Swap Rate',
      infoValue: '1 BUSD = 66.67 $LOP',
    },
    {
      id: 5,
      infoKey: 'Token price',
      infoValue: '1 $LOP = 0.015$',
    },
    {
      id: 6,
      infoKey: 'Minimum Investment',
      infoValue: '10,000,000 BUSD',
    },
  ]
  return (
    <div className=" nm-flat-slate-200-lg dark:nm-flat-slate-700-lg px-8 py-10 lg:w-1/2 rounded-lg">
      <div className="w-full flex flex-col">
        <div className="flex items-center nm-inset-slate-900-lg py-2 justify-center rounded-lg">
          <Link href={'/'}>
            <a>
              <Image
                src={'/images/WEBLOGO.png'}
                alt="Coin"
                width={320}
                height={105}
                priority
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2 flex-wrap justify-around items-center my-4">
          <h2 className=" capitalize text-2xl font-aclonica tracking-widest text-yellow-600 dark:text-yellow-500">
            your Balance
          </h2>
          {userAmount !== 0 && account && (
            <>
              <p className=" font-mono capitalize text-lg nm-inset-slate-200-lg dark:nm-inset-slate-700-lg p-4 rounded-lg">
                {fetchingUserLoading ? (
                  <span className=" animate-pulse">Initialize Amount...</span>
                ) : (
                  <span className=" flex flex-row items-center gap-2">
                    Your Have {(userAmount * tokenRate).toLocaleString()} LOP
                    <IoMdLock className="text-2xl" />
                  </span>
                )}
              </p>
              <span className="flex flex-row gap-1 w-4/5">
                <BsInfoCircle className="text-green-600 dark:text-green-500 text-2xl" />
                <span className="text-sm">
                  You purchased your token in the first initial ICO round, and
                  you will receive all your tokens on the day of distribution
                </span>
              </span>
            </>
          )}
          {userAmount === 0 && account && (
            <>
              <p className=" font-mono capitalize text-lg nm-inset-slate-200-lg dark:nm-inset-slate-700-lg p-4 rounded-lg flex flex-row items-center gap-2">
                {fetchingUserLoading ? (
                  <span className=" animate-pulse">Initialize Amount...</span>
                ) : (
                  <span className=" flex flex-row items-center gap-2">
                    You Do not Have LOP Token
                  </span>
                )}
              </p>
            </>
          )}
          {!account && (
            <>
              <p className=" font-mono capitalize text-lg nm-inset-slate-200-lg dark:nm-inset-slate-700-lg p-4 rounded-lg flex flex-row items-center gap-2">
                Connect your wallet to check your balance
              </p>
            </>
          )}
        </div>
      </div>
      <div>
        {infoTable.map((obj) => {
          return (
            <div
              key={obj.id}
              className=" after:content-[' '] after:bg-yellow-700 after:w-full after:h-0.5 after:block after:my-2 my-6">
              <div className="flex flex-row justify-between text-xs md:text-lg tracking-wider">
                <span>{obj.infoKey}</span>
                <span>{obj.infoValue}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InfoSide
