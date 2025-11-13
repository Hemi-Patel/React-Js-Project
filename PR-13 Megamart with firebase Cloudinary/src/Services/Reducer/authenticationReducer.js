

const initialState = {
    errorMessage:"",
    user:JSON.parse(localStorage.getItem('user'))||null,
    isCreated:false
}
export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ERROR_MESSAGE':
            return{
                ...state,
                errorMessage:action.payload,
                isCreated:false
            } 
        case 'SIGN_UP_USER':
            return{
                ...state,
                isCreated:true
            } 
        case 'SIGN_IN_USER':
            localStorage.setItem('user',JSON.stringify(action.payload))
            return{
                ...state,
                isCreated:false,
                user:action.payload
            } 
        case 'SIGN_OUT_USER':
            localStorage.removeItem('user')
            return{
                ...state,
                isCreated:false,
                user:null
            } 
        default:
           return state
    }
}