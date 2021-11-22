import React, {useState} from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarItems'

const Navbar = ({toggle}) => {
    const [bgcolor, setBgColor]=useState(false)
    const changeBg=()=>{
        if(window.scrollY>=80){
            setBgColor(true)
        }
        else{
            setBgColor(false)
        }
    }
    window.addEventListener('scroll',changeBg)
    return (
        <Nav bgcolor={bgcolor}>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
    )
}

export default Navbar
