import { Stack } from "@mui/material";
import { RecipeCard, type RecipeCardProps } from "./RecipeCard";

const recipes: RecipeCardProps[] = [
  {
    title: "Spaghetti Carbonara",
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    duration: 9,
    difficulty: 8,
    description: "Un grand classique italien crémeux et savoureux.",
  },
  {
    title: "Poulet au curry",
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    duration: 45,
    difficulty: 5,
    description: "Un poulet parfumé accompagné d'une sauce au curry.",
  },
  {
    title: "Pate",
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    duration: 30,
    difficulty: 4,
    description: "Une super recette de pates",
    category: "dinner",
  },
  {
    title: "Pate",
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    duration: 30,
    difficulty: 4,
    description: "Une super recette de pates",
    category: "dinner",
  },
];

export const RecipeList = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        useFlexGap
        sx={{ flexWrap: "wrap", display: "flex", justifyContent: "center" }}
      >
        {recipes.map((r, i) => (
          <RecipeCard key={i} {...r} />
        ))}
      </Stack>
    </>
  );
};
