import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {/* Left side - Cart items */}
                <div className="col-lg-8 col-md-12 mb-4">
                    <div className="card mb-4 border-0">
                        <div className="card-body">
                            <h4 className="card-title">Cart</h4>
                            <div className="table-responsive">
                                <table className="table text-center align-middle">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="./pizza-1.png" alt="" height="80" width="80" className="me-2" />
                                                    <b>Shrimp Pizza</b>
                                                </div>
                                            </td>
                                            <td style={{ color: "#777777" }}>$17</td>
                                            <td>1</td>
                                            <td style={{ color: "#777777" }}>$17</td>
                                            <td>
                                                <img src="./delete.png" alt="" height="20" width="20" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="./pizza-2.png" alt="" height="80" width="80" className="me-2" />
                                                    <b>Seafood Pizza</b>
                                                </div>
                                            </td>
                                            <td style={{ color: "#777777" }}>$20</td>
                                            <td>1</td>
                                            <td style={{ color: "#777777" }}>$20</td>
                                            <td>
                                                <img src="./delete.png" alt="" height="20" width="20" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="./pizza-3.png" alt="" height="80" width="80" className="me-2" />
                                                    <b>Cheese Pizza</b>
                                                </div>
                                            </td>
                                            <td style={{ color: "#777777" }}>$30</td>
                                            <td>1</td>
                                            <td style={{ color: "#777777" }}>$30</td>
                                            <td>
                                                <img src="./delete.png" alt="" height="20" width="20" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Coupon & Update buttons */}
                            <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
                                <div className="coupon-wrapper d-flex flex-wrap mb-2 mb-md-0">
                                    <input type="text" placeholder="Coupon code" className="coupon-input me-2" />
                                    <button className="coupon-btn">APPLY COUPON</button>
                                </div>
                                <button className="update-btn mt-2 mt-md-0">UPDATE CART</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Cart summary */}
                <div className="col-lg-4 col-md-12">
                    <div className="card p-4">
                        <div className="card-body fs-5" style={{ color: "#777777" }}>
                            <h5 className="card-title mb-3">Cart Total</h5>
                            <p className='mb-3 d-flex justify-content-between'>
                                Item(s) Subtotal: <span>$160.00</span>
                            </p>
                            <p className='mb-3 d-flex justify-content-between'>
                                Shipping Cost: <span>$10.00</span>
                            </p>
                            <hr />
                            <p className='d-flex justify-content-between'>
                                <strong>Order Total</strong> <span>$170.00</span>
                            </p>
                            <button className="proceed-btn mt-4 ms-0 w-100">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
