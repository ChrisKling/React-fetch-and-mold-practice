import { useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export default function Photos() {
  useEffect(()=>{
    fetch(API_URL).then (response => if(response.ok) return response;  
  })
  return <div className="photo-wrapper">Loadin</div>;
}
