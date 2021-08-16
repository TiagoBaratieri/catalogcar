import CarImg from '../../assets/images/car.png';
import './styles.scss';

const CardCar = () => {
  return (
    <div className="card border-0 card-car">
      <div className="card-body">
        <div className="card-car-img">
          <img src={CarImg} alt="Nome do carro" />
        </div>
        <div className="card-car-title">
          <h2>Audi Supra TT</h2>
        </div>
        <div className="card-car-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
