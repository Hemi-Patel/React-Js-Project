import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
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

  const handleSearch = (e) => {
    e.preventDefault();
    let data = getStorageData();

    if (search.trim() === "") {
      setMovie(data);
    } else {
      let searchText = search.toLocaleLowerCase();
      let MovieData = data.filter(movie =>
        movie.name.toLocaleLowerCase().includes(searchText) ||
        movie.desc.toLocaleLowerCase().includes(searchText)
      );

      setMovie(MovieData);
    }
  };

  const handleAtoZ = () => {
    let MovieData = [...movie];
    MovieData.sort((a, b) => a.name.localeCompare(b.name));
    setMovie(MovieData);
  };

  const handleZtoA = () => {
    let MovieData = [...movie];
    MovieData.sort((a, b) => b.name.localeCompare(a.name));
    setMovie(MovieData);
  };
 

  return (
    <>
      <Container className="py-4">
        <h2 className="text-center mb-4">🎬 Movie Collection</h2>
        <div className="d-flex justify-content-end mb-5">
          <Form className="d-flex justify-content-center align-items-center" onSubmit={handleSearch}>
            <Form.Group>
              <Form.Control type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search movie Here" />
            </Form.Group>
            <Button type="submit" className=" ms-3">Search</Button>
          </Form>
          <div className="d-flex justify-content-center align-items-center ms-3">
            <Button className="me-2" onClick={handleAtoZ}>A-Z</Button>
            <Button className="me-2" onClick={handleZtoA}>Z-A</Button>
          </div>
        </div>

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

      </Container>
    </>
  );
};

export default Home;
