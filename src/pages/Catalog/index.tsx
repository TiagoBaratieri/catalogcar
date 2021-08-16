import CardCar from 'components/CardCar';
import CatalogSearch from 'components/CatalogSearch';
import './styles.scss';

const Catalog = () => {
  return (
    <div className="container container-catalog">
      <CatalogSearch />
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CardCar />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
