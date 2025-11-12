import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addClothing, addClothingAsync } from "../../Services/Action/productAction";

const AddClothes = () => {
    const initialState = {
        p_name: "",
        description: "",
        brand: "",
        price: "",
        quantity: "",
        category: "",
        subcategories: "",
        size: [],
        p_image: "",
    };

    const [inputForm, setInputForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleInput = (e) => {
        let { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setInputForm((prev) => ({
                ...prev,
                size: checked
                    ? [...prev.size, value]
                    : prev.size.filter((v) => v !== value),
            }));
        } else {
            setInputForm({ ...inputForm, [name]: value });
        }
    };


    const validateForm = () => {
        let newErrors = {};

        if (!inputForm.p_name.trim())
            newErrors.p_name = "Product name is required.";
        if (!inputForm.description.trim())
            newErrors.description = "Product description is required.";
        if (!inputForm.brand.trim()) newErrors.brand = "Brand name is required.";
        if (!inputForm.price) newErrors.price = "Price is required.";
        else if (inputForm.price <= 0)
            newErrors.price = "Price must be greater than 0.";
        if (!inputForm.quantity) newErrors.quantity = "Quantity is required.";
        else if (inputForm.quantity < 1)
            newErrors.quantity = "Quantity must be at least 1.";
        if (!inputForm.category || inputForm.category === "Select Category")
            newErrors.category = "Please select a category.";
        if (!inputForm.subcategories || inputForm.subcategories === "Select Sub Category")
            newErrors.subcategories = "Please select a Sub  category.";
        if (inputForm.size.length === 0)
            newErrors.size = "Please select at least one size.";
        if (!inputForm.p_image.trim())
            newErrors.p_image = "Product image URL is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newProduct = {
                ...inputForm,
                id: generateUniqueId({
                    useLetters: false,
                    length: 6,
                }),
            };

            dispatch(addClothingAsync(newProduct));
            navigate("/");
        }
    };


    return (
        <Container className="my-3">
            <Row className="justify-content-center shadow-lg pt-3 pb-4 rounded rounded-4">
                <Col lg={8} md={10}>
                    <h3 className="text-center mb-4 fw-bold text-danger">
                        Add 's Clothing
                    </h3>

                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    name="p_name"
                                    placeholder="Enter Product Name"
                                    value={inputForm.p_name}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.p_name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.p_name}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Description
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    rows={2}
                                    placeholder="Enter Product Description"
                                    value={inputForm.description}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Product Brand
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    name="brand"
                                    placeholder="Enter Brand Name"
                                    value={inputForm.brand}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.brand}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.brand}
                                </Form.Control.Feedback>
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
                                    placeholder="Enter Product Price"
                                    value={inputForm.price}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.price}
                                </Form.Control.Feedback>
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
                                    placeholder="Enter Product Quantity"
                                    value={inputForm.quantity}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.quantity}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.quantity}
                                </Form.Control.Feedback>
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
                                    isInvalid={!!errors.category}
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
                                <Form.Control.Feedback type="invalid">
                                    {errors.category}
                                </Form.Control.Feedback>
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
                                    isInvalid={!!errors.subcategories}
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
                                <Form.Control.Feedback type="invalid">
                                    {errors.subcategories}
                                </Form.Control.Feedback>
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
                                        className="shadow-none"
                                        onChange={handleInput}
                                        checked={inputForm.size.includes(v)}
                                    />
                                ))}
                                {errors.size && (
                                    <div className="text-danger small mt-1">{errors.size}</div>
                                )}
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
                                    placeholder="Enter Image URL"
                                    value={inputForm.p_image}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.p_image}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.p_image}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="danger" type="submit" className="px-5 py-2 rounded-3">
                                Add Product
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddClothes;
