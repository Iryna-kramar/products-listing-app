import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from './actions/categoriesActions';
import { getProducts } from "./actions/productsActions";
import SelectDropdown from './components/SelectDropdown';
import Header from './components/Header';

const App = ({ categories, dispatch }) => {
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    const category = event.target.value.trim();
    if (category) {
      dispatch(getProducts(category));
    }
  };

  return (
    <div>
      <Header />
      <div className="category-dropdown">
        <SelectDropdown categories={categories}
        handleCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { categories } = state;

  return {
    categories
  };
};

export default connect(mapStateToProps)(App);
