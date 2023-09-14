import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useEffect } from "react";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const company_name = useSelector((state) => state.company_name);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company_name]);

  const getJobs = async () => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company_name}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "SET_JOBS", payload: data });
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
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {company_name}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
