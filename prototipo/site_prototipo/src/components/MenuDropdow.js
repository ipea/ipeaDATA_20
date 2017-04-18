import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MenuDropdow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
            <div id="MenuDropdow">
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
        <MenuItem value={1} primaryText="macroeconômico" />
        <MenuItem value={2} primaryText="" />
        <MenuItem value={3} primaryText="" />
        <MenuItem value={4} primaryText="" />
        <MenuItem value={5} primaryText="" />
      </DropDownMenu>
      
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
        <MenuItem value={1} primaryText="regional" />
        <MenuItem value={2} primaryText="" />
        <MenuItem value={3} primaryText="" />
        <MenuItem value={4} primaryText="" />
        <MenuItem value={5} primaryText="" />
      </DropDownMenu>
      
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
        <MenuItem value={1} primaryText="social" />
        <MenuItem value={2} primaryText="" />
        <MenuItem value={3} primaryText="" />
        <MenuItem value={4} primaryText="" />
        <MenuItem value={5} primaryText="" />
      </DropDownMenu>
      </div>
    );
  }
}
