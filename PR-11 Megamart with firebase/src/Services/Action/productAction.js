import { db } from '../../config/firebase.config';
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
    getDoc,
    updateDoc
} from 'firebase/firestore';

export const addClothing = (data) => ({
    type: 'ADD__CLOTHING',
    payload: data
});

export const getAllClothings = (data) => ({
    type: 'GET_ALL_CLOTHINGS',
    payload: data
});

export const getProduct = (data) => ({
    type: 'GET_PRODUCT',
    payload: data
});

export const editProducts = (data) => ({
    type: 'EDIT_PRODUCT',
    payload: data
});

export const setBrandFilter = (brands) => ({
    type: "SET_BRAND_FILTER",
    payload: brands
});

export const clearBrandFilter = () => ({
    type: "CLEAR_BRAND_FILTER"
});

export const Error = (msg) => ({
    type: "ERROR",
    message: msg
});


export const addClothingAsync = (data) => {
    return async (dispatch) => {
        try {
            await setDoc(doc(db, "megamart", `${data.id}`), data);
            dispatch(addClothing(data));
        } catch (error) {
            dispatch(Error(error.message));
        }
    };
};

export const getAllClothingsAsync = () => {
    return async (dispatch) => {
        try {
            const res = await getDocs(collection(db, "megamart"));
            const result = res.docs.map((doc) => doc.data());
            
            dispatch(getAllClothings(result));
        } catch (error) {
            dispatch(Error(error.message));
        }
    };
};

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "megamart", id));
            dispatch(getAllClothingsAsync());
        } catch (error) {
            dispatch(Error(error.message));
        }
    };
};

export const getProductAsync = (id) => {
    return async (dispatch) => {
        try {
            const singleProduct = doc(db, "megamart", id);
            const product = await getDoc(singleProduct);
            console.log(product.data);
            
            if (product.exists()) {
                dispatch(getProduct(product.data()));
            } else {
                dispatch(Error("Product not found"));
            }
        } catch (error) {
            dispatch(Error(error.message));
        }
    };
};

export const editProductsAsync = (data) => {
    return async (dispatch) => {
        try {
            const product = doc(db, "megamart", data.id);
            await updateDoc(product, data);
            dispatch(editProducts(data));
            dispatch(getAllClothingsAsync());
        } catch (error) {
            dispatch(Error(error.message));
        }
    };
};
