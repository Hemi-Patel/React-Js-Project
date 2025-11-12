export const getStorageData=()=>{
    return JSON.parse(localStorage.getItem('movies'))||[];
}

export const setStorageData=(data)=>{
    localStorage.setItem('movies',JSON.stringify(data))
}