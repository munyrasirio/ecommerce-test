import React from "react";
import { 
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text
} from "grommet";

export default function ProductListItemView ({product, incrementCart}) {
  return (
    <Card 
      background="light-1"
      margin={{horizontal: "10px", bottom: "20px"}}
      width={{min: "240px", max: "350px"}}
    >
      <CardBody pad="medium">                  
        <Box direction="column" align="center">
          <Image 
            src={product.image}
            a11yTitle={product.name}
            fill="horizontal"
          />
          <Text textAlign="center" weight="bold" margin={{bottom: "small"}}>
            {product.name}
          </Text>
          <Text>R$ {product.price.toFixed(2).replace(".", ",")}</Text>
        </Box>
      </CardBody>
      <CardFooter 
        pad={{horizontal: "small", vertical: "small"}} 
        align="center"
        justify="center"
      >   
        <Button 
          primary 
          hoverIndicator 
          label="Adicionar ao carrinho"
          onClick={() => incrementCart(product)}
        />
      </CardFooter>
    </Card>
  )
}
