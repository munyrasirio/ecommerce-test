import React from 'react';
import { Link } from "react-router-dom";
import { grommet } from 'grommet/themes'
import { 
  Box, 
  Grommet, 
  Image, 
  Main, 
  Stack, 
  Text 
} from 'grommet';
import { Cart, FormPreviousLink } from 'grommet-icons';

export default function ContainerView ({ counter, location, ...props }) {

  const backBtn = () => {
    return (
      <Link to="/" title="Voltar">
        <FormPreviousLink color="#18153d" size="40px" />
      </Link>
    )
  }

  return (
    <Grommet theme={grommet}>
      <Box
        direction='row'
        height="xsmall"
        align='center'
        justify='between'
        background="accent-3"
        pad={{ vertical: 'small', horizontal: 'medium' }}
        elevation='small'
      > 
        { location.pathname === "/checkout" ? backBtn() : <div/> }
        <Image 
          src="assets/logo_dark.svg" 
          a11yTitle="Logotipo"
          fill="vertical"
        />
        <Stack anchor="top-right">
          <Link to="/checkout" title="Carrinho">
            <Cart color="#18153d" size="40px" />
          </Link>
          <Box
            background="brand"
            pad={{ horizontal: '5px' }}
            round              
          >
            <Text size="small">{counter}</Text>
          </Box>
        </Stack>
      </Box>
      <Main pad="large">
        {props.children}
      </Main>
    </Grommet>
  )
}