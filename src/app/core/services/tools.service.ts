import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }

  getTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>(API_URL);
  }

  addTool(tool: Tool) {
    return this.http.post(API_URL, tool);
  }

  deleteTool(id: number) {
    return this.http.delete(API_URL + '/' + id);
  }
}
