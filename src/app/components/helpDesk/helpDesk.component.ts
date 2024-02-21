import { Component } from "@angular/core";

@Component({
    selector: "app-helpDesk",
    templateUrl: "./helpDesk.component.html",
    styles: [`
    #table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid black;
  }
  
  #table td,
  #table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  #table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  #table tr:hover {
    background-color: #ddd;
  }
  
  #table th {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    background-color: #7385df;
    color: white;
  }

#tableBody{
    height: 50vh;
}

.empty{
    text-align: center;
    line-height: 400px;
    color: rgb(194, 194, 194);
    
  }
  
    `]

})
export class HelpDeskComponent{

    helpdeskDetails = [];

}