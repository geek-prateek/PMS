import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-qualification',
  templateUrl: './dashboard-qualification.component.html',
  styleUrls: ['./dashboard-qualification.component.css']
})
export class DashboardQualificationComponent implements OnInit {

  @Output() qualificationName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
