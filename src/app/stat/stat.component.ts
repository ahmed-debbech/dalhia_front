import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsService } from 'app/commands/commands.service';
import { CommandsAdmin } from 'app/models/commands-admin';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  commands : CommandsAdmin[]
  arr : number[] =[]
   counttt:{} = {};
   ID : string[] = []
   show = false;
   Occ : number[] = []
  constructor(private commandsService : CommandsService) {
    
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [100, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.commandsService.getCommands().subscribe((data)=> {
      this.commands = data
      this.commands.forEach((data)=> {
        data.idProducts.forEach((data) => {
          this.arr.push(data)
          const counts = {};

    this.arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
          this.counttt = counts
        })
        
     });
    console.log(this.counttt)
    Object.keys(this.counttt).map((key)=> {
      this.ID.push("ProductId : " +key)
      this.Occ.push(this.counttt[key])
    })
    })

    console.log(this.ID)
    console.log(this.Occ)
  }
change(){
  this.show=true
}
}
