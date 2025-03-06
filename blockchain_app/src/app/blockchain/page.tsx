"use client";

import { HETIC_ABI } from '../../../public/Hetic';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import Footer from '../Footer/page';

// Liste des voitures et le montant à minter
const cars = [
  { id: 1, url: "https://th.bing.com/th/id/OIP.PUUJisddcRekuwK4s1z8kgHaE7?w=221&h=180&c=7&r=0&o=5&pid=1.7", mintValue: 100n },
  { id: 2, url: "https://th.bing.com/th/id/OIP.dh-2tSKBTQFdvp-RYi0jzwHaE8?w=219&h=180&c=7&r=0&o=5&pid=1.7", mintValue: 200n },
  { id: 3, url: "https://th.bing.com/th/id/OIP.JdWWbliebNTR4NxRg50lJgHaEK?w=332&h=186&c=7&r=0&o=5&pid=1.7", mintValue: 300n },
];

export default function Blockchain() {
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();
  const { address, isConnected } = useAccount();

  const { data: balance, refetch } = useReadContract({
    abi: HETIC_ABI,
    functionName: "balanceOf",
    address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    args: [address],
  });

  const handleMint = (mintValue: bigint) => {
    if (!address) return;
    writeContract({
      abi: HETIC_ABI,
      functionName: "mint",
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      args: [address, mintValue],
    });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Blockchain </h1>
      <ConnectButton />

      {isConnected ? (
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-500 mb-4">Balance: {balance ? balance?.toString() : "Chargement..."}</p>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors mb-4"
          >
            Refresh
          </button>

          {/* Affichage des voitures avec leur bouton Mint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cars.map((car) => (
              <div key={car.id} className="flex flex-col items-center bg-white p-4 shadow rounded-lg">
                <img src={car.url} alt={`Car ${car.id}`} className="w-40 h-40 object-cover mb-2" />
                <p className="text-gray-700">Mint Value: {car.mintValue.toString()}</p>
                <button
                  onClick={() => handleMint(car.mintValue)}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Mint
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-500">Connectez-vous avec votre wallet</p>
      )}

      {isPending && <p className="text-yellow-500">Minting...</p>}
      {isSuccess && <p className="text-green-500">Minting successful!</p>}
      {isError && <p className="text-red-500">Minting failed.</p>}

      <Footer />
    </div>
  );
}
