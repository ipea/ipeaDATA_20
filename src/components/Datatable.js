import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn width="55%">Nome</TableHeaderColumn>
        <TableHeaderColumn width="10%">Unidade</TableHeaderColumn>
        <TableHeaderColumn width="15%">Freq</TableHeaderColumn>
        <TableHeaderColumn width="20%">Período</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow> 
        <TableRowColumn width="55%"><a href='/EMBI_Risco-Brasil'>EMBI + Risco-Brasil</a> </TableRowColumn>
        <TableRowColumn width="10%">-</TableRowColumn>
        <TableRowColumn width="15%">Diária</TableRowColumn>
        <TableRowColumn width="20%">1994-24/04/2017</TableRowColumn>
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="55%"><a href='/#'>Exportações - média semanal</a> </TableRowColumn>
        <TableRowColumn width="10%">US$</TableRowColumn>
        <TableRowColumn width="15%" >Diária</TableRowColumn>
        <TableRowColumn width="20%">2002-26/03/2017</TableRowColumn>
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="55%"><a href='/#'>Exportações - preços - índice (média 2006 = 100)</a> </TableRowColumn>
        <TableRowColumn width="10%">-</TableRowColumn>
        <TableRowColumn width="15%">Mensal</TableRowColumn>
        <TableRowColumn width="20%">1977-2017.02</TableRowColumn>
        
      </TableRow>
      <TableRow>
        <TableRowColumn width="55%"><a href='/#'> IGP-DI - geral - índice (ago. 1994 = 100)</a> </TableRowColumn>
        <TableRowColumn width="10%">-</TableRowColumn>
        <TableRowColumn width="15%">Mensal</TableRowColumn>
        <TableRowColumn width="20%">1944-2017.03</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableExampleSimple;
