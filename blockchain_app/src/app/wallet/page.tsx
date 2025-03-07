"use client";

import { useState } from 'react';
import { HETIC_ABI } from '../../../public/Hetic';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import "./wallet.css"

const HETIC_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function Wallet() {
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();
  const { address, isConnected } = useAccount();

  const { data: balance, refetch } = useReadContract({
    abi: HETIC_ABI,
    functionName: "balanceOf",
    address: HETIC_ADDRESS,
    args: address ? [address] : undefined,
  });

  // State pour gérer l'affichage du dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Fonction de mint (renommée pour plus de clarté)
  const handleMint = () => {
    if (!address) return;
    writeContract({
      abi: HETIC_ABI,
      functionName: "mint",
      address: HETIC_ADDRESS,
      args: [address, 200n],
    });
  };

  return (
    <div className="dropdown">
      {/* Bouton principal qui affiche le ConnectButton et ouvre/ferme le menu */}
      <button 
        className="dropdown-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <ConnectButton />
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="dropdown-menu">
          {isConnected ? (
            <>
              <p>Balance: {balance}</p>
              <button onClick={handleMint}>Mint</button>

              {isPending && <p className="status pending">Minting…</p>}
              {isSuccess && <p className="status success">Success!</p>}
              {isError && <p className="status error">Failed.</p>}
            </>
          ) : (
            <p>Connectez-vous avec votre wallet</p>
          )}
        </div>
      )}
    </div>
  );
}
