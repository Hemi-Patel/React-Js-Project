import { useState } from "react";
import { Button, Container, Row, Form, Col, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router";
import generateUniqueId from "generate-unique-id";

const AddMovie = () => {
  const initialState = {
    id: "",
    name: "",
    desc: "",
    price: "",
    category: "",
    image: ""
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    if (!inputForm.name.trim()) {
      tempErrors.name = "Movie name is required.";
    }

    if (!inputForm.desc.trim()) {
      tempErrors.desc = "Description is required.";
    }
    if (!inputForm.price) {
      tempErrors.price = "Price is required.";
    }
    else if (Number(inputForm.price) <= 0) {
      tempErrors.price = "Price must be greater than 0.";
    }

    if (!inputForm.category) {
      tempErrors.category = "Select a category.";
    }

    if (!inputForm.image.trim()) {
      tempErrors.image = "Image URL is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newMovie = {
      ...inputForm,
      id: generateUniqueId({ length: 5, useLetters: false })
    };

    let oldData = getStorageData();
    oldData.push(newMovie);
    setStorageData(oldData);

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
            <h2 className="text-center mb-4 text-danger">➕ Add Movie</h2>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Movie Name</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    placeholder="Movie Name"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              {/* Description */}
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Description</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    placeholder="Movie Description"
                    name="desc"
                    value={inputForm.desc}
                    onChange={handleChange}
                    isInvalid={!!errors.desc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.desc}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              {/* Price */}
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Ticket Price</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="number"
                    placeholder="Ticket Price"
                    name="price"
                    value={inputForm.price}
                    onChange={handleChange}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              {/* Category */}
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Category</Form.Label>
                <Col sm={9}>
                  <Form.Select
                    name="category"
                    value={inputForm.category}
                    onChange={handleChange}
                    isInvalid={!!errors.category}
                  >
                    <option value="">Select Category...</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Horror">Horror</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Drama">Drama</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.category}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              {/* Image */}
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Movie Image</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={inputForm.image}
                    onChange={handleChange}
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="px-4">
                  Add Movie
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovie;
