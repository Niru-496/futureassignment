import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
	// console.log(props);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={props.name}
				height="140"
				image={props.img}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.name}
				</Typography>
			</CardContent>
			<CardActions>
				<p size="small"> rating:{props.rating}</p>
				<p size="small">release_Date {props.release_Date}</p>
			</CardActions>
		</Card>
	);
}
