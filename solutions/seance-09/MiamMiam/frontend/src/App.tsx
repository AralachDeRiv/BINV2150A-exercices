import { CssBaseline, createTheme, ThemeProvider, Stack } from "@mui/material";
import { RecipeCard, type RecipeCardProps } from "./components/RecipeCard";

const recipe: RecipeCardProps = {
  title: "Pate",
  imageUrl:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecettesmaison.net%2Fwp-content%2Fuploads%2F2023%2F10%2Frecette-de-pates-italienne-1024x683.jpg&f=1&nofb=1&ipt=93ea643667b0e65c60bd362631b73cb4c46d7230679320d1829f231b4cba6d5b&ipo=images",
  duration: 30,
  difficulty: 4,
  description: "Une super recette de pates",
};

const App = () => {
  return (
    <Stack spacing={1} sx={{ p: 2 }}>
      <RecipeCard {...recipe} />
      <RecipeCard title="test" imageUrl="" duration={10} difficulty={6} />
    </Stack>
  );
};
export default App;
