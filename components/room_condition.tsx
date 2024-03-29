import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { RoomConditionDataType } from "../interfaces/common";
import styles from "./room_condition.module.scss";

export const RoomCondition = (props: RoomConditionDataType) => {
  return (
    <Grid container spacing={3}>
      <Grid className={styles.title} item xs={12}>
        My room's air condition data
      </Grid>
      <Grid className={styles.item} item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Measured at
            </Typography>
            <Typography variant="h5" component="h2">
              {props.measuring_time}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              CO2
            </Typography>
            <Typography variant="h5" component="h2">
              {props.co2_concentration} [ppm]
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Atmospheric pressure
            </Typography>
            <Typography variant="h5" component="h2">
              {props.pressure} [hPa]
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Humidity
            </Typography>
            <Typography variant="h5" component="h2">
              {props.humidity} [%]
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Temperature
            </Typography>
            <Typography variant="h5" component="h2">
              {props.temperature} [℃]
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
