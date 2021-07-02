import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilters, selectUniqueColors } from './store/products';

const Filter = () => {
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [selectedColors, setSelectedColors] = React.useState([]);

  const colors = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(changeFilters({ name: 'prices', value: {
      min: Number(minPrice),
      max: Number(maxPrice),
    } }));
  }, [minPrice, maxPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([ ...selectedColors, target.value ]);
    } else {
      setSelectedColors(selectedColors.filter(color => color !== target.value));
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <div>
      <input 
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="Min"
      />

      <input 
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="Max"
      />

      {
        colors.map(color => (
          <label key={color}>
            <input 
              type="checkbox" 
              value={color}
              checked={handleChecked(color)}
              onChange={handleChange}
            />
            { color }
          </label>
        ))
      }
    </div>
  )
}

export default Filter
