import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';

import useStyles from './useStyles'

const ItemCard = ({ item, isGridViewOn }: any) => {
    const classes = useStyles();

    let renderedComponent
    if (isGridViewOn) {
        renderedComponent = (
            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {item.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    } else {
        renderedComponent = (
            <Card className={classes.listRoot}>
                <CardActionArea classes={{ root: classes.actionArea }}>
                    <CardMedia
                        className={classes.listMedia}
                        image={item.img}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {item.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
    return (
        <>
            {renderedComponent}
        </>
    );
}

export default ItemCard