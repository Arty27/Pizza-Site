import React, { useState } from 'react';
import { SideBarContainer, CloseIcon, Icon, SideBarLink, SideBarBtnWrp,SideBarMenu, SideBarRoute  } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
            <SideBarLink to='/'>Pizzas</SideBarLink>
            <SideBarLink to='/'>Desserts</SideBarLink>
            <SideBarLink to='/'>Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBarBtnWrp>
                <SideBarRoute to='/'>Order Now</SideBarRoute>
            </SideBarBtnWrp>
        </SideBarContainer>
    )
}

export default SideBar;
