import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-psa-table',
  templateUrl: './psa-table.component.html',
  styleUrls: ['./psa-table.component.scss']
})

export class PsaTableComponent implements OnInit {
  title = 'angular13';
  searchText = "";
  @Input() listOfContacts:any;
  @Input() columns:any;
  originalList:any;
  sortDirectionAscending:boolean;

  constructor(private http: HttpClient) { 

    this.sortDirectionAscending = false;
      //get request from web api
      /*this.http.get('https://www.testjsonapi.com/users/').subscribe(data => {

        this.listOfContacts = data;
        this.originalList = data;

    }, error => console.error(error)); */
    this.originalList = this.listOfContacts;
  }

  Search() {
      this.listOfContacts = this.originalList;
      // alert(this.searchText)
    if (this.searchText !== "") {
        let searchValue = this.searchText.toLocaleLowerCase();

        this.listOfContacts = this.listOfContacts.filter((contact: any) => {
          //loop through each of the object properties to search by all columns
            return contact.SubjectName.toLocaleLowerCase().match(searchValue);
            // you can keep on adding object properties here   

        });

        console.log(this.listOfContacts);
    }
  }

  Sort(column:string, isNumeric:boolean) {
    this.sortDirectionAscending = !this.sortDirectionAscending
    if (this.sortDirectionAscending) {
        console.log("sorting ascending by column " + column);
        //this.listOfContacts = this.listOfContacts.sort((a: any,b: any) => a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0);
        this.listOfContacts = this.listOfContacts.sort(function(a:any, b:any) {
          if (isNumeric) {
            return parseFloat(a[column]) < parseFloat(b[column]) ? -1 : parseFloat(a[column]) < parseFloat(b[column]) ? 1 : 0;
          } else {
            return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
          }
        });
        console.log("sort results", this.listOfContacts);
    } else {
        console.log("sorting descending by column " + column);
        //this.listOfContacts = this.listOfContacts.sort((a: any,b: any) => a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0);
        this.listOfContacts = this.listOfContacts.sort(function (a:any, b:any) {
          if (isNumeric) {
            return parseFloat(a[column]) < parseFloat(b[column]) ? 1 : parseFloat(a[column]) > parseFloat(b[column]) ? -1 : 0;
          } else {
            return a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0;
          }
        });
        console.log("sort results", this.listOfContacts);
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.listOfContacts = changes.listOfContacts.currentValue;
    this.originalList = this.listOfContacts;
    debugger;
  }

}
