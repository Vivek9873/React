// As we have just using javascript (not HTML) while making any custom hooks that why we are usign .js file
import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>(setData(res[currency])));
        // console.log(data);
    },[currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;