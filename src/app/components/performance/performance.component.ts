import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html'

})
export class PerformanceComponent{
    chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
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
			{ x: new Date(2024, 1, 3), y: 8.9},
			{ x: new Date(2024, 1, 4), y: 10},
			{ x: new Date(2024, 1, 5), y: 8.2},
			{ x: new Date(2024, 1, 6), y: 9.3},
			{ x: new Date(2024, 1, 7), y: 9},
			{ x: new Date(2024, 1, 8), y: 9.3},
			{ x: new Date(2024, 1, 9), y: 9},
			{ x: new Date(2024, 1, 10), y:8.2 },
			{ x: new Date(2024, 1, 11), y:8.4 },
			{ x: new Date(2024, 1, 12), y:8.9 },
        ]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Working Hours",
		dataPoints: [
			{ x: new Date(2024, 1, 1), y:  8},
			{ x: new Date(2024, 1, 2), y:  8},
			{ x: new Date(2024, 1, 3), y:  8},
			{ x: new Date(2024, 1, 4), y:  8},
			{ x: new Date(2024, 1, 5), y:  8},
			{ x: new Date(2024, 1, 6), y:  8},
			{ x: new Date(2024, 1, 7), y:  8},
			{ x: new Date(2024, 1, 8), y:  8},
			{ x: new Date(2024, 1, 9), y:  8},
			{ x: new Date(2024, 1, 10), y: 8 },
			{ x: new Date(2024, 1, 11), y: 8 },
			{ x: new Date(2024, 1, 12), y: 8 },
		]
	  }]
	}	
}                    