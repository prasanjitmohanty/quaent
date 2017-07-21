import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results: Object;
  title ='Search quality content from the web...';

  constructor(private searchService: SearchService) { }

  performSearch(searchTerm: string){
    if(searchTerm){
    console.log("searchTerm::",searchTerm);
    this.searchService.searchEntries(searchTerm)
      .subscribe(results => {
        console.log(results);
        this.results = results;
      });
  }
 }
}