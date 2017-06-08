module.exports = {
    moduleGrid: function(data){
            window.baseurl =  "http://js.syncfusion.com/demos/ejServices/";
            $("#Grid").ejGrid({
                dataSource: ej.DataManager({url: window.baseurl + "Wcf/Northwind.svc/Orders?$top=100", offline: true }),                
                allowPaging: true,
                allowSorting: true,              
                allowGrouping: true,
                allowFiltering: true,
                allowReordering: true,
              allowMultiSorting: true,
              	filterSettings: { filterType: "excel" },
				toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.ExcelExport, ej.Grid.ToolBarItems.WordExport, ej.Grid.ToolBarItems.PdfExport] },
                columns: [
                  		 { type:"checkbox", width: 50 },
                         { field: "OrderID", headerText: "Order ID", width: 75 , textAlign: ej.TextAlign.Right },
                         { field: "CustomerID", headerText: "Customer ID", width: 80 },
                         { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right },
                         { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right },
                         { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
                         { field: "ShipCity", headerText: "Ship City", width: 110 }
                ],
		toolbarClick: function (e) {
                   this.exportGrid = this["export"];
                   if (e.itemName == "Excel Export") {
                       this.exportGrid(window.baseurl + 'api/grid/ExcelExport');
                       e.cancel = true;
                       alert("dfa");
                   }
                   else if (e.itemName == "Word Export") {
                       this.exportGrid(window.baseurl + 'api/grid/WordExport');
                       e.cancel = true;
                   }
                   else if (e.itemName == "PDF Export") {
                       this.exportGrid(window.baseurl + 'api/grid/PdfExport');
                       e.cancel = true;
                   }
               },
            });       
    },
    moduleGraph:function(data){
        
    }
}