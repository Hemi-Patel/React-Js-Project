import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInGoogleAsync, signInUserAsync, signUpUserAsync } from "../../Services/Action/authentcationAction";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const initialState = {
        email: "",
        password: "",
    };

    const [inputForm, setInputForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const { user } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleInput = (e) => {
        let { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value });
    };


    const validateForm = () => {
        let newErrors = {};
        if (!inputForm.email.trim())
            newErrors.email = "email is required.";
        if (!inputForm.password.trim())
            newErrors.password = "password required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newUser = {
                ...inputForm,
            };
            dispatch(signInUserAsync(newUser));
        }
    };
    const handleGoogleSignIn = ()=>{
        dispatch(signInGoogleAsync())
    }
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])



    return (
        <Container className="my-3 mt-5">
            <Row className="justify-content-center shadow-lg pt-3 pb-4 rounded rounded-4">
                <Col lg={8} md={10}>
                    <h3 className="text-center mb-4 fw-bold text-danger">
                        Sign In
                    </h3>

                    <Form onSubmit={handleSubmit} noValidate >
                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={inputForm.email}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 align-items-center">
                            <Form.Label column sm="4" className="fw-semibold">
                                Password
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={inputForm.quantity}
                                    className="shadow-none"
                                    onChange={handleInput}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>



                        <div className="text-center">
                            <Button variant="danger" type="submit" className="px-5 py-2 rounded-3">
                                Sign In
                            </Button>

                            <Button  variant="danger" className="mx-2 px-3 py-2 rounded-3"  onClick={handleGoogleSignIn} > Sign In With Google</Button>

                            <p className="pt-3">You Don't have Account? Please <Link to="/signUp" style={{ color: "blue", textDecoration: "underline" }} >SignUp</Link></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};




export default SignIn;