import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {UserdataService} from '../userdata.service'

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  constructor(private packages: UserdataService) { }
  addPackage = new FormGroup({
    packageType: new FormControl(''),
    weight: new FormControl(''),
    length: new FormControl(''),
    breadth: new FormControl(''),
    picture: new FormControl(''),
    pick: new FormControl(''),
    drop: new FormControl(''),
    altPhn: new FormControl(''),
  });

  ngOnInit(): void {
  }
  SaveData(){
    console.log(this.addPackage.value);
    
    this.packages.addPackageApi(this.addPackage.value).subscribe((result) =>{
      console.log(result);
      
    })
  }
}
