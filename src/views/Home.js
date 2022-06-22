import axios from "axios";
import { useEffect, useState } from "react";
// import ImgMediaCard from "../content/card";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";


const { default: SearchAppBar } = require("../content/Navbar");

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5000/movies")
			.then((result) => {
				setData(result.data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, [data]);
	if(!data) return null

	function handleChange(e){
		if(e.tartget.value === "name"){
			const sorted = data.sort(function (a,b){
				return a-b
			})
			setData(sorted)
		}

	}

	return (
		<div>
			<SearchAppBar />
			Sort
			<select name="" id="" onSelect={handleChange}>
				<option value="">--</option>
				<option value="name">name</option>
			</select>
			<div
				className="movie_container_div"
				style={{
					display: "flex",
					flexFlow: "wrap",
					gap: "2%",
					marginTop: "1%",
				}}
			>
				{data.map((e) => {
					return (
						<div key={e.id}>
							<Card sx={{ maxWidth: 250, marginTop: "2%" }}>
								<CardMedia
									component="img"
									alt={e.name}
									height="100"
									image={e.img}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="p"
										component="div"
									>
										{e.name}
									</Typography>
								</CardContent>
								<CardActions>
									<p size="small"> rating:{e.rating}</p>
									<p size="small">Date {e.release_Date}</p>
								</CardActions>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
}
