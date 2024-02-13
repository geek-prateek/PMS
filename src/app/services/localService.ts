import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class LocalService {

    title: string = "";
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

    public saveLeaveData(data: any){
        localStorage.setItem('leave', JSON.stringify(data));
    }

    public getLeaveData(){
        const storedData = localStorage.getItem('leave');
        if(storedData){
            return JSON.parse(storedData);
        }else{
            return null;
        }
    }

    public saveBirthdayData(data: any){
        localStorage.setItem('birthday', JSON.stringify(data));
    }

    public getBirthdayData(){
        const storedData = localStorage.getItem('birthday');
        if(storedData){
            return JSON.parse(storedData);
        }else{
            return null;
        }
    }

    public saveWorkData(data: any){
        localStorage.setItem('anniversary', JSON.stringify(data));
    }

    public getWorkData(){
        const storedData = localStorage.getItem('anniversary');
        if(storedData){
            return JSON.parse(storedData);
        }else{
            return null;
        }
    }
    
    public clearAll(){
        localStorage.clear();
    }
}