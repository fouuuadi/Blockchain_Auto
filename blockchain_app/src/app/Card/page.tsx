import './card.css'
const cars = [
    {
      id: 1,
      title: "Tesla Model S",
      price: 80000,
      image: "/img/tesla-model-s.jpg",
    },
    {
      id: 2,
      title: "Porsche 911",
      price: 120000,
      image: "/img/porsche-911.jpg",
    },
    {
      id: 3,
      title: "Ferrari F8",
      price: 270000,
      image: "/img/ferrari-f8.jpg",
    },
    // ... etc.
  ];
  
  export default function CarsList() {
    return (
      <div className="cars-container">
        {cars.map((car) => (
          // IMPORTANT : le .car-card doit être DANS le .map
          <div key={car.id} className="car-card">
            <div className="car-image-container">
              <img src={car.image} alt={car.title} className="car-image" />
            </div>
            <h2 className="car-title">{car.title}</h2>
            <div className="car-price">
              <img src="/img/logo.png" alt="Logo" className="price-logo" />
              <span className="price-amount">{car.price} €</span>
            </div>
            <button>Acheter</button>
          </div>
        ))}
      </div>
    );
  }