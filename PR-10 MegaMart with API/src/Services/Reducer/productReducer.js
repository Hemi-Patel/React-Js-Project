const initialState = {
    men_clothes: [],
    brandFilter:  [],
    singleProduct: null,
    loading: false
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEN_CLOTHING':
           
            return {
                ...state,
                men_clothes: action.payload
            }
        case 'GET_ALL_MEN_CLOTHINGS':
            return {
                ...state,
                men_clothes: action.payload
            }
        case 'GET_PRODUCT':
            // console.log(action.payload);
            
            return {
                ...state,
                singleProduct: action.payload,
            }
        case 'EDIT_PRODUCT':
            return {
                ...state,
                men_clothes: action.payload,
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