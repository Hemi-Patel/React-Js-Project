const initialState = {
    men_clothes: JSON.parse(localStorage.getItem('menClothing')) || [],
    brandFilter: JSON.parse(localStorage.getItem("brandFilter")) || [],
    singleProduct: null,
    loading: false
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEN_CLOTHING':
            let data = JSON.parse(localStorage.getItem('menClothing')) || [];
            data = [...data, action.payload];
            localStorage.setItem('menClothing', JSON.stringify(data));
            return {
                ...state,
                men_clothes: data
            }
        case 'GET_ALL_MEN_CLOTHINGS':
            let allData = JSON.parse(localStorage.getItem('menClothing')) || [];
            return {
                ...state,
                men_clothes: allData
            }
        case 'DELETE_PRODUCT':
            let products = JSON.parse(localStorage.getItem('menClothing')) || [];
            let UpdatedData = products.filter(v => v.id != action.payload);
            localStorage.setItem('menClothing', JSON.stringify(UpdatedData));
            return {
                ...state,
                men_clothes: UpdatedData
            }
        case 'GET_PRODUCT':
            let Products = JSON.parse(localStorage.getItem('menClothing')) || [];
            let product = Products.find(v => v.id == action.payload);

            return {
                ...state,
                singleProduct: product,
            }
        case 'EDIT_PRODUCT':
            let Data = JSON.parse(localStorage.getItem('menClothing')) || [];
            let updateProduct = Data.map((v, i) => {
                if (v.id == action.payload.id) {
                    return action.payload
                } else {
                    return v
                }
            })
            localStorage.setItem('menClothing', JSON.stringify(updateProduct));
            return {
                ...state,
                men_clothes: updateProduct,
                singleProduct: null
            }
        case "SET_BRAND_FILTER":
            localStorage.setItem("brandFilter", JSON.stringify(action.payload));
            return {
                ...state,
                brandFilter: action.payload,
            };

        case "CLEAR_BRAND_FILTER":
            localStorage.removeItem("brandFilter");
            return {
                ...state,
                brandFilter: [],
            };
        default:
            return state;
    }
}