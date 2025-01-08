import { useEffect, useState } from "react";
import styles from './search.module.css';
const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="dc92d6f9f9ab4e7a9b085dbeac596fe7";
export default function Search({foodData,setData}){
    const[query,setQuery]=useState("pizza");
    useEffect(()=>{
            async function fetchApi(){
                const resp=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
                const data=await resp.json();
                console.log(data.results);
                setData(data.results);
            }
            fetchApi();
    },[query])
    return (<div className={styles.searchContainer}>
        <input className={styles.modinput} onChange={(e)=>setQuery(e.target.value)}type="text" value={query}/>
        </div>);
}