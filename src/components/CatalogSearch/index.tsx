import './styles.scss';
const CatalogSearch = () => {
  return (
    <div className="card border-0">
      <div className="card-body card-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control shadow-none border-0"
            placeholder="Digite sua busca"
          />
          <button className="btn btn-primary btn-search" type="button">
            BUSCAR
          </button>
        </div>
      </div>
    </div>
  );
};
export default CatalogSearch;
