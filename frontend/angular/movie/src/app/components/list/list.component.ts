import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Byte } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public movies: any = [];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  getMovies() {
    const accessToken = localStorage.getItem('accessToken')!;
    this.http.get("http://localhost:3000/api/getMovies", {
      headers: {
        authorization: accessToken
      }
    })
      .subscribe((res) => {
        this.movies = res;
      })
  }

  private toBase64(arr: Array<Byte>) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }
  public getPoster(movie:Record<string, any>){
    const arr = (movie as any).poster.data as Array<Byte>;
    return `data:image/png;base64,${this.toBase64(arr)}`
  }

}
