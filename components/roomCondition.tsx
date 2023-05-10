"use client";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import styles from "./roomCondition.module.scss";
import { Abel } from "next/font/google";
import { RoomConditionDataType } from "../app/viewModels/useAirConditionData";

const abel = Abel({ weight: "400", subsets: ["latin"], display: "swap" });

export const RoomCondition = (props: RoomConditionDataType) => {
  const { measuring_time, co2_concentration, pressure, humidity, temperature } =
    props;

  return (
    <Container className={abel.className}>
      <Grid container spacing={3}>
        <Grid className={styles.title} item xs={12}>
          {"My room's air condition data"}
        </Grid>
        <Grid className={styles.item} item xs={12} sm={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Measured at
              </Typography>
              <Typography variant="h5" component="h2">
                {measuring_time}
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
                {co2_concentration} [ppm]
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
                {pressure} [hPa]
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
                {humidity} [%]
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
                {temperature} [℃]
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
