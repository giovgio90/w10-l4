import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const query = useSelector((state) => state.query);
  const jobs = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        if (data.length > 0) {
          const companyName = data[0].company_name; // Assicurati di ottenere il nome dell'azienda correttamente dai dati dell'API
          dispatch({ type: "SET_COMPANY_NAME", payload: companyName });
        }
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
          <Link to={"/company" + { handleChange }}>
            <Button variant="primary" type="submit" className="mt-2">
              Search
            </Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
