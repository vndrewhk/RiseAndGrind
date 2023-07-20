import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ImgMediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2.5rem",
        minHeight: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.image}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
