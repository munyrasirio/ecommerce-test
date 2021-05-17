import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const host = "http://localhost:3001";

export const useCategories = () => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    if (categories.length === 0) {
      axios.get(`${host}/categories`)
        .then(response => {
          setCategories(response.data);
        })
        .catch(error => {
          return "Erro."
        })
    }
  }, [categories]);

  return [categories]
}

export const useProducts = (intialCategory) => {
  const [ products, setProducts ] = useState([]);
  const [ category, setCategory ] = useState(intialCategory);
  const [ page, setPage ] = useState(1);
  const [ limit ] = useState(2);
  const [ totalItems, setTotalItems ] = useState(0);

  const prevPageRef = useRef();
  const prevCategoryRef = useRef();
  useEffect(() => {
    if(category.value !== prevCategoryRef.current) {
      setPage(1);
    }
    
    if (products.length === 0 || prevPageRef.current !== page || (category.value !== prevCategoryRef.current && page === 1)) {
      const qCategory = category.value > 0 ? `&idCategory=${category.value}` : "";
      axios.get(`${host}/products?_page=${page}&_limit=${limit}${qCategory}`)
      .then(response => {          
        setTotalItems(parseInt(response.headers['x-total-count']));
        setProducts(response.data);
      })
      .catch(error => {
        return "Erro."
      })
      
    }
    prevCategoryRef.current = category.value;
    prevPageRef.current = page;
  }, [products, page, limit, category]);

  return [category, setCategory, products, totalItems, page, limit, setPage]
}