import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PsaSet, PsaSetData } from '../psa-set';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-psa-dropdown',
  templateUrl: './psa-dropdown.component.html',
  styleUrls: ['./psa-dropdown.component.scss']
})


/*
export class PsaSetData {
  public id: number;
  public name: string; 
  public email: string;
  public job_title: string;  
  public created_at: Date;
  public updated_at: Date;
  constructor(id: number, name:string, email:string, job_title:string, created_at:Date, updated_at:Date) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.job_title = job_title;
      this.created_at = created_at;
      this.updated_at = updated_at;
  }
} */


export class PsaDropdownComponent implements OnInit {
  psaSets:any
  listOfContacts:any
  originalList:any
  selectedSet:any
  selectedSetData:any
  selectedFromDate: any
  selectedToDate: any
  columns: any

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private http: HttpClient) {
          //get request from web api
          this.http.get('http://localhost/sets').subscribe(data => {

            this.listOfContacts = data;
            this.originalList = data;
            this.psaSets = data;

            console.log("psaSets:loaded", this.psaSets);
      }, error => console.error(error));

      this.selectedFromDate = new Date("4/30/2021");
      this.selectedToDate = new Date ("12/29/2021");
      this.columns = [
        "SubjectName",
        "Variety",
        "CardNumber",
        "Date1PSA8",
        "Date2PSA8",
        "DeltaPSA8",
        "Date1PSA9",
        "Date2PSA9",
        "DeltaPSA9",
        "Date1PSA10",
        "Date2PSA10",
        "DeltaPSA10",
        "Date1GradeTotal",
        "Date2GradeTotal",
        "DeltaGradeTotal"
      ]
  }

  changeSet(event:any) {
    console.log("selected new set", this.selectedSet);

    debugger;

    this.selectedFromDate = this.range.value.start;
    this.selectedToDate = this.range.value.end;

    let dirPath1 = new Date(this.selectedFromDate).toLocaleDateString("en-US");
    let dirPath2 = new Date(this.selectedToDate).toLocaleDateString("en-US");

    let dataSet1 = {
      tcg: this.selectedSet.tcg,
      set: this.selectedSet.set,
      setFriendlyName: this.selectedSet.setFriendlyName,
      dirPath: dirPath1
    }

    let dataSet2 = {
      tcg: this.selectedSet.tcg,
      set: this.selectedSet.set,
      setFriendlyName: this.selectedSet.setFriendlyName,
      dirPath: dirPath2
    }

    let tableData1: any, tableData2: any;

    this.http.post('http://localhost/test', dataSet1).subscribe(data => {
      debugger;
      tableData1 = data;
      this.http.post('http://localhost/test', dataSet2).subscribe(data => {
        tableData2 = data;
        let combinedTableData = [];
        debugger;
        
        if (tableData1 && tableData2) {
            for (let card of tableData1.data) {
              let tableData2Card = tableData2.data.find((x: PsaSetData)=> x.SpecID === card.SpecID);
              if (tableData2Card != undefined) {
                var combinedData = {
                    SubjectName: card.SubjectName,
                    Variety: card.Variety,
                    CardNumber: card.CardNumber,
                    Date1PSA8: card.Grade8,
                    Date2PSA8: tableData2Card.Grade8,
                    DeltaPSA8: tableData2Card.Grade8 - card.Grade8,
                    Date1PSA9: card.Grade9,
                    Date2PSA9: tableData2Card.Grade9,
                    DeltaPSA9: tableData2Card.Grade9 - card.Grade9,
                    Date1PSA10: card.Grade10,
                    Date2PSA10: tableData2Card.Grade10,
                    DeltaPSA10: tableData2Card.Grade10 - card.Grade10,
                    Date1GradeTotal: card.GradeTotal,
                    Date2GradeTotal: tableData2Card.GradeTotal,
                    DeltaGradeTotal: tableData2Card.GradeTotal - card.GradeTotal
                };
                combinedTableData.push(combinedData);
              } else {
                  console.log("Can't find card " + card.SubjectName + "for variety:" + card.Variety, card);
              }
            }
            console.log("loaded all the data into combined table", combinedTableData);
            this.selectedSetData = combinedTableData;
        }
      });
    });






  

  }

  ngOnInit(): void {
  }

}
