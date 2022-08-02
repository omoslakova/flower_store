import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Grid, Typography } from '@mui/material';

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs="12" md="4"> 
            <Card>
                <CardMedia
                    img={poster}
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                <Typography
                variant="h6"
                component="h3">
                    {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                    </CardContent> 
                    <CardActions>
                   <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </button>
                
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;