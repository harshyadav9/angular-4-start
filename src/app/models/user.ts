export class User{
    
    id:number;
    name:string;
    
}


export class AppId{
    id:number;
    app_id:number;
    name:string;
    client_id:number;
    short_code_id:number;
    stop_keyword:string;
    
}

export interface queries{
    query:string
}

export interface grid{
    first:string;
    last:string;
    age:number;
}

