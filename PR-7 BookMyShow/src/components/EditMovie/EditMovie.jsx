import { useEffect, useState } from "react";
import { Button, Container, Row, Form, Col, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate, useParams } from "react-router";

const EditMovie = () => {
  const initialState = {
    id: "",
    name: "",
    desc: "",
    price: "",
    category: "",
    image: ""
  };

  const [inputForm, setInputForm] = useState(initialState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let data = getStorageData();
    let record = data.find((movie) => movie.id == id);
    if (record) {
      setInputForm(record);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = getStorageData();
    let updatedData = data.map((movie) =>
      movie.id == inputForm.id ? inputForm : movie
    );
    setStorageData(updatedData);

    setInputForm(initialState);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4 movie-form">
            <h2 className="text-center mb-4 text-success">✏️ Edit Movie</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Title</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Description</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="desc"
                    value={inputForm.desc}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Price</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="number"
                    name="price"
                    value={inputForm.price}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Category</Form.Label>
                <Col sm={9}>
                  <Form.Select
                    name="category"
                    value={inputForm.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category...</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Horror">Horror</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Drama">Drama</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Movie Image</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="image"
                    value={inputForm.image}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit" className="px-4">
                  Update Movie
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditMovie;
