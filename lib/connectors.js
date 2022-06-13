import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS = {
  1: process.env.NEXT_PUBLIC_RPC_URL_1,
  4: 'https://rinkeby.infura.io/v3/f29a346e80b8460dbbeffdaf3c891158',
  56: process.env.NEXT_PUBLIC_RPC_URL_56,
}

export const injected = new InjectedConnector({
  supportedChainIds: [4],
})

// export const network = new NetworkConnector({
//   urls: {1: RPC_URLS[1], 4: RPC_URLS[4]},
//   defaultChainId: 1,
// })

export const walletconnect = new WalletConnectConnector({
  rpc: {56: RPC_URLS[56]},
  chainId: 56,
  qrcode: true,
})

// export const network = {
//   bsc: {
//     chainId: `0x${Number(56).toString(16)}`,
//     chainName: 'Smart Chain',
//     nativeCurrency: {
//       name: 'Binance Chain Native Token',
//       symbol: 'BNB',
//       decimals: 18,
//     },
//     rpcUrls: [
//       'https://bsc-dataseed.binance.org/',
//       'https://bsc-dataseed1.binance.org',
//       'https://bsc-dataseed2.binance.org',
//       'https://bsc-dataseed3.binance.org',
//       'https://bsc-dataseed4.binance.org',
//       'https://bsc-dataseed1.defibit.io',
//       'https://bsc-dataseed2.defibit.io',
//       'https://bsc-dataseed3.defibit.io',
//       'https://bsc-dataseed4.defibit.io',
//       'https://bsc-dataseed1.ninicoin.io',
//       'https://bsc-dataseed2.ninicoin.io',
//       'https://bsc-dataseed3.ninicoin.io',
//       'https://bsc-dataseed4.ninicoin.io',
//       'wss://bsc-ws-node.nariox.org',
//     ],
//     blockExplorerUrls: ['https://bscscan.com'],
//   },
// }
