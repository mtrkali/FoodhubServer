import { prisma } from "../../lib/prisma"

const getAllProviders = async() =>{
    return await prisma.providerProfile.findMany({
        include: {
            user: true,
        }
    })
}


export const providerService = {
    getAllProviders,
}