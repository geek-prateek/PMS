import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalService {
    constructor(){}

    public saveData(key: any){
        localStorage.setItem('userData', JSON.stringify(key));
    }

    public getData(key: string){
        return localStorage.getItem(key);
    }

    public removeData(key: string){
        localStorage.removeItem(key);
    }

    public clearAll(){
        localStorage.clear();
    }
}