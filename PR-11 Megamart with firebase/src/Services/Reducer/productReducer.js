
const initialState = {
    products: [],
    brandFilter: [],
    product: null,
    error: null,
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD__CLOTHING":
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case "GET_ALL_CLOTHINGS":
            return { ...state, products: action.payload };
        case "GET_PRODUCT":
            return { ...state, product: action.payload };
        case "EDIT_PRODUCT":
            return {
                ...state,
                products: state.products.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        case "SET_BRAND_FILTER":
            return { ...state, brandFilter: action.payload };
        case "CLEAR_BRAND_FILTER":
            return { ...state, brandFilter: [] };
        case "ERROR":
            return { ...state, error: action.message };
        default:
            return state;
    }
};
