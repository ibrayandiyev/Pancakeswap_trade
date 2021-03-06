import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WDEFI',
    lpAddresses: {
      97: '',
      56: '0x35c9FE405B85757d531B6340265D70ce5f6d2132',
    },
    tokenSymbol: 'WDEFI',
    tokenAddresses: {
      97: '',
      56: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
      
  // {
  //   pid: 1,
  //   lpSymbol: 'WOOP-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x123354f9C3f9D35602d95231723A3A463815b9c4',// V1
  //     // 56: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
  //   },
  //   tokenSymbol: 'WOOP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
      
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'WDEFI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6254C5be216B7E17ff27E82d06e96BAdF799885B', // V1
  //     // 56: '0xb2B8B015414a30E56Fe79347Fc1563729d539288'// V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'WDEFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x35c9FE405B85757d531B6340265D70ce5f6d2132', // V2
  //   },
  //   tokenSymbol: 'WDEFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD', // V1
  //     // 56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE'// V2
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059fF775485246999027B3197955', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'WOOP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04', // V1
  //     // 56: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04' // V2
  //   },
  //   tokenSymbol: 'WOOP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18', // V1

  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  {
    pid: 12,
    lpSymbol: 'WOOP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04' // V2
    },
    tokenSymbol: 'WOOP',
    tokenAddresses: {
      97: '',
      56: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18', 

    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'WOOP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x314a47938e567E90813816589b7C15E85D053A6a' // V2
    },
    tokenSymbol: 'WOOP',
    tokenAddresses: {
      97: '',
      56: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
      
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    lpSymbol: 'WDEFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x35c9FE405B85757d531B6340265D70ce5f6d2132', // V2
    },
    tokenSymbol: 'WDEFI',
    tokenAddresses: {
      97: '',
      56: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'WDEFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb2B8B015414a30E56Fe79347Fc1563729d539288'// V2
    },
    tokenSymbol: 'WDEFI',
    tokenAddresses: {
      97: '',
      56: '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
  {
    pid: 11,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE'// V2
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955', 

    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
