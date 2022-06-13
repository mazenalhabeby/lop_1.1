import BUSD_ABI from '@/helps/BUSD'
import busdAbi, {contractBusdAddress} from '@/helps/BUSD'
import LINKTOKEN_ABI, {contractLinkAddress} from '@/helps/LINK'
import {toFloat} from '@/helps/number'
import {formatBalance, getBalance, isRightNetwork} from '@/helps/web3'
import {Provider} from '@ethersproject/providers'
import {providers} from 'ethers'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {ImSpinner6} from 'react-icons/im'

const ContactWallet = ({
  setModel,
  model,
  account,
  connectors,
  deactivate,
  library,
  contract,
  setBalance,
  balance,
  chainId,
  updateBalance,
  fitchBalance,
}) => {
  useEffect(() => {
    if (account && contract != null) {
      updateBalance()
    }
  }, [account, library, balance])

  return (
    <>
      {!account && (
        <button
          onClick={() => {
            setModel(!model)
          }}
          className=" capitalize bg-yellow-600 p-2 rounded-lg">
          connect to wallet
        </button>
      )}
      {account && (
        <div className="flex flex-row items-center nm-flat-slate-200 dark:nm-flat-slate-700 p-2 rounded-full font-mono text-lg gap-2 tracking-wider">
          <div>
            {fitchBalance ? (
              <div className="flex flex-row items-center gap-1">
                <ImSpinner6 className=" animate-spin" />
                BUSD
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-justify text-sm md:text-lg">
                {balance} BUSD
              </div>
            )}
          </div>
          <div className="flex flex-row items-center nm-inset-slate-200 dark:nm-inset-slate-700 px-2 py-1 rounded-full gap-2">
            <span>
              {account &&
                `${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )}`}
            </span>
            <Image
              src={
                library?.provider.isMetaMask
                  ? '/images/MetaMask_Fox.svg'
                  : '/images/walletconnect-seeklogo.com.svg'
              }
              width={30}
              height={30}
            />
            <button
              onClick={() => {
                deactivate()
              }}
              className=" nm-flat-slate-200 dark:nm-flat-slate-700-sm rounded-full p-1">
              <AiOutlinePoweroff className="text-yellow-600 dark:text-yellow-500" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactWallet
