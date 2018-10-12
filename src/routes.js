import React from 'react'

import HomePage from './containers/Home/index'
import ProductsPage from './containers/Products/index'
import ProductActionPage from './containers/ProductAction/index'
import NotFound from './pages/NotFound'

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
