import { prisma } from "../../lib/prisma"

const getAllProviders = async() =>{
    return await prisma.providerProfile.findMany({
        include: {
            user: true,
        }
    })
}


const createProvider = async(userId: string, businessName: string) => {
    return await prisma.providerProfile.create({
        data: {
            userId,
            businessName
        }
    })
}

export const providerService = {
    getAllProviders,
    createProvider
}