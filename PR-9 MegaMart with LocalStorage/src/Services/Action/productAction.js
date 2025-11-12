

export const addMenClothing =(data)=>{
    return{
        type:'ADD_MEN_CLOTHING',
        payload:data
    }
}
export const getAllMenClothings = ()=>{
    return{
        type:'GET_ALL_MEN_CLOTHINGS',
    }
}
export const deleteProduct = (id)=>{
    return{
        type:'DELETE_PRODUCT',
        payload:id
    }
}

export const getProduct = (id)=>{
    return{
        type:'GET_PRODUCT',
        payload:id
    }
}
export const editProducts=(data)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:data
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