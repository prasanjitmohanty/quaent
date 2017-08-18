import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent implements OnInit {
  results: Object;
  title = 'Search quality content from the web...';
  busy: Subscription;

  ngOnInit() {
    // this.busy = this.http.get('...').subscribe();
  }

  constructor(private searchService: SearchService) { }

  performSearch(searchTerm: string) {
    if (searchTerm) {
      console.log("searchTerm::", searchTerm);
      this.busy = this.searchService.searchEntries(searchTerm)
        .subscribe(results => {
          console.log(results);
          this.results = results;
        });
    }
  }
  getQualityIndicator(score) {
    let scoreStyle = 'progress-bar '
    if (score >= 70) {
      scoreStyle += 'bg-success';
    } else if (score > 40 && score < 70) {
      scoreStyle += 'bg-warning';
    } else {
      scoreStyle += 'bg-danger';
    }

    return scoreStyle;
  }
}