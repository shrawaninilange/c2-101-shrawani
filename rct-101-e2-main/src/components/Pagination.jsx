import React from "react";
import { Button, ButtonGroup ,Select} from '@chakra-ui/react'
import {useState,useEffect} from "react"
const Pagination = (  ) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const [page ,setpage] =useState(1)
  const [data , setdata ] = useState([])
  // const [text , setstudenttext ] = useState("")
  useEffect(() =>{
      getdata()
  },[])


  const getdata = async () =>{
    const data = await fetch ( `http://localhost:8080/Products?_page=${page}&_limit=5`).then((d)=>d.json()
    )
    setdata (data)
}
const pre =()=>{
if(page >1)
{
  setpage(page-1)
}
}
const first =()=>{

   
}

const last =()=>{
  if(page >1)
{
  setpage(page+1)
}
  
}
const next =()=>{
  
}
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick ={first}>first</Button>
      <Button data-cy="pagination-previous-button"  onClick ={pre}>previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button "  onClick ={next}>next</Button>
      <Button data-cy="pagination-last-button"   onClick ={last}>last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
