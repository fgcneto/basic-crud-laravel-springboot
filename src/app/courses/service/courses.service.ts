import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }
  //   findAll(): Course[]{
  //   return [
  //     {_id: '1', name: 'Angular', category: 'front-end'}
  //   ];
  // }

  findAll(){
    // <> setar/tipar o tipo de retorno
    // objetivando deixar legível
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      // first - realiza o unsubscribe/encerra conexão com servidor
      // automaticamente, após receber os dados
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
