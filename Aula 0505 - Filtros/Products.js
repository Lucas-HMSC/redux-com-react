import React from 'react';
import { useSelector } from 'react-redux';

const filterColors = (colors) => (product) => {
  colors.length || colors.includes(product.color)
}

const filterPrices = (prices) => (product) => {
  (!prices.max || product.price <= prices.max) && 
  (!prices.min || product.price >= prices.min);
}

const filterProducts = ({ products }) => {
  const { data, filters } = products;
  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
}

const Products = () => {
  const data = useSelector(filterProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>nome</th>
          <th>cor</th>
          <th>preço</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(({ id, name, color, price }) => (
            <tr key={id}>
              <td>{ name }</td>
              <td>{ color }</td>
              <td>{ price }</td>  
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Products;
