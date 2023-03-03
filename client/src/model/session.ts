import {reactive } from "vue";
//global session

const session = reactive({
    user: null as User | null;
});

interface User {
    id?: number; //question mark makes the attribute optional
    name: string;  
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
} //composables are functions that return reactive variables

export function login(){
    session.user = {
        name: "John Doe";
    }
}