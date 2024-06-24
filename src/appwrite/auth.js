import { Client, ID, Account } from "appwrite";
import conf from "../configVariables/conf";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAcc({email, pass, name}){
        try {
            const userAcc = await this.account.create(ID.unique(), email, pass, name);
            if(userAcc){
                return this.login({email, pass});
            }
            else return userAcc;
        } catch (error) {
            throw error;
        }
    }

    async login({email, pass}){
        try {
            return await this.account.createEmailPasswordSession(email, pass);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const auth = new AuthService();

export default auth;