import { Container } from "@material-ui/core";
import Head from "next/head";
import { RoomCondition } from "../components/room_condition";
import { FetchAirConditionData } from "../containers/fetch_air_condition_data";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>{"My room's air condition Data"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。"
        />
        <meta
          name="og:description"
          content="僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。"
        />
        <meta name="og:title" content="My room's air condition data" />
        <meta name="og:site_name" content="My room's air condition data" />
        <meta name="og:type" content="website" />
        <meta
          name="og:image"
          content="https://my-room-condition.tan-shio.com/eye-catch-my-rooms-air-condition-data.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="shoutatani" />
        <meta name="twitter:title" content="My room's air condition data" />
        <meta
          name="twitter:description"
          content="僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <FetchAirConditionData
        render={({
          measuring_time,
          temperature,
          pressure,
          humidity,
          co2_concentration,
        }) => {
          return (
            <RoomCondition
              measuring_time={measuring_time}
              temperature={temperature}
              pressure={pressure}
              humidity={humidity}
              co2_concentration={co2_concentration}
            />
          );
        }}
      />
    </Container>
  );
}
