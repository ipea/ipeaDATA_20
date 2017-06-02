/*import React, { Component } from "react";
import JsonTable from "react-json-table";

class Series extends Component {
    componentDidMount() {
        function Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
    }
    render() {
        var json_obj = JSON.parse(
            Get("http://www.ipeadata.gov.br/api/odata4/Paises")
        );
        return (
            <div className="container">

                <JsonTable rows={json_obj.value} />
            </div>
        );
    }
}

export default Series;*/