import { reactive } from "vue";

const session = reactive({
    user: null as User | null
});

interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}

export function setLogin(loginData: {name: string}) {
    session.user = {
        name: loginData.name
    }
}