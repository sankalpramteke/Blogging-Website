// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";


// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
            
//     }

//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 // call another method
//                 return this.login({email, password});
//             } else {
//                return  userAccount;
//             }
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({email, password}) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite serive :: getCurrentUser :: error", error);
//         }

//         return null;
//     }

//     async logout() {

//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite serive :: logout :: error", error);
//         }
//     }
// }

// const authService = new AuthService();

// export default authService

import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            if (session) {
                const user = await this.account.get();
                localStorage.setItem("user", JSON.stringify(user)); // Store user info in localStorage
            }
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            if (user) {
                localStorage.setItem("user", JSON.stringify(user)); // Store user info
                return user;
            }
        } catch (error) {
            console.log("User not logged in");
            localStorage.removeItem("user"); // Remove stored user on error
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            localStorage.removeItem("user"); // Clear stored user on logout
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

    isLoggedIn() {
        return localStorage.getItem("user") !== null; // Check if user info exists
    }
}

const authService = new AuthService();
export default authService;
