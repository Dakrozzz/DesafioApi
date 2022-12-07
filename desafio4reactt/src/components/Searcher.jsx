import Button from "react-bootstrap/Button";

function Searcher({ inputFilter, filter}) {
  return (
    <div className="d-flex justify-content-around bg-dark text-light p-3 mediaQ">
      <h1>Search Your Favorite Character </h1>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Search by name"
          onChange={inputFilter}
        />
        <Button variant="primary" className="ps-3 ms-2" onClick={filter}>
          Filter
        </Button>
      </div>
    </div>
  );
}

export default Searcher;