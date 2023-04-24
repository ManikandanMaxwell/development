import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('popup', { static: true }) popup:any;
  show:boolean = false;
  pagedata:any = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  modalOpen(data:any){
    this.show = true;
    this.pagedata = data
    // this.modalService.open(this.popup, { size: 'lg', centered: true, scrollable: true, backdrop: 'static', windowClass: 'modal-MD' });
  }

}
