import { Accordion, Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./MenClothes.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getAllMenClothings, setBrandFilter, clearBrandFilter } from "../../Services/Action/productAction";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";

const MenClothes = () => {
    const { men_clothes, brandFilter } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(getAllMenClothings());
    }, [dispatch]);

    const handleBrandFilter = (e) => {
        const { value, checked } = e.target;
        const lowerValue = value.toLowerCase();

        if (checked) {
            dispatch(setBrandFilter([...brandFilter, lowerValue]));
        } else {
            dispatch(setBrandFilter(brandFilter.filter((v) => v !== lowerValue)));
        }
    };

    useEffect(() => {
        if (brandFilter.length === 0) {
            setFilteredProducts(men_clothes);
        } else {
            const filtered = men_clothes.filter((item) =>
                brandFilter.some(
                    (b) => item.brand?.toLowerCase() === b.toLowerCase()
                )
            );
            setFilteredProducts(filtered);
        }
    }, [brandFilter, men_clothes]);

    const handleClearAll = () => {
        dispatch(clearBrandFilter());
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const handleEdit = (id) => {
        navigate(`/editproduct/${id}`);
    };

    const brands = ["Nike", "Puma", "Adidas", "Togs & Terre", "H&M", "Calvin Klein", "U.S Polo"];

    return (
        <>
            <div className="main d-flex my-2 mx-3">
                <div className="col-md-3">
                    <div className="sidebar p-3 mx-0 border border-1" style={{ minHeight: "80vh" }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="fs-4 mb-0">Filters</h2>
                            <Button variant="outline-secondary" size="sm" onClick={handleClearAll}>
                                Clear All
                            </Button>
                        </div>

                        <div className="mt-3">
                            <Form.Group className="mb-3">
                                <Form.Label column sm="6" className="fw-bold fs-5">
                                    Brand
                                </Form.Label>
                                <Col className="d-flex flex-column">
                                    {brands.map((v, i) => (
                                        <Form.Check
                                            key={i}
                                            label={v}
                                            value={v.toLowerCase()}   
                                            type="checkbox"
                                            className="mt-3 ms-3 fs-5"
                                            checked={brandFilter.includes(v.toLowerCase())} 
                                            onChange={handleBrandFilter}
                                        />
                                    ))}
                                </Col>
                            </Form.Group>
                        </div>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="products mx-2">
                        <div className="title d-flex justify-content-between align-items-center">
                            <h4>Men Clothing</h4>
                            <InputGroup className="d-flex justify-content-center align-items-center border border-1 rounded-5 border-black w-25">
                                <Form.Control className="border-0 bg-transparent shadow-none" placeholder="Search:" />
                                <div className="Search_Icon fs-4">
                                    <CiSearch />
                                </div>
                            </InputGroup>
                        </div>

                        <div className="cards my-3 d-flex flex-wrap">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((v, i) => (
                                    <div key={i} className="col-md-3 mb-3">
                                        <Card className="mx-2 p-2" style={{ maxHeight: "100%" }}>
                                            <Card.Img
                                                variant="top"
                                                src={v.p_image}
                                                height={300}
                                                style={{ maxWidth: "100%", display: "block" }}
                                            />
                                            <Card.Body>
                                                <Card.Title className="text-nowrap overflow-hidden">{v.p_name}</Card.Title>
                                                <Card.Title className="text-nowrap overflow-hidden">{v.brand}</Card.Title>
                                                <Card.Text className="text-nowrap overflow-hidden">{v.description}</Card.Text>
                                                <Card.Text>₹{v.price}</Card.Text>
                                                <div className="actions d-flex justify-content-between align-items-center">
                                                    <Button className="fs-5 btn-danger" onClick={() => handleEdit(v.id)}>
                                                        <AiOutlineEdit />
                                                    </Button>
                                                    <Button className="fs-5 btn-danger" onClick={() => handleDelete(v.id)}>
                                                        <MdDeleteOutline />
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center w-100 mt-4">No products found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenClothes;
