
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editProductsAsync, getProductAsync } from "../../Services/Action/productAction";

const EditProduct = () => {
    const initialState = {
        p_name:"",
        description:"",
        brand:"",
        price:"",
        quantity:"",
        category:"",
        subcategories:"",
        size:[],
        p_image:""
    }
    const [inputForm, setInputForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const singleProduct = useSelector((state) => state.ProductReducer.product || null);


    const handleInput = (e) => {
        let { name, value, type, checked } = e.target;
        if (type == 'checkbox') {
            setInputForm((prev) => ({
                ...prev,
                size: checked ? [...prev.size, value] : prev.size.filter(v => v != value)
            }))

        } else {
            setInputForm({ ...inputForm, [name]: value })
        }
    }
    useEffect(() => {
        dispatch(getProductAsync(id))
    }, [id])

    useEffect(() => {
        if (singleProduct) {
            setInputForm(singleProduct)
        }
    }, [singleProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProductsAsync(inputForm))
        navigate(-1)
    }
    return (
        <Container className="my-2">
            <Row className="justify-content-center shadow-lg pt-2 pb-3 rounded rounded-4 ">
                <Col lg={8} md={10}>
                    <h3 className="text-center mb-4 fw-bold text-danger">
                        Edit Men's Clothing
                    </h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    name="p_name"
                                    value={inputForm.p_name}
                                    placeholder="Enter Product Name"
                                    className="shadow-none"
                                    onChange={handleInput}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Description
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    name="description"
                                    value={inputForm.description}
                                    placeholder="Enter Product Description"
                                    className="shadow-none"
                                    onChange={handleInput}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Brand
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select
                                    name="brand"
                                    value={inputForm.brand}
                                    className="shadow-none"
                                    onChange={handleInput}
                                >
                                    <option>Select Brand</option>
                                    {["Nike",
                                        "Puma",
                                        "Adidas",
                                        "Togs & Terre",
                                        "H&M",
                                        "Calvin Klein",
                                        "U.S Polo",].map(
                                            (v, i) => (
                                                <option key={i} value={v}>
                                                    {v}
                                                </option>
                                            )
                                        )}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Price
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={inputForm.price}
                                    placeholder="Enter Product Price"
                                    className="shadow-none"
                                    onChange={handleInput}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Quantity
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="number"
                                    name="quantity"
                                    value={inputForm.quantity}
                                    placeholder="Enter Product Price"
                                    className="shadow-none"
                                    onChange={handleInput}
                                />
                            </Col>
                        </Form.Group>
                         <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Category
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select
                                    name="category"
                                    value={inputForm.category}
                                    className="shadow-none"
                                    onChange={handleInput}
                                >
                                    <option>Select Category</option>
                                    {["Men", "Women"].map(
                                        (v, i) => (
                                            <option key={i} value={v}>
                                                {v}
                                            </option>
                                        )
                                    )}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Sub Category
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select
                                    name="subcategories"
                                    value={inputForm.subcategories}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    
                                >
                                    <option>Select Sub Category</option>
                                    {["T-shirts", "Shirts", "Casual Shirts", "Formal Shirts","Jackets","Blazer","Jeans","Trouser"].map(
                                        (v, i) => (
                                            <option key={i} value={v}>
                                                {v}
                                            </option>
                                        )
                                    )}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Sizes
                            </Form.Label>
                            <Col sm="8">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((v, i) => (
                                    <Form.Check
                                        inline
                                        key={i}
                                        label={v}
                                        name="size"
                                        value={v}
                                        type="checkbox"
                                        checked={inputForm.size.includes(v)}
                                        className="shadow-none"
                                        onChange={handleInput}
                                    />
                                ))}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-4 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Image
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    name="p_image"
                                    value={inputForm.p_image}
                                    placeholder="Enter Image URL"
                                    className="shadow-none"
                                    onChange={handleInput}
                                />
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="danger" type="submit" className="px-5 py-2 rounded-3">
                                Edit Product
                            </Button>
                        </div>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default EditProduct;
