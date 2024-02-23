import { Component } from "@angular/core";

@Component({
    selector: "app-helpDesk-table",
    template: `
    <div class="container">
        <table id="table">
        <thead>
    <tr>
      <ng-content select="[slot=start]"></ng-content>
      <th>Ticket ID</th>
      <th>Subject</th>
      <th>Description</th>
      <th>Status</th>
    </tr>
  </thead>
          <ng-content></ng-content>
        </table>
        </div>`,
    styleUrls: ["../helpDesk.component.css"]

    
})
export class HelpDeskTableComponent {
    
}