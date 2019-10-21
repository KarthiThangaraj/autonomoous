import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import Chart from 'chart.js';

const URL = 'http://192.168.0.137/simple_upload?tst=';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {

  title = 'ng8fileupload';
  public uploader: FileUploader = new FileUploader({ url: URL });
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
    file.withCredentials = false;
      console.log("file added")
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'white', 'black'],
        datasets: [{
          data: [5, 8, 15, 15, 18],
          borderColor: 'rgba(52, 176, 106, 1)',
          borderWidth: 1,
          fill: true,
          pointRadius: 0,
          backgroundColor: "rgba(234, 247, 240, 0.8)",
          // borderDash: [10,5]
        }],
        showLines: true
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        elements: {
          line: {
            tension: 0,
            fill: false
          }
        },
        scales: {
          xAxes: [{
            borderDash: [4, 4],
            gridLines: {
              drawTicks: false,
              borderDash: [4, 4],
              lineWidth: 2
            },
            ticks: {
              padding: 20
            }
          }],
          yAxes: [{
            borderDash: [4, 4],
            ticks: {
              stepSize: 10,
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
            },
            gridLines: {
              drawTicks: false,
              borderDash: [4, 4]
            }
          }]
        }
      }
    });
  }

}
