import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { DarkModeToggleComponent } from "src/app/shared/dark-mode-toggle/dark-mode-toggle.component";

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html'

})
export class PerformanceComponent implements OnInit, AfterViewInit{

	@ViewChild(DarkModeToggleComponent) darkModeToggleComponent!: DarkModeToggleComponent;

    chart: any;
	isDarkMode: boolean = false;
	ngAfterViewInit(): void {
		// const toggleResult = this.darkModeToggleComponent.onToggle();
		// if (toggleResult !== undefined) {
		// 	this.isDarkMode = toggleResult;
		// }
	}

	ngOnInit(): void {
		const darkMode = JSON.stringify(localStorage.getItem('dark-mode'));
		if (darkMode.includes('true')) {
			console.log('dark mode is true');
			this.isDarkMode = true;
		} else {
			console.log('dark mode is false');
			this.isDarkMode = false;
		}
		 
	}
	chartOptions = {
	  animationEnabled: true,
	  theme: this.isDarkMode ? "dark1" : "light2",
	  title:{
		text: "February 2024 Attendance"
	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Number of hours"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Number of hours worked",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2024, 1, 1), y: 9.3},
			{ x: new Date(2024, 1, 2), y: 8.5},
			{ x: new Date(2024, 1, 5), y: 0},
			{ x: new Date(2024, 1, 6), y: 0},
			{ x: new Date(2024, 1, 7), y: 8},
			{ x: new Date(2024, 1, 8), y: 9.3},
			{ x: new Date(2024, 1, 9), y: 9},
			{ x: new Date(2024, 1, 12), y:8.9 },
			{ x: new Date(2024, 1, 13), y:8.2 },
			{ x: new Date(2024, 1, 14), y:8.5 },
        ]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Working Hours",
		dataPoints: [
			{ x: new Date(2024, 1, 1), y: 8 },
			{ x: new Date(2024, 1, 2), y: 8 },
			{ x: new Date(2024, 1, 5), y: 8 },
			{ x: new Date(2024, 1, 6), y: 8 },
			{ x: new Date(2024, 1, 7), y: 8 },
			{ x: new Date(2024, 1, 8), y: 8 },
			{ x: new Date(2024, 1, 9), y: 8 },
			{ x: new Date(2024, 1, 12), y:8 },
			{ x: new Date(2024, 1, 13), y:8 },
			{ x: new Date(2024, 1, 14), y:8 },
		]
	  }]
	}	
}                    