import React from 'react'

import HomePage from './pages/HomePage/index'
import ProductsPage from './pages/ProductsPage/index'
import ProductActionPage from './pages/ProductActionPage/index'
import NotFound from './pages/NotFound/index'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/product/list',
    exact: false,
    main: () => <ProductsPage />
  },
  {
    path: '/product/add',
    exact: false,
    main: ({history}) => <ProductActionPage history={ history } />
  },
  {
    path: '/product/:id/edit',
    exact: false,
    main: ({history, match}) => <ProductActionPage match={ match } history={ history } />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
]

export default routes
