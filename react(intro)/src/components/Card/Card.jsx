import React from 'react'
import './Card.scss'


const Card = () => {
    const cars = [
        {
            id: 1,
            img: 'https://vehicle-images.dealerinspire.com/4d6c-11000871/W1K7X7KB6RV002925/fcb40ef90d31baa010b178657bba5eb9.jpg',
            title: 'Mercedes AMG GT 63 S ',
            price: 167000,
            year: 2019,
            km: 27000
        },
        {
            id: 2,
            img: 'https://avatars.mds.yandex.net/get-autoru-vos/2171961/e9f9486cbb067d756b12203c8779670b/456x342',
            title: 'BMW M8',
            price: 125000,
            year: 2021,
            km: 23000
        },
        {
            id: 3,
            img: 'https://pictures.dealer.com/a/audibakersfieldaoa/0301/1fa9eaa7e495c3b1597f57dead65f935x.jpg?impolicy=resize&w=414',
            title: 'Audi S8',
            price: 35000,
            year: 2013,
            km: 222000
        }

    ]
    return (
        <div className="card-container">
            <div className="card">

                {cars.map((car) => (
                    <div className="card-item" key={car.id}>
                        <div className="card-img">
                            <img src={car.img} alt={car.title} />
                        </div>
                        <div className="card-text">
                            <h3>{car.title}</h3>
                            <p>{car.price} USD</p>
                            <div className="card-text-num">
                                <p>{car.year} il,</p>
                                <p>{car.km} km</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Card