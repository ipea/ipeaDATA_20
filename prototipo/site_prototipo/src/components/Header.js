/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { render} from 'react-dom';
import AppBar from 'material-ui/AppBar';


class Header extends React.Component {

    render() {
        return(
                <AppBar
            title="IpeaData"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                );


    }
}

export default Header;