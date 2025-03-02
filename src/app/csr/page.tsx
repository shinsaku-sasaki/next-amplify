'use client';

import CurrentTime from "@/components/CurrentTime";
import ShowTime from "@/components/ShowTime";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  // useEffectでデータ取得
  useEffect(() => {
    fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo`, {
      cache: 'no-store'
    })
      .then(res => res.json())
      .then(data => setTime(`${data.time}:${data.seconds}`));
  }
    , []);

  return (
    <div >
      <h1>CSR</h1>
      <p>現在時刻</p>
      <CurrentTime />
      <p>データ取得された時刻</p>
      <ShowTime time={time} />
    </div>
  );
}
