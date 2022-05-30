import React from "react";
 import {useState,useEffect} from "react"
import {Text, Image, Box,Stack , Heading,Tag, TagLabel } from '@chakra-ui/react'
 
const Product = () => {
  
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  // useEffect(() => {
  //   fetch("http://localhost:8080/Products")
  //     .then((r) => r.json())
  //     .then((d) => {
  //       setproduct(d);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       let res = await fetch(`http://localhost:8080/Products`);
  //       let data = await res.json();
  //       setempData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  const [page ] =useState(1)
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

  return (
    <Stack data-cy="product">
      
      {
        data.map((s)=>{
          return <div key ={s.id}>
            <img src= {s.imageSrc}   alt="" />
            <Image data-cy="product-image"  img = {s.imageSrc}    />
      <Text data-cy="product-category"     >{s.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender"  >{s.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title"    >{s.title}</Heading>
      <Box data-cy="product-price"   >{s.price}</Box>
          </div>
        })
      }
       
    </Stack>
  );
};

export default Product;
