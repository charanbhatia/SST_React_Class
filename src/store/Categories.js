export function loadCategories(){
    return(dispatch)=>{
         fetch("https://667e3a60297972455f678ad9.mockapi.io/categories/name")
             .then((res) => {
                 return res.json;
             })
             .then((res) => {
                 console.log(res);
                 dispatch({type:"LOAD_CATEGORIES",payload:res});
             });
    }
}
function categoriesReducer(state={
    categories:[]
},action){
    switch(action.type){
        case "LOAD_CATEGORIES":{
            return{
                ...state,
                categories:action.payload
            }
        }
        default:
            return state;
    }
}
export default categoriesReducer;