import { ObjectId } from "mongodb"

export interface userSocketT {
    id : string,
    date : number
}

export interface messageSocketT {
    _id: string | ObjectId,
    name : string,
    text : string,
    date : number | NativeDate
}

export interface messageT {
    name : string,
    text : string
}

export interface responseSocketGood {
    ok : true,
    data : messageSocketT
}

export interface responseSocketBad {
    ok : false,
    error : any  
}

export type responseSocket = Promise<responseSocketGood | responseSocketBad>

export interface responseMongoDbGood {
    ok : true,
    data : any
}

export interface responseMongoDbBad {
    ok : false,
    error : any  
}

export type responseMongoDb = Promise<responseMongoDbGood | responseMongoDbBad>

export interface responseMDBDeleteGood {
    ok : true,
    _id : string
}

export interface responseMDBDeleteBad {
    ok : false,
    error : any
}

export type responseMDBDelete = Promise<responseMDBDeleteGood | responseMDBDeleteBad>