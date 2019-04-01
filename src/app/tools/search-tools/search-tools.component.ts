import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { debounceTime, debounce } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-tools',
  templateUrl: './search-tools.component.html',
  styleUrls: ['./search-tools.component.css']
})
export class SearchToolsComponent implements OnInit, OnDestroy {
  @Output() searchTerm = new EventEmitter<string>();
  @Output() searchOnlyTags = new EventEmitter<boolean>();
  @Input() valueSearch: any;
  debounce = new Subject<string>();

  query: any;
  onlyTags: boolean = false;
  searchString: string = '';

  ngOnInit() {
    this.debounce.pipe(debounceTime(300))
                 .subscribe(() => this.searchInputEvent());
  }

  checkOnlytags() {
    if(this.onlyTags) {
      this.searchOnlyTags.emit(true);
    } else {
      this.searchOnlyTags.emit(false);
    }
  }

  searchInputEvent() {
    this.checkOnlytags();
    console.log(this.searchString);
    this.searchTerm.emit(this.searchString);
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
