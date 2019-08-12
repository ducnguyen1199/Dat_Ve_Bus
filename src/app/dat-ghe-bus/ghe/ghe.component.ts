import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})

export class GheComponent implements OnInit {
  @Input() item;
  @Output() eventChonGhe =new EventEmitter();
  trangThaiGhe:boolean=false;
  gheDaDat:boolean=false;
  constructor() {};
  ChonGhe(){
    if(!this.item.TrangThai){
      this.trangThaiGhe=!this.trangThaiGhe;
      this.eventChonGhe.emit(this.item);
    }
  }
  ngOnInit() {
  }

}
