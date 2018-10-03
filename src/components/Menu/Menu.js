import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/product/list',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={ to }
      exact={ activeOnlyWhenExact }
      children={({match}) => {
        return (
          <li className={ match&&'active' }>
            <Link to={ to }>{ label }</Link>
          </li>
        )
      }}
    />
  )
}

export default class Menu extends Component {
  showMenuLink = menus.map((item, index) => {
    return(
      <MenuLink
        key={ index }
        to={ item.to }
        label={ item.name }
        activeOnlyWhenExact={ item.exact }
      />
    )
  })

  render() {
    return (
      <div className="navbar navbar-default">
        <Link to="/" className="navbar-brand">TEST</Link>
        <ul className="nav navbar-nav">
          { this.showMenuLink }
        </ul>
      </div>
    )
  }
}
