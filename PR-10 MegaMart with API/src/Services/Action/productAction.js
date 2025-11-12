import axios from 'axios'

export const addMenClothing = (data) => {
    return {
        type: 'ADD_MEN_CLOTHING',
        payload: data
    }
}
export const getAllMenClothings = (data) => {
    return {
        type: 'GET_ALL_MEN_CLOTHINGS',
        payload: data
    }
}

export const getProduct = (data) => {
    return {
        type: 'GET_PRODUCT',
        payload: data
    }
}
export const editProducts = (data) => {
    return {
        type: "EDIT_PRODUCT",
        payload: data
    }
}

export const setBrandFilter = (brands) => {
    return {
        type: "SET_BRAND_FILTER",
        payload: brands,
    };
};

export const clearBrandFilter = () => {
    return {
        type: "CLEAR_BRAND_FILTER",
    };
};
export const Error = (msg) => {
    return {
        type: "ERROR",
        message: msg
    }
}

// api

export const addMenClothingAsync = (data) => {
    return (dispatch) => {
        axios.post(`http://localhost:3000/mens`, data)
            .then((res) => dispatch(addMenClothing(res.data)))
            .catch((msg) => dispatch(Error(msg)))
    }
}

export const getAllMenClothingsAsync = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/mens`)
            .then((res) => dispatch(getAllMenClothings(res.data)))
            .catch((msg) => dispatch(Error(msg)))
    }
}

export const deleteProductAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/mens/${id}`)
            .then(() => dispatch(getAllMenClothingsAsync()))
            .catch((msg) => dispatch(Error(msg)))
    }
}

export const getProductAsync = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/mens/${id}`)
            .then((res) => dispatch(getProduct(res.data)))
            .catch((msg) => dispatch(Error(msg)))
    }
}

export const editProductsAsync = (data) => {
    return(dispatch)=>{
        axios.put(`http://localhost:3000/mens/${data.id}`, data)
        .then((res)=>dispatch(editProducts(res.data)))
         .catch((msg) => dispatch(Error(msg)))
    }
}
