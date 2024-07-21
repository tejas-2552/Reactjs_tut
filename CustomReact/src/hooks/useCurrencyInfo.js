import { useEffect, useState } from "react";
import resp from "./response";

function useCurrencyInfo(currency){

    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>{
            res.json
            console.log(res)
        }
        )
        .then(()=>setData(resp[currency]));
        console.log(data)
    },[currency])

    return data;
}



export default useCurrencyInfo;