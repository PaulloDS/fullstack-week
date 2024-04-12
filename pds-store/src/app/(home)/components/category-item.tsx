import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {

    return (
        <Link href={`/category/${category.slug}`}>
            <Badge className="py-3 flex items-center justify-center gap-3 rounded-xl" variant={"outline"}>
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="text-xl font-bold">{category.name}</span>
            </Badge>
        </Link>
    );
}

export default CategoryItem;