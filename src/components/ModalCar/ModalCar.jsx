import css from './ModalCar.module.css'
import car from '../../images/Ford-Chevrolet-BMW-i-Mercedes-Obman-00.jpg'

const ModalCar = () => {

    return (
        <div className={css.madalWrap}>
            <img src={car} alt='Машинка' className={css.imgCar} />
            <p className={css.nameCar}> Buick <span className={css.modelCar}>Enclave</span>, <span>2008</span></p>
            <div className={css.infoWrap}>
                <div className={css.infoTopWrap}>
                    <p className={css.infoCar}>Kiev <span className={css.border}></span></p>
                    <p className={css.infoCar}>Ukraine <span className={css.border}></span></p>
                    <p className={css.infoCar}>Id: <span>9582</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Year: <span>2008</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Type: <span >Suv</span></p>
                </div>
                <div className={css.infoBottomWrap}>
                    <p className={css.infoCar}>Fuel Consumption: <span>10.5</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Engine Size: <span>3.6L V6</span></p>
                </div>
            </div>
            <p className={css.carDescription}> The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</p>
            <p className={css.carDetails}>Accessories and functionalities:</p>
            <div className={css.carDetailsWrap}>
                <div className={css.infoTopWrap}>
                    <p className={css.infoCar}>Leather seats <span className={css.border}></span></p>
                    <p className={css.infoCar}>Panoramic sunroof <span className={css.border}></span></p>
                    <p className={css.infoCar}>Power liftgate</p>
                </div>
                <div className={css.infoBottomWrap}>
                    <p className={css.infoCar}>Premium audio system <span className={css.border}></span></p>
                    <p className={css.infoCar}>Remote start <span className={css.border}></span></p>
                    <p className={css.infoCar}>Blind-spot monitoring</p> 
                </div>
            </div>
            <p className={css.infoConditions}>Rental Conditions: </p>
            <div className={css.conditionsTopWrap}>
                <p className={css.conditionsTextIn}>Minimum age : <span className={css.condSapn}>25</span></p>
                <p className={css.conditionsText}>Valid driver’s license</p>
            </div>
            <div className={css.conditionsBottomWrap}>
                <p className={css.conditionsText}>Security deposite required</p>
                <p className={css.conditionsText}>Mileage: <span className={css.condSapn}>5,858</span></p>
                <p className={css.conditionsText}>Price: <span className={css.condSapn}>40$</span></p>
            </div>
            <button type='submit' className={css.buttonRent}>Rental car</button>

            
        </div>
    )
}

export default ModalCar;