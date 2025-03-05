"use client";

// import Image from "next/image";
import {HETIC_ABI} from '../../../public/Hetic';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';

export default function Home() {
  const { writeContract } = useWriteContract();

  const { address } = useAccount();

  // const {data: balance} = useReadContract({
  //   abi: HETIC_ABI,
  //   functionName: "balanceOf",
  //   address: 0x5FbDB2315678afecb367f032d93F642f64180aa3,
  //   args: [address],
  // })

  // if (!address) return <ConnectButton/>;

  const handleClick = () => {
    writeContract(
      {
        abi: HETIC_ABI,
      functionName: "mint",
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      args: [address, 100n],
      }
    );
  };

  return (
    <div>
      <ConnectButton></ConnectButton>
      <button onClick={handleClick}>MINT</button>
    </div>
  );
}
