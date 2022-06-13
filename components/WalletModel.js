import {MdOutlineClose} from 'react-icons/md'
import {motion} from 'framer-motion'
import {CgSpinnerTwo} from 'react-icons/cg'
import {dividerClasses} from '@mui/material'
import Image from 'next/image'
import {FaCheckCircle} from 'react-icons/fa'
import toast from 'react-hot-toast'
import {useEffect} from 'react'
import Link from 'next/link'

const WalletModel = ({
  model,
  setModel,
  connectors,
  activatingConnector,
  error,
  connector,
  triedEager,
  setActivatingConnector,
  activate,
  active,
  deactivate,
  account,
  getErrorMessage,
}) => {
  useEffect(() => {
    if (!!error) {
      toast.error(getErrorMessage(error))
    }
  }, [error])

  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      className={`bg-slate-300 dark:bg-slate-500 rounded-lg w-full max-w-sm`}>
      <div className="bg-slate-800 w-full p-2 flex flex-row justify-around items-center rounded-t-lg gap-4">
        <span className="text-lg uppercase tracking-wider font-aclonica text-slate-200">
          Connect Wallet
        </span>
        <button
          onClick={() => {
            setModel(!model)
          }}
          className="text-xl nm-flat-slate-800 rounded-full p-1">
          <MdOutlineClose className=" text-yellow-500" />
        </button>
      </div>
      <div className="flex flex-col gap-2 my-2">
        {Object.keys(connectors).map((name) => {
          const currentConnector = connectors[name]
          const activating = currentConnector === activatingConnector
          const connected = currentConnector === connector
          return (
            <>
              <button
                className=" place-self-start tracking-widest font-aclonica text-sm px-3 py-1 nm-inset-slate-300 dark:nm-inset-slate-500 w-[90%] mx-auto relative rounded"
                disabled={active}
                key={name}
                onClick={() => {
                  setActivatingConnector(currentConnector)
                  activate(connectors[name])
                }}>
                <div>
                  {activating && (
                    <CgSpinnerTwo className="text-slate-800 h-1/2 absolute left-0 top-0 animate-spin" />
                  )}
                </div>
                <div className="flex flex-row justify-between items-center">
                  {name == 'MetaMask' && (
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src="/images/MetaMask_Fox.svg"
                        width={40}
                        height={40}
                        className={`${active && 'grayscale'}`}
                      />
                      <span className={`${active && 'text-slate-400'}`}>
                        MetaMask
                      </span>
                    </div>
                  )}
                  {name == 'WalletConnect' && (
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src="/images/walletconnect-seeklogo.com.svg"
                        width={40}
                        height={40}
                        className={`${active && 'grayscale'}`}
                      />
                      <span className={`${active && 'text-slate-400'}`}>
                        WalletConnect
                      </span>
                    </div>
                  )}
                  {connected && account && (
                    <FaCheckCircle className="text-lg text-green-600 dark:text-green-400" />
                  )}
                </div>
              </button>
            </>
          )
        })}
      </div>
      <div className="p-2 text-sm flex gap-1">
        <span>Don't have a Wallet?</span>
        <Link href="https://metamask.io/">
          <a target="_blank" className="text-yellow-600 dark:text-yellow-500">
            Download Here
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default WalletModel
