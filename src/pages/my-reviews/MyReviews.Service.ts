
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Injectable} from '@angular/core';
import { Header } from 'ionic-angular';
@Injectable()
export class My_Reviews{
    constructor(private http:HttpClient)
    {
      
    }

    
 get_myreviews(user_id){
      const endpoint='http://localhost:8000/api/review/?user__id='
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get(endpoint+user_id,{headers:headers})
  }

 
  update_myreviews(review_id,info){
    const endpoint='http://localhost:8000/api/review/'
  const headers = new HttpHeaders({'Content-Type':'application/json'});
  return this.http.put(endpoint+review_id+'/',info,{headers:headers})
}

 delete_myreview(review_id){
  const endpoint='http://localhost:8000/api/review/'
  const headers = new HttpHeaders({'Content-Type':'application/json'});
  return this.http.delete(endpoint+review_id+'/',{headers:headers})

 }

 

}