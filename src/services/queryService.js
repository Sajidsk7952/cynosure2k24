import { Account, Client, Databases,ID } from "appwrite";
import config from "../config";
class queryService{
    client = new Client();
    account;
    database;
    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.database = new Databases(this.client);
        this.account = new Account(this.client);
    }
    async sendQuery({name,email,query}){
        try{
            const res = await this.database.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId,ID.unique(),{name,email,query});
            console.log(res);
            return res;
        }catch(error){
            console.log("error at creation of doc",error);
            return error.message;
        }
    }
    async getAccount(){
        try{
            const acc = await this.account.get();
            console.log("the current account is: ",acc);
            return acc;
        }catch(error){
            console.log("error in getting account",error);
        }
    }
    async createAnomAccount(){
        try{
            const session = await this.account.createAnonymousSession();
            console.log("session creation success:",session);
            return session;
        }catch(error){
            console.log("error in account creation",error);
            return error.message;
        }
    }
    async deleteSessions(){
        try{
            const del = await this.account.deleteSessions();
            console.log(del);
            return del;
        }catch(error){
            console.log("error in deletion account",error);
            return error.message;
        }
    }
}

const queryAPI = new queryService();
export default queryAPI;