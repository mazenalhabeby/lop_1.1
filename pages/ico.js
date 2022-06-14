import ContactWallet from '@/components/contactWallet'
import InfoSide from '@/components/pages/ico/InfoSide'
import SaleSide from '@/components/pages/ico/SaleSide'
import WalletModel from '@/components/WalletModel'
import {getBusdRContract} from '@/helps/BUSDR'
import {getLinkContract} from '@/helps/LINK'
import {toFloat} from '@/helps/number'
import {formatBalance} from '@/helps/web3'
import DefaultLayout from '@/layouts/DefaultLayout'
import {injected, walletconnect} from '@/lib/connectors'
import {fetchAmount} from '@/lib/fetchAmount'
import {useEagerConnect, useInactiveListener} from '@/lib/hooks'
import {Web3Provider} from '@ethersproject/providers'
import {
  UnsupportedChainIdError,
  useWeb3React,
  Web3ReactProvider,
} from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {UserRejectedRequestError as UserRejectedRequestErrorWalletConnect} from '@web3-react/walletconnect-connector'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

const ConnectorNames = {
  Injected: 'MetaMask',
  WalletConnect: 'WalletConnect',
}

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  // [ConnectorNames.WalletConnect]: walletconnect,
}

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return (
      <span>
        You're connected to an unsupported network, switch the network to{' '}
        <a
          href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
          style={{color: '#0057D9'}}
          target="_blank">
          BSC
        </a>
      </span>
    )
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}

export default function ({sale}) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Ico sale={sale} />
    </Web3ReactProvider>
  )
}

function Ico({sale}) {
  const [model, setModel] = useState(false)
  const [balance, setBalance] = useState(0)
  const [ableTransation, setAbleTransation] = useState(false)
  const [userAmount, setUserAmount] = useState(0)
  const [userArray, setUserArray] = useState(sale)
  const [fetchingUserLoading, setFetchingUserLoading] = useState(false)
  const tokenRate = 66.67

  const context = useWeb3React()
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState()
  const [fitchBalance, setFitchBalance] = useState(false)

  const contract = getBusdRContract(library, account)

  const recieverAddress = '0x2e1904DDd763C4d9FdfaF132D5AED06D49e22868'

  useEffect(() => {
    if (model) {
      document.body.classList.add('active__model')
    } else {
      document.body.classList.remove('active__model')
    }
  }, [model])

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useEffect(() => {
    if (balance > 0) {
      setAbleTransation(true)
    } else {
      setAbleTransation(false)
    }
  }, [balance])

  useEffect(() => {
    getUser()
  }, [account, active, userArray])

  function getUser() {
    const filterUser = userArray.filter(
      (user) => user.walletAddress === account
    )

    if (filterUser.length !== 0) {
      const sum = filterUser.reduce((acc, {amount}) => acc + Number(amount), 0)
      setUserAmount(sum)
    } else {
      setUserAmount(0)
    }
  }

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  const updateBalance = async () => {
    setFitchBalance(true)
    let newBalance = await contract.balanceOf(account)
    newBalance = formatBalance(newBalance)
    setBalance(Math.trunc(toFloat(newBalance) * 100) / 100)
    setFitchBalance(false)
  }
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div className=" relative">
        {model && (
          <div className=" absolute flex justify-center items-center w-full h-screen backdrop-grayscale backdrop-blur-lg z-50">
            <WalletModel
              setModel={setModel}
              model={model}
              connectors={connectorsByName}
              activatingConnector={activatingConnector}
              error={error}
              connector={connector}
              triedEager={triedEager}
              setActivatingConnector={setActivatingConnector}
              activate={activate}
              active={active}
              deactivate={deactivate}
              account={account}
              getErrorMessage={getErrorMessage}
            />
          </div>
        )}
        <div className="w-full shadow-xl py-2 flex justify-end items-center px-8 gap-4">
          <ContactWallet
            setModel={setModel}
            model={model}
            account={account}
            deactivate={deactivate}
            connectors={connector}
            library={library}
            contract={contract}
            setBalance={setBalance}
            balance={balance}
            chainId={chainId}
            updateBalance={updateBalance}
            fitchBalance={fitchBalance}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0 max-w-7xl mx-auto my-10 md:my-16 px-4 md:px-0">
          {/* info side */}
          <InfoSide
            tokenRate={tokenRate}
            userAmount={userAmount}
            fetchingUserLoading={fetchingUserLoading}
          />
          <SaleSide
            contract={contract}
            recieverAddress={recieverAddress}
            updateBalance={updateBalance}
            ableTransation={ableTransation}
            tokenRate={tokenRate}
            setFetchingUserLoading={setFetchingUserLoading}
            setUserArray={setUserArray}
            fitchBalance={fitchBalance}
          />
        </div>
      </div>
    </motion.div>
  )
}

Ico.getLayout = DefaultLayout

export const getServerSideProps = async (context) => {
  let sale = await fetchAmount()
  return {
    props: {sale},
  }
}
