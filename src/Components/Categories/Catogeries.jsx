import { useEffect, useState } from "react";
import {loadCategories} from "../../store/Categories";
function Categories(){
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
       dispatchEvent(loadCategories());
    },[]);
    return(
        <div>
            {
                categories.map((item)=>{
                    return(
                        <div key={item.id}>

                        </div>
                    );
                })
            }
        </div>
    )
}
export default Categories;