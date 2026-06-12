-- CreateEnum
CREATE TYPE "Cuisine" AS ENUM ('BANGLADESHI', 'INDIAN', 'CHINESE', 'ITALIAN', 'MEXICAN', 'THAI', 'JAPANESE');

-- CreateEnum
CREATE TYPE "DietaryPreference" AS ENUM ('HALAL', 'VEGAN', 'VEGETARIAN', 'GLUTEN_FREE', 'DAIRY_FREE', 'KETO');

-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "cuisine" "Cuisine" NOT NULL DEFAULT 'BANGLADESHI',
ADD COLUMN     "dietary" "DietaryPreference"[];
