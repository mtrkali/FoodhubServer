import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    //category
    const category = await prisma.mealCategory.create({
        data: {
            name: "Fast Food",
        },
    });

    const user = await prisma.user.findFirst();

    // meals
    const provider =  await prisma.providerProfile.create({
        data: {
            userId: user!.id,
            businessName: "Food Express",
        },
    });

   // meals
   await prisma.meal.createMany({
    data: [
        {
            title: "Burger",
            price: 120,
            providerId: provider.id,
            categoryId: category.id
        },
        {
            title: "pizza",
            price: 250,
            providerId: provider.id,
            categoryId: category.id,
        },
    ],
   });
}

main();

