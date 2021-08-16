import {ReactComponent as CarHome} from 'assets/images/carhome.svg';
import './styles.scss';

const Home = () => {
  return (
    <div className="container container-home">
      <div className="card card-home bg-primary">
        <div className="card-body">
          <div className="row row-home">
            <div className="col-xl-6 order-xl-1">
              <div className="image-home-container">
                <CarHome />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="text-home-content">
                <h2>O carro perfeito para você</h2>
                <p>
                  Conheça nossos carros e dê mais um passo na realização do seu
                  sonho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-home-nav mb-5 shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 col-md-3 card-home-nav-btn text-center">
              <a href="link" className="btn btn-primary pb-1">
                VER CATÁLAGO
              </a>
            </div>
            <div className="col-sm-6 col-md-8 card-home-nav-text mt-2">
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
