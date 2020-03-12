import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

export function ArtistOptionsData({ children }) {

  const [formObject, setformObject] = useState(
    {
      artist: "",
    })

  function inputData(event) {
    console.log(event.target);
    setformObject({
      ...formObject,
      artist: formObject.artist

    })
  }

  return (


    <Form.Control as="select" placeholder="Select an Artist" onChange={inputData}>
      {children}
    </Form.Control>

  );
}

export function OptionItem({ children }) {  
  

  return <option >{children}</option>;
}

export default ArtistOptionsData;
