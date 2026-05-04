import { auth } from "../../lib/auth"

const getCurrentUser = async(headers:any) =>{
    const session = await auth.api.getSession({
        headers,
    });

    if(!session) {
        return null;
    }
    return session.user;
}


export const authService = {
    getCurrentUser,
}