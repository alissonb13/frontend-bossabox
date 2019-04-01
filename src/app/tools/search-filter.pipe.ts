import { Pipe, PipeTransform } from "@angular/core";
import { Tool } from '../shared/models/tool.model';
import { ToolsService } from '../core/services/tools.service';
import { tap } from 'rxjs/operators';

@Pipe({
    name: 'filterSearch'
})
export class FilterSearch implements PipeTransform {
    query: any;
    toolsTemp: Tool[] = [];

    constructor(private toolsService: ToolsService) { }

    transform(tools: Tool[], parameters?: any) {
       

        console.log(parameters);
        if(parameters !== null || parameters !== undefined) {
            if(parameters.onlyTags) {
                this.query = { tags_like: parameters.searchTerm };
            } else {
                this.query = { q: parameters.searchTerm };
            }

            this.searchTerms();

            console.log(this.toolsTemp);
            return this.toolsTemp;
        } else {
            return tools;
        }
    }

    private  searchTerms() {
        this.toolsService.getTools(this.query)
            .pipe(
                tap(tools => this.toolsTemp = tools)
            );
    }
}