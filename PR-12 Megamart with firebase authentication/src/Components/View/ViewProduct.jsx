import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getProductAsync } from "../../Services/Action/productAction";
import "./ViewProduct.css"; // 👈 Create this CSS file below

const ViewProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const singleProduct = useSelector((state) => state.ProductReducer.product || {});   

    useEffect(() => {
        dispatch(getProductAsync(id));
    }, [id]);

    return (
        <Container className="view-product my-5 ">
            <div className="product-card shadow-lg rounded-4 overflow-hidden d-flex flex-wrap bg-white w-100" >
                {/* Image Section */}
                <div className="col-md-6 col-sm-12 p-4 d-flex align-items-center justify-content-center border-end">
                    <img
                        src={singleProduct.p_image || "/placeholder.jpg"}
                        alt={singleProduct.p_name}
                        className="product-image img-fluid rounded-4"
                    />
                </div>

                {/* Details Section */}
                <div className="col-md-6 col-sm-12 p-5">
                    <h2 className="fw-bold mb-3">{singleProduct.p_name}</h2>
                    <p className="text-muted mb-4">{singleProduct.description}</p>

                    <div className="details mb-4">
                        <p><strong>Brand:</strong> {singleProduct.brand}</p>
                        <p><strong>Category:</strong> {singleProduct.category}</p>
                        <p><strong>Subcategory:</strong> {singleProduct.subcategories}</p>
                        <p><strong>Available Sizes:</strong> {singleProduct.size ? singleProduct.size.join(", ") : "N/A"}</p>
                    </div>

                    <div className="d-flex gap-3">
                        <Button variant="danger" className="px-4 py-2">Add to Cart</Button>
                        <Button variant="outline-dark" className="px-4 py-2" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ViewProduct;
