import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Datatable extends Component {
	componentDidMount() {
    }
    render() {
        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
        return (
      /*  var json_obj = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Paises"));
      <BootstrapTable data={ json_obj.value }>
        <TableHeaderColumn dataField='PAICODIGO' isKey>Código</TableHeaderColumn>
        <TableHeaderColumn dataField='PAINOME'>Nome</TableHeaderColumn>
      </BootstrapTable>*/
      <h1>teste</h1>
        );
    }

}
export default Datatable;