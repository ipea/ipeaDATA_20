/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { render} from 'react-dom';
import IconButton from 'material-ui/AppBar';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/AppBar';
import FlatButton from 'material-ui/AppBar';
import MenuItem from 'material-ui/AppBar';


class Header extends React.Component {

    render() {
        return(
                <div>
                    <AppBar
                        title="IpeaData"
                        iconClassNameRight="false"
                
                        />
                    <AppBar
                        title="Title"
                        iconElementLeft={ < IconButton > <NavigationClose /> < /IconButton>}
                                        iconElementRight = {<FlatButton label="Save" />} />
                        <br />
                        <AppBar
                            title="Title"
                            iconElementLeft={ < IconButton > <NavigationClose /> < /IconButton>}
                                                    iconElementRight = {
                                                    <IconMenu iconButtonElement={
                                                                                    <IconButton><MoreVertIcon /></IconButton>
                                                        }>
                                                        <MenuItem primaryText="Refresh" />
                                                        <MenuItem primaryText="Help" />
                                                        <MenuItem primaryText="Sign out" />
                                                    </IconMenu>
                            } />
                            </div>
                                                                    );


                                                        }
                                            }

                                    export default Header;