import { PageLayout } from "./components/PageLayout";
import { RecipeList } from "./components/RecipeList";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#e65100" }, // orange MiamMiam
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageLayout title="Un super titre">
        <RecipeList />
      </PageLayout>
    </ThemeProvider>
  );
};
export default App;
