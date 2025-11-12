import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router";

const Home = () => {
  const [movie, setMovie] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let data = getStorageData();
    setMovie(data);
  }, []);

  const handleDelete = (id) => {
    let updatedData = movie.filter((p) => p.id !== id);
    setMovie(updatedData);
    setStorageData(updatedData);
  };

  const handleEdit = (id) => {
    navigate(`/EditMovie/${id}`);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">🎬 Movie Collection</h2>
      {movie.length === 0 ? (
        <h5 className="text-center text-muted">No movies available</h5>
      ) : (
        <Row>
          {movie.map((movie) => (
            <Col key={movie.id} md={3} sm={6} xs={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src={movie.image}
                  alt={movie.name}
                  className="rounded-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{movie.name}</Card.Title>
                  <Card.Text className="text-muted small">
                    {movie.desc}
                  </Card.Text>
                  <Card.Text>
                    <b>💲Price:</b> {movie.price}
                  </Card.Text>
                  <Card.Text>
                    <b>📂 Category:</b> {movie.category}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => handleEdit(movie.id)}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(movie.id)}
                    >
                      🗑️ Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
