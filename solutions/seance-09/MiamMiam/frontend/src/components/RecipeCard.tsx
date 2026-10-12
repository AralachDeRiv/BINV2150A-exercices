import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Rating,
  Button,
  Stack,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export interface RecipeCardProps {
  title: string;
  imageUrl: string;
  duration: number;
  difficulty: number;
  description?: string;
}

// 6. Réécrivez RecipeCard avec Card , CardMedia , CardContent , CardActions et Typography
export const RecipeCard = ({
  title,
  imageUrl,
  duration,
  difficulty,
  description,
}: RecipeCardProps) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" src={imageUrl}></CardMedia>
      <CardContent>
        <Typography
          variant="h5"
          component={"h2"}
          color="primary"
          sx={{ mb: 3 }}
        >
          {title}
        </Typography>

        {description && (
          <Typography component={"p"} sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}

        <Stack spacing={2} direction={"row"} sx={{ mb: 1 }}>
          <AccessTimeIcon />
          <Typography component={"p"}>{duration}</Typography>
        </Stack>

        <Rating value={difficulty} max={10} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained">CLICK</Button>
      </CardActions>
    </Card>
  );
};
