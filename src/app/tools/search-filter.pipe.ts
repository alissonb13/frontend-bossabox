import { Pipe, PipeTransform } from "@angular/core";
import { Tool } from '../shared/models/tool.model';
import { ToolsService } from '../core/services/tools.service';

@Pipe({
    name: 'filterSearch'
})
export class FilterSearch implements PipeTransform {

    constructor(private toolsService: ToolsService) { }

    transform(tools: Tool[], parameters?: any) {
        let query: any;
        let toolstest: Tool[] = [];

        if(parameters) {
            if(parameters.onlyTags) {
                query = { tags_like: parameters.searchTerm };
            } else {
                query = { q: parameters.searchTerm };
            }

            console.log(query);

            this.toolsService.getTools(query)
            .subscribe(response => {
                if(response) {
                    toolstest = response.filter((tool) => {
                        return tool;
                    });

                    console.log(toolstest);
                }
            });

            console.log(toolstest);

            console.log(tools);

            return tools;
        } else {
            return tools;
        }
    }
}