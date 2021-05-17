import React from 'react';
import { Link } from "react-router-dom";
import { 
  Box,
  Button,
  Heading
} from "grommet";

export default function EmptyCartView() {
  return  (
    <Box
      fill
      align="center"
      justify="center"
    >
      <Heading level="2" textAlign="center">
        O carrinho se encontra vazio no momento. 
      </Heading>
      <Link to="/">
        <Button primary label="Voltar aos produtos"/>
      </Link>
    </Box>
  )
}