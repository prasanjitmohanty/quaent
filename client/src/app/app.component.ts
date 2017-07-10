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
  title ='Quality Content Search...';

  constructor(private searchService: SearchService) { }

  performSearch(searchTerm){
    this.searchService.searchEntries(searchTerm)
      .subscribe(results => {
        this.results = results;
      });
  }
}
