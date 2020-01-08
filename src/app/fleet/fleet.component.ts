import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import * as AWS from 'aws-sdk';
import { FleetService } from './fleet.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
  providers: [FleetService]
})
export class FleetComponent implements OnInit {
  inputUrl;
  outputUrl;
  myfile: any;
  file: any;
  showOutput: boolean;
  showObject: boolean;
  objectList = [];
  selectedValue;
  details;
  total_count: any;
  date;
  webUrl;
  sample: any = "";
  constructor(public service: FleetService,
    private spinner: NgxSpinnerService,
    public _http: HttpClient,
    private toastr: ToastrService, private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    // _http.get('file:///home/mitosis/git/autonomoous/src/assets/test.html')
    service.getHtml().subscribe((html: any) =>
      this.sample = this.sanitizer.bypassSecurityTrustHtml(html)
    );
  }

  reinsertScripts(): void {
    const scripts = <HTMLScriptElement[]>this.elementRef.nativeElement.getElementsByTagName('script');
    const scriptsInitialLength = scripts.length;
    for (let i = 0; i < scriptsInitialLength; i++) {
      const script = scripts[i];
      const scriptCopy = <HTMLScriptElement>document.createElement('script');
      scriptCopy.type = script.type ? script.type : 'text/javascript';
      if (script.innerHTML) {
        scriptCopy.innerHTML = script.innerHTML;
      } else if (script.src) {
        scriptCopy.src = script.src;
      }
      scriptCopy.async = false;
      script.parentNode.replaceChild(scriptCopy, script);
    }
  }

  ngOnInit() {

    this.details = {
      object: '',
      price: ''
    }

    this.objectList = [
      {
        object: 'sample',
        price: '123'
      }
    ];
    this.date = Date.now();
    this.showOutput = false;
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

  getImg(key) {
    AWS.config.credentials = new AWS.Credentials({
      accessKeyId: 'AKIAT6ARWIKNIHSZPLLG', secretAccessKey: '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'
    });

    var awsConfig = new AWS.Config({
      accessKeyId: 'AKIAT6ARWIKNIHSZPLLG',
      secretAccessKey: '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',
      region: 'us-east-2'
    });

    const s3 = new AWS.S3(awsConfig);

    const params1 = {
      Bucket: 'aasd-input-bucket-v1',
      Key: key
    };
    const params2 = {
      Bucket: 'aasd-input-bucket-v1',
      Key: 'out_' + key
    };
    // let s3 = new AWS.S3();
    this.showOutput = true;
    this.inputUrl = s3.getSignedUrl('getObject', params1);
    console.log('inputUrl', this.inputUrl);

    this.outputUrl = s3.getSignedUrl('getObject', params2);
    console.log('outputUrl', this.outputUrl);
    this.spinner.hide();
    this.toastr.success('Object detected');
    this.file = "";
    this.webUrl = "";
  }

  uploadfile(event) {
    let key;
    console.log('this.file', this.file);
    console.log('this.webUrl', this.webUrl);
    // this.getImg('test3.jpg');
    if (this.file) {
      this.webUrl = "";
      this.spinner.show();
      this.inputUrl = '';
      this.outputUrl = '';
      AWS.config.accessKeyId = 'AKIAT6ARWIKNIHSZPLLG';
      AWS.config.secretAccessKey = '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';
      let bucket = new AWS.S3({ params: { Bucket: 'aasd-input-bucket-v1' } });
      let params: any = { Key: this.file.name, Body: this.file };
      bucket.upload(params, (err, data) => {
        console.log(err, data)
        key = data.Key;
        this.service.uploadImage(key).subscribe(
          res => {
            console.log('res', res);
            if (res.status == "Error") {
              this.toastr.error('select diffrent image');
              this.spinner.hide();
            } else {
              this.selectedValue = '';
              this.objectList = res.data.price_data;
              this.total_count = res.data.total_count;
              this.date = Date.now();
              this.showObject = false;
              this.getImg(key);
            }
          }
        );
      });
    } else if (this.webUrl) {
      this.file == "";
      this.spinner.show();
      this.inputUrl = '';
      this.outputUrl = '';
      this.service.uploadUrl(this.webUrl).subscribe(
        res => {
          console.log('res', res);
          if (res.status == "Error") {
            this.toastr.error('select diffrent image');
            this.spinner.hide();
          } else {
            this.selectedValue = '';
            this.objectList = res.data.price_data;
            this.total_count = res.data.total_count;
            this.date = Date.now();
            this.showObject = false;
            key = res.data.file_name;
            this.getImg(key);
          }
        }
      )
    } else {
      this.toastr.error('Image not seleted');
      return;
    }
  }

  fileEvent(fileInput: any) {
    console.log('fileInput', fileInput);
    let files = fileInput.target.files;
    let file = files[0];
    this.file = file;
    console.log(this.file);
  }

  change() {
    this.details = this.selectedValue;
    this.showObject = true;
  }

}
