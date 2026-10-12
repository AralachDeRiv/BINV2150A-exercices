import { Stack, Container } from "@mui/material";
import { RecipeCard, type RecipeCardProps } from "./components/RecipeCard";
import miamiam from "./assets/miammiam.png";
import { RecipeList } from "./components/RecipeList";
import { PageLayout } from "./components/PageLayout";

const recipe: RecipeCardProps = {
  title: "Pate",
  imageUrl:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecettesmaison.net%2Fwp-content%2Fuploads%2F2023%2F10%2Frecette-de-pates-italienne-1024x683.jpg&f=1&nofb=1&ipt=93ea643667b0e65c60bd362631b73cb4c46d7230679320d1829f231b4cba6d5b&ipo=images",
  duration: 30,
  difficulty: 4,
  description: "Une super recette de pates",
  category: "dinner",
};

const App = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            src={miamiam}
            alt="miamiam.png"
          />
        </Container>

        <Container>
          <RecipeList />
        </Container>
      </PageLayout>
    </>
  );
};
export default App;
