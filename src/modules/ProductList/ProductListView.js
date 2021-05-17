import React from "react";
import ProductListItem from "./ProductListItem";
import { 
  Box,
  Pagination,
  Select
} from "grommet";

export default function ProductListView ({ 
  products, 
  totalItems, 
  page, 
  limit, 
  setPage,
  categories, 
  category, 
  setCategory, 
  incrementCart 
}) {
  const opts = categories.map((cat, key) => ( 
    { label: cat.name, value: cat.id }
  ))
  return (
    <>
      <Select 
        value={category}
        labelKey="label" 
        valueKey="value"
        options={[{label: "Selecione uma categoria", value: 0}, ...opts]}
        onChange={({option}) => setCategory(option)} />
      <Box 
        margin="large" 
        direction="row-responsive" 
        wrap={true} 
        justify="center"
        alignContent="center"
      >
        {
          products.map((product, key) => {
            return (
              <ProductListItem  { ...{product, key, incrementCart}} />
            )
          })
        }
      </Box>
      <Box margin={{bottom: "50px"}} direction="row" justify="center" alignContent="center">
        <Pagination 
          numberItems={totalItems}
          page={page}
          step={limit}
          onChange={({ page }) => {
            setPage(page);
          }}
        />
      </Box>
    </>
  )
}