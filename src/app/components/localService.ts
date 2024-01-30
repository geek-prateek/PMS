import { Injectable } from "@angular/core";
import { UserService } from "./login/user.service";

@Injectable({
    providedIn: 'root'
})
export class LocalService {
    constructor(){}

    public saveData(username: string, data: any){
        localStorage.setItem(username, JSON.stringify(data));
    }

    public getData(username: string){
        const storedData = localStorage.getItem(username);
        if(storedData){
            return JSON.parse(storedData);
        }else{
            return null;
        }
    }

    public removeData(username: string){
        localStorage.removeItem(username);
    }

    public clearAll(){
        localStorage.clear();
    }
}