import Head from 'next/head';
import { RoomConditionData } from '../components/room_condition_data';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <RoomConditionData></RoomConditionData>
      </div>
    </div>
  )
}
