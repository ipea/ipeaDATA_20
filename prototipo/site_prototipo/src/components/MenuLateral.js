import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
 
  
};

const MenuLateral = () => (
        <div id="MenuLateral">
            <div>
                <Paper style ={style} >
                    <Menu>
                        <MenuItem primaryText="Maps" />
                        <MenuItem primaryText="Books" />
                        <MenuItem primaryText="Flights" />
                        <MenuItem primaryText="Apps" />
                    </Menu>
                </Paper>
            </div>
            </div>
            );

export default MenuLateral;


