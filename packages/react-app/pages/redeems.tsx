import React, { useState, useEffect, useCallback } from 'react';
import ToucanClient from 'toucan-sdk';
import { BigNumber, ContractReceipt, ethers } from 'ethers';
import { PoolSymbol } from 'toucan-sdk/dist/types';
import { useAccount } from 'wagmi';
import { RedeemsResponse } from 'toucan-sdk';
import { useEthersProvider } from '@/utils/provider';

export default function Redeems() {
  const { address } = useAccount();
  const [redeems, setRedeems] = useState<RedeemsResponse[] | undefined>([]);

  const sdk = new ToucanClient('alfajores');

    const fetchResult = useCallback(async () => {
      const myAddress = address?.toLocaleLowerCase() as string;
      const list = await sdk.fetchUserRedeems(myAddress, 'NCT');
      setRedeems(list);
      console.log(redeems);
      return redeems;
    }, [address, redeems]);

    useEffect(() => {
      fetchResult();
    }, []);
  


//   useEffect(() => {

//     const getUserRedeems = async () => {
//       const result = address && (await sdk.fetchUserRedeems(address?.toLowerCase(), 'NCT'));
//       result && setRedeems(result);
// 	  console.log(result);
//     };

//     // Call the getUserRetirements function
//     getUserRedeems();
//   }, [address]);

//   console.log(redeems?.length);

  return <div>Redeems</div>;
}
