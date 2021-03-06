import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DataModal from "./DataModal";
import { airports } from "./Airports";

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    height: 250,
  },
}));

const GridComponent = () => {
  const classes = useStyles();

  const [modalContent, setModalContent] = useState({ show: false, itemId: "" });

  return (
    <div>
      <Grid container spacing={5}>
        {airports.map((airport) => {
          return (
            <Grid item xs key={airport.icao}>
              <Card
                className={classes.root}
                onClick={() =>
                  setModalContent({ show: true, itemId: airport.icao })
                }
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={airport.name}
                    height="150"
                    image={airport.image}
                    title={airport.name}
                  />
                  <CardContent>
                    <Typography gutterBottom component="p">
                      {airport.name}
                    </Typography>

                    <Typography gutterBottom component="p">
                      {airport.country}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
        <DataModal
          showModal={modalContent.show}
          handleClose={() => setModalContent({ ...modalContent, show: false })}
          itemId={modalContent.itemId}
        ></DataModal>
      </Grid>
    </div>
  );
};

export default GridComponent;
