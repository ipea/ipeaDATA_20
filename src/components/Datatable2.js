import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const TableExampleSimple = () => (
  <Table>
    <TableHeader 
    displaySelectAll="false"
            adjustForCheckbox="false"
            enableSelectAll="false">

      <TableRow>
        <TableHeaderColumn width="20px">Data</TableHeaderColumn>
        <TableHeaderColumn width="20px">Risco</TableHeaderColumn>
        
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow> 
        <TableRowColumn width="20px">24/04/2017</TableRowColumn>
        <TableRowColumn width="20px">263</TableRowColumn>
        
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="20px">21/04/2017 </TableRowColumn>
        <TableRowColumn width="20px">212</TableRowColumn>
        
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="20px">20/04/2017</TableRowColumn>
        <TableRowColumn width="20px">275</TableRowColumn>
        
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="20px">19/04/2017</TableRowColumn>
        <TableRowColumn width="20px">273</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableExampleSimple;
