import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
	constructor(private http:Http){
		console.log('Task Service Initialize....');
	}

	getTasks(){
		return this.http.get('http://bernaung.com/api/tasks')
			.map(res => res.json());
	} 

	addTask(newTask){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		console.log(newTask);
		console.log(JSON.stringify(newTask));
		return this.http.post('http://bernaung.com/api/task', JSON.stringify(newTask), {headers: headers})
			.map(res => res.json());
	}

	deleteTask(id){
		return this.http.delete('http://bernaung.com/api/task/' + id)
			.map(res => res.json());
	}

	updateStatus(task){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		console.log(task);
		console.log(JSON.stringify(task));
		return this.http.put('http://bernaung.com/api/task/' + task._id, JSON.stringify(task), {headers: headers})
			.map(res => res.json());

	}
}