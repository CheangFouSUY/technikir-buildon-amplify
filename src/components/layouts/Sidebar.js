
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar() {
    return(

    <ProSidebar>
    <Menu iconShape="square">
        <MenuItem icon={<FontAwesomeIcon icon="coffee" />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FontAwesomeIcon icon="coffee" />}>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu>
    </ProSidebar>
    );
    
}


export default Sidebar;