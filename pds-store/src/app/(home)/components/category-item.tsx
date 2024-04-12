import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {

    return (
        <Badge className="py-3 flex items-center justify-center gap-3 rounded-xl" variant={"outline"}>
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="text-xl font-bold">{category.name}</span>
        </Badge>
    );
}

export default CategoryItem;