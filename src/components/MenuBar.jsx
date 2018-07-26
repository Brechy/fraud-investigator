import React from 'react'
import {Menu, Image, Header} from 'semantic-ui-react'

const MenuBar = () => {
  return (
     <Menu position="right">
        <Menu.Item
          name='home'
        >
          Home
        </Menu.Item>
        <Menu.Item
        name='investigations'
        >
          Investigations
        </Menu.Item>
          <Header as="h2">
            <Image float="right" circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
          </Header>
      </Menu>
  )
}

export default MenuBar
