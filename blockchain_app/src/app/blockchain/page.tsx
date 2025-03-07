"use client";

// import Image from "next/image";
// import {HETIC_ABI} from '../../../public/Hetic';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
/**
 * Adresse du contrat HETIC ERC20.
 * Cette adresse est utilisée pour interagir avec le contrat intelligent HETIC.
 */

export default function Blockchain() {
   

  return (
    <div>
      <Navbar></Navbar>
       <Footer></Footer>
    </div>
  );
}
