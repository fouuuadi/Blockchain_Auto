import './card.css'
import { useReadContract, useWriteContract } from 'wagmi'
import { HETIC_ABI } from '../../../public/Hetic'

const HETIC_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

// const CAR_IMAGES = {x@
//   mustang: '/img/mustang.jpg',
//   // Ajoutez d'autres mappings ici...
// }

function BuyButton({ carId }) {
  const { writeContract } = useWriteContract()

  const handleBuy = () => {
    writeContract({
      abi: HETIC_ABI,
      address: HETIC_ADDRESS,
      functionName: 'buyCars',
      args: [carId]
    })
  }

  return (
    <button onClick={handleBuy} className="buy-button">
      Acheter
    </button>
  )
}

export default function CarsList() {
  const { data: cars } = useReadContract({
    abi: HETIC_ABI,
    functionName: 'getCars',
    address: HETIC_ADDRESS
  })

  console.log("Données des voitures:", cars)

  return (
    <div className="cars-container">
      {cars?.map((car, index) => {
        const price = typeof car.price === 'bigint' ? Number(car.price) : car.price
        
        return (
          <div key={index} className="car-card">
            <div className="car-image-container">
              {/* <img 
                src={CAR_IMAGES[car.name.toLowerCase()] || '/img/default-car.jpg'} 
                alt={car.name} 
                className="car-image"
              /> */}
            </div>
            <h2 className="car-title">{car.name}</h2>
            <div className="car-price">
              <img src="/img/logo.png" alt="Logo" className="price-logo" />
              <span className="price-amount">{price} €</span>
            </div>
            <BuyButton carId={index} />
          </div>
        )
      })}
    </div>
  )
}