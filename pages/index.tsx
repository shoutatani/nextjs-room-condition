import { Container } from "@material-ui/core";
import Head from "next/head";
import { RoomConditionData } from "../components/room_condition_data";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>shoutatani's Room Condition Data</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
      </Head>
      <RoomConditionData />
    </Container>
  );
}
