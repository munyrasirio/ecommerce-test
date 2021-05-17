import React from 'react';
import { 
  Box,
  Button,
  DataTable,
  Text
} from "grommet";
import StdBtn from "./StdBtn";

export default function CartListView ({cart, incrementCart, decrementCart, checkout}) {
  return (
    <Box>
      <DataTable
        background={["white", "light-2"]}
        sort={{
          direction: "asc",       
          property: "name"
        }}
        pad="medium"
        columns={[         
          {
            property: 'name',
            header: <Text>Produto</Text>,
            primary: true,
          },
          {
            property: 'price',
            header: 'Valor un.',
            render: datum => (
              <Text>R$ {datum.price.toFixed(2).replace(".", ",")}</Text>
            ),
          },
          {
            property: 'total',
            header: 'Valor total',
            render: datum => (
              <Text>R$ {datum.total.toFixed(2).replace(".", ",")}</Text>
            ),
          },
          {
            property: 'quantity',
            header: 'Quantidade',
            render: datum => (
              <Box direction="row">
                <StdBtn type="Subtract" title="Decrementar quantidade" clickEvt={() => decrementCart(datum)} />
                <Text pad={{horizontal: "small"}}>{datum.quantity}</Text>  
                <StdBtn type="Add" title="Incrementear quantidade" clickEvt={() => incrementCart(datum)} />
              </Box>
            ),
          },
        ]}
        data={cart.items}
      />
      <Text weight="bold" margin="medium" textAlign="end">
        Total: R$ {cart.total ? cart.total.toFixed(2).replace(".", ",") : "R$ 00,00" }
      </Text>
      <Button primary label="Finalizar compra" onClick={() => checkout()} />
    </Box>
  )
}
