import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/authContext'


function Navbar() {
   // const navigate=useNavigate();   useNavigate  from 'react-router-dom'
   
const authContext= useContext(AuthContext)

  return (<Menu>
<Menu.Item  as={Link} to ={"/"}>
   
    Ana Sayfa
</Menu.Item>
<Menu.Item as={Link} to={"/posts"}>
   Postlar
</Menu.Item>
      {!authContext.isAuthenticated &&<Menu.Item as ={Link} to={"./login"}>Giriş Yap</Menu.Item>}
  </Menu>
   
  )
}

export default Navbar