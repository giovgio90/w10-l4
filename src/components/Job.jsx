import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <button>Aggiungi ai preferiti</button>
      </Col>
      <Col xs={9}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
