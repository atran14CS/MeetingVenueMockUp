import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import hotelImage from '../Pictures/wss-main.avif';
import '../App.css';

const Card2 = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 700 }}>
            <CardMedia
                sx={{ height: 200 }}
                image= {hotelImage}
                title="Venue X"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Venue X
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Card2
