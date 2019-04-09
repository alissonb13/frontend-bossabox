import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { Observable } from 'rxjs';
import { getHttpQueryParams } from '../helpers/utils';

const API_URL = 'http://localhost:3000/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }

  getTools(params?: any): Observable<Tool[]> {
    const queryParams = getHttpQueryParams(params);
    return this.http.get<Tool[]>(API_URL + queryParams);
  }

  addTool(tool: Tool) {
    return this.http.post(API_URL, tool);
  }

  deleteTool(id: number) {
    return this.http.delete(API_URL + '/' + id);
  }
}
