import React, { Component } from 'react'
import JsonTable from 'react-json-table'



    class Series extends Component {

    

     componentDidMount(){        
   
        }
    render() {       
                //var yourUrl = "http://www.ipeadata.gov.br/api/odata4/Paises";
                function Get(yourUrl){
                var Httpreq = new XMLHttpRequest(); // a new request
                Httpreq.open("GET",yourUrl,false);
                Httpreq.send(null);
                //Httpreq.responseType = 'json';
                return Httpreq.responseText;        
            }
        //axios
        //var json_obj = JSON.parse(Get("http://www.ipeadata.gov.br/api/odata4/Metadados")); 
        //console.log(json_obj.value);
        //const itens = Object.map((keys) => json_obj[keys].value)
        //console.log(Object.entries(json_obj.value));
        //console.log(itens);


        return(
        	<div class="container">
            
            {/*<JsonTable rows={ json_obj.value } />*/}
            </div>
                
)



}

}     

export default Series