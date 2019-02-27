export enum Channel {
  // Chain
  GetBlock = 'getBlock',
  GetTransaction = 'getTransaction',
  GetLiveCell = 'getLiveCell',
  GetTipHeader = 'getTipHeader',
  GetTipBlockNumber = 'getTipBlockNumber',
  GetLocalNodeId = 'getLocalNodeId',
  GetNetwork = 'getNetwork',
  SwitchNetwork = 'switchNetwork',

  // Wallet
  CreateWallet = 'createWallet',
  ImportWallet = 'importWallet',
  ExportWallet = 'exportWallet',
  SwitchWallet = 'switchWallet',
  GetBalance = 'getBalance',
  GetCellsByTypeHash = 'getCellsByTypeHash',
  GetUnspentCells = 'getUnspentCells',
  GetTransactions = 'getTransactions',
  GetWallets = 'getWallets',
  SendCapacity = 'sendCapacity',
  SendTransaction = 'sendTransaction',
  Sign = 'sign',

  // Page
  GotoSettings = 'gotoSettings',
}

export default {
  Channel,
}
