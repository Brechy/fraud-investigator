import React from 'react'
import {Menu, Image, Header} from 'semantic-ui-react'

const MenuBar = () => {
  return (
     <Menu>
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
        <div className="userimg">
          <Header as="h5" floated="right">
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick S.
          </Header>
        </div>
      </Menu>
  )
}

export default MenuBar
