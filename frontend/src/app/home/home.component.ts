import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private pack :  UserdataService) { }
  selectPackage = new FormGroup({
    id: new FormControl('')
  });

  ngOnInit() {
    // this.myDataService.getUserData().subscribe((res:any) => {
    //   console.log("Response is => ",res);
    //   this.userData = res.data;
    // });
  }
  userData = [];
  searchPack(){
    console.log(this.selectPackage.value);
    
    this.pack.searchPackageApi(this.selectPackage.value).subscribe((result: any)=>{
      this.userData = result;
      console.log(result);
    })
  }
}

