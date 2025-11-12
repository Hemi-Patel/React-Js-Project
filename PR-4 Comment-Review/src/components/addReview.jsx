import { useState } from "react";

import './addReview.css'

const AddReview = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});

  const getInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    let newErrors = {};

    if (!input.name) newErrors.name = "* Name is required";
    if (!input.profile) newErrors.profile = " * Profile picture URL is required";
    if (!input.email) newErrors.email = "* Email is required";
    else if (!/\S+@\S+\.\S+/.test(input.email)) newErrors.email = " * Enter a valid email";
    if (!input.designation) newErrors.designation = "* Designation is required";
    if (!input.rating) newErrors.rating = "* Rating is required";
    else if (input.rating < 1 || input.rating > 5) newErrors.rating = "* Rating must be 1–5";
    if (!input.description) newErrors.description = " * Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const setData = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setList([...list, input]);
    setInput({});
  };

  return (

    <div style={{ display: "flex", height: "100vh", padding: "20px" }}>
      <div
        style={{
          width: "25%",
          height: "85%",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          paddingTop: "80px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#fbf4f4ff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 align="center" style={{ marginBottom: "15px" }}>
          Add Review
        </h2>
        <form method="post" onSubmit={setData} align="center">
          <div style={{ marginBottom: "14px"}}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              value={input.name || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", borderRadius: "5px" }}
            />
            {errors.name && <p style={{ color: "red", fontSize: "14px", margin:"0",marginTop:"5px" }}>{errors.name}</p>}
          </div>
          <div style={{ marginBottom: "14px" }}>
            <input
              type="text"
              name="profile"
              placeholder="Profile Pic URL..."
              value={input.profile || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", borderRadius: "5px" }}
            />
            {errors.profile && <p style={{color:"red", fontSize:"14px", margin:"0",marginTop:"5px"}}>{errors.profile}</p>}
          </div>
          <div style={{ marginBottom: "14px" }}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              value={input.email || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", borderRadius: "5px" }}
            />
             {errors.email && <p style={{color:"red", fontSize:"14px", margin:"0",marginTop:"5px"}}>{errors.email}</p>}
          </div>
          <div style={{ marginBottom: "14px" }}>
            <input
              type="text"
              name="designation"
              placeholder="Enter Designation..."
              value={input.designation || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", borderRadius: "5px" }}
            />
            {errors.designation && <p style={{color:"red", fontSize:"14px", margin:"0",marginTop:"5px"}}>{errors.designation}</p>}
          </div>
          <div style={{ marginBottom: "14px" }}>
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              value={input.rating || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", borderRadius: "5px" }}
            />
            {errors.rating && <p style={{color:"red", fontSize:"14px", margin:"0",marginTop:"5px"}}>{errors.rating}</p>}
          </div>
          <div style={{ marginBottom: "14px" }}>
            <textarea
              name="description"
              placeholder="Enter Description..."
              value={input.description || ""}
              onChange={getInput}
              style={{ width: "75%", padding: "8px", border: "2px solid black", borderRadius: "5px" }}
            />
            {errors.description && <p style={{color:"red", fontSize:"14px", margin:"0",marginTop:"5px"}}>{errors.description}</p>}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                background: "#084688ff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 style={{ margin: "0 0 20px 20px",fontSize:"30px"}}>
          Review List
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {list.map((review, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                border: "1px solid #ccc",
                marginLeft: "20px",
                marginBottom: "10px",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#f9f3f3ff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={review.profile || "https://via.placeholder.com/120"}
                alt="profile"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "75%",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ margin: "5px 0" }}>{review.name}</h3>
              <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
                <b>Email:</b> {review.email}
              </p>
              <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
                <b>Designation:</b> {review.designation}
              </p>
              <p style={{ margin: "5px 0", fontSize: "15px", color: "#333" }}>

                <b>Rating:</b>  {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} style={{ fontSize: "18px", color: i < review.rating ? "#FFD700" : "#ccc" }}>
                    {i < review.rating ? "★" : "☆"}
                  </span>
                ))}
              </p>
              <p style={{ fontSize: "14px", color: "#444" }}>
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddReview;
