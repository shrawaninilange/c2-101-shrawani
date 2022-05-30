import React from "react";
import {useState} from "react"
import { useDisclosure } from "@chakra-ui/react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio } from "@chakra-ui/react";
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [formdata, setFormdata] = useState({

    imageSrc :  "https://picsum.photos/seed/picsum6/420/260",
    gender :"pant"
  });
  const [data ,setdata] =useState([])

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    // value = type === "checkbox" ? checked : value;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:8080/Products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      let data = await res.json();
      setdata([...data, data]);
    } catch (error) {
      console.log(error);
    }
  };
   const [show ,set] =useState(true)
    
  return (
    <>
      <Button my={4} data-cy="add-product-button"  onClick={onOpen}  >add pro</Button>
     <Modal>
         <ModalBody pb={6}>
           <Input data-cy="add-product-title" name ="title"  onChange={handleChange} />
           <Select data-cy="add-product-category" name ="category"  onChange={handleChange} >
             <option data-cy="add-product-category-shirt" >shirt</option>
             <option data-cy="add-product-category-pant">pant</option>
             <option data-cy="add-product-category-jeans">jeans</option>
           </Select>
           <RadioGroup data-cy="add-product-gender" name="gender"  onChange={handleChange} >
             <Radio data-cy="add-product-gender-male">male</Radio>
             <Radio data-cy="add-product-gender-female">female</Radio>
             <Radio data-cy="add-product-gender-unisex">unisex</Radio>
           </RadioGroup>
           <Input data-cy="add-product-price"  name ="price"  onChange={handleChange} />
           <Button onClick={ handleSubmit} data-cy="add-product-submit-button" >add</Button>
         </ModalBody>
       </Modal> 
     
    </>
  );
};

export default AddProduct;
