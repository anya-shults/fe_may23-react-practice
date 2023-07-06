/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import cn from 'classnames';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(currentCategory => (
    currentCategory.id === product.categoryId
  ));
  const user = usersFromServer.find(currentUser => (
    currentUser.id === category.ownerId
  ));

  return { ...product, category, user };
});

const getFilterProducts = (
  productsForFilter,
  query,
  searchValue,
  categoriesValue,
) => {
  let filteredProducts = [...productsForFilter];
  const normalizedSerchValue = searchValue.toLowerCase();

  if (query) {
    filteredProducts = filteredProducts.filter(product => (
      product.user.name === query
    ));
  }

  if (searchValue) {
    filteredProducts = filteredProducts.filter(product => (
      product.name.toLowerCase().includes(normalizedSerchValue)
    ));
  }

  if (categoriesValue.length) {
    filteredProducts = filteredProducts.filter(product => (
      categoriesValue.includes(product.category.title)
    ));
  }

  return filteredProducts;
};

const deleteFromCategoriesValue = (categoriesValue, categoryTitle) => {
  const newCategotiesValue = [...categoriesValue];

  return newCategotiesValue.filter(category => (
    category !== categoryTitle
  ));
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [categoriesValue, setCategoriesValue] = useState([]);

  const visibleProducts = getFilterProducts(
    products,
    query,
    searchValue,
    categoriesValue,
  );

  // console.log([products]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setQuery('')}
                className={cn({
                  'is-active': query === '',
                })}
              >
                All
              </a>

              {usersFromServer.map(user => (
                <a
                  data-cy="FilterUser"
                  href="#/"
                  key={user.id}
                  onClick={() => setQuery(user.name)}
                  className={cn({
                    'is-active': query === user.name,
                  })}
                >
                  {user.name}
                </a>
              ))}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={searchValue}
                  onChange={event => (
                    setSearchValue(event.target.value)
                  )}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {searchValue && (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => {
                        setSearchValue('');
                      }}
                    />
                  </span>
                )}
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className={cn('button is-success mr-6', {
                  'is-outlined': categoriesValue.length,
                })}
                onClick={() => setCategoriesValue([])}
              >
                All
              </a>

              {categoriesFromServer.map(category => (
                <a
                  data-cy="Category"
                  className={cn('button mr-2 my-1', {
                    'is-info': categoriesValue.includes(category.title),
                  })}
                  href="#/"
                  key={category.id}
                  onClick={() => (
                    categoriesValue.includes(category.title)
                      ? setCategoriesValue(
                        deleteFromCategoriesValue(
                          categoriesValue,
                          category.title,
                        ),
                      )
                      : setCategoriesValue([...categoriesValue, category.title])
                  )}
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={() => {
                  setQuery('');
                  setSearchValue('');
                  setCategoriesValue([]);
                }}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {!visibleProducts.length
            ? (
              <p data-cy="NoMatchingMessage">
                No products matching selected criteria
              </p>
            )
            : (
              <>
                <table
                  data-cy="ProductTable"
                  className="table is-striped is-narrow is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th>
                        <span className="is-flex is-flex-wrap-nowrap">
                          ID

                          <a href="#/">
                            <span className="icon">
                              <i data-cy="SortIcon" className="fas fa-sort" />
                            </span>
                          </a>
                        </span>
                      </th>

                      <th>
                        <span className="is-flex is-flex-wrap-nowrap">
                          Product

                          <a href="#/">
                            <span className="icon">
                              <i
                                data-cy="SortIcon"
                                className="fas fa-sort-down"
                              />
                            </span>
                          </a>
                        </span>
                      </th>

                      <th>
                        <span className="is-flex is-flex-wrap-nowrap">
                          Category

                          <a href="#/">
                            <span className="icon">
                              <i
                                data-cy="SortIcon"
                                className="fas fa-sort-up"
                              />
                            </span>
                          </a>
                        </span>
                      </th>

                      <th>
                        <span className="is-flex is-flex-wrap-nowrap">
                          User

                          <a href="#/">
                            <span className="icon">
                              <i data-cy="SortIcon" className="fas fa-sort" />
                            </span>
                          </a>
                        </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {visibleProducts.map(product => (
                      <tr data-cy="Product" key={product.id}>
                        <td
                          className="has-text-weight-bold"
                          data-cy="ProductId"
                        >
                          {product.id}
                        </td>

                        <td data-cy="ProductName">{product.name}</td>
                        <td data-cy="ProductCategory">{`${product.category.icon} - ${product.category.title}`}</td>

                        <td
                          data-cy="ProductUser"
                          className={cn({
                            'has-text-link': product.user.sex === 'm',
                            'has-text-danger': product.user.sex === 'f',
                          })}
                        >
                          {product.user.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};
