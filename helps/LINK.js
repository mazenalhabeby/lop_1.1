import {Contract} from '@ethersproject/contracts'

const LINKTOKEN_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_spender', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'approve',
    outputs: [{name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_from', type: 'address'},
      {name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'transferFrom',
    outputs: [{name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{name: '', type: 'uint8'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
      {name: '_data', type: 'bytes'},
    ],
    name: 'transferAndCall',
    outputs: [{name: 'success', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_spender', type: 'address'},
      {name: '_subtractedValue', type: 'uint256'},
    ],
    name: 'decreaseApproval',
    outputs: [{name: 'success', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{name: '_owner', type: 'address'}],
    name: 'balanceOf',
    outputs: [{name: 'balance', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'transfer',
    outputs: [{name: 'success', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_spender', type: 'address'},
      {name: '_addedValue', type: 'uint256'},
    ],
    name: 'increaseApproval',
    outputs: [{name: 'success', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {name: '_owner', type: 'address'},
      {name: '_spender', type: 'address'},
    ],
    name: 'allowance',
    outputs: [{name: 'remaining', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'from', type: 'address'},
      {indexed: true, name: 'to', type: 'address'},
      {indexed: false, name: 'value', type: 'uint256'},
      {indexed: false, name: 'data', type: 'bytes'},
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'owner', type: 'address'},
      {indexed: true, name: 'spender', type: 'address'},
      {indexed: false, name: 'value', type: 'uint256'},
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'from', type: 'address'},
      {indexed: true, name: 'to', type: 'address'},
      {indexed: false, name: 'value', type: 'uint256'},
    ],
    name: 'Transfer',
    type: 'event',
  },
]

export const contractLinkAddress = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'

export const getLinkContract = (library, account) => {
  const signer = library?.getSigner(account).connectUnchecked()
  var contract = new Contract(contractLinkAddress, LINKTOKEN_ABI, signer)
  return contract
}

export default LINKTOKEN_ABI
