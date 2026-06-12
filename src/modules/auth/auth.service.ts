import { auth } from "../../lib/auth"
import { prisma } from "../../lib/prisma";
import { UserRole } from "../../middlewares/auth";

const getCurrentUser = async(headers:any) =>{
    const session = await auth.api.getSession({
        headers,
    });

    if(!session) return null;
    const user =  session.user;
    if(user.role === UserRole.PROVIDER) {
        const provider = await prisma.providerProfile.findUnique({
            where: {
                userId: user.id,
            }});
            return {...user, providerId: provider?.id};
    }
    return user;
}


export const authService = {
    getCurrentUser,
}