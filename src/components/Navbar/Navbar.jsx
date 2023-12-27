import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


function Navbar() {
    const navigate=useNavigate();
   
  return (<Menu>
<Menu.Item  as={Link} >
   
    Ana Sayfa
</Menu.Item>
<Menu.Item as={Link} to={"/posts"}>
   Postlar
</Menu.Item>
  </Menu>
   
  )
}

export default Navbar