import CurrentTime from "@/components/CurrentTime";
import TimeDisplayISR from "@/components/TimeDisplayISR";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div >
      <h1>ISR</h1>
      <p>現在時刻</p>
      <CurrentTime time={new Date().toLocaleTimeString("ja-JP")} />
      <p>データ取得された時刻</p>
      {/* Suspense を使ってローディング中の UI を指定 */}
      <Suspense fallback={<p>Loading time...</p>}>
        <TimeDisplayISR />
      </Suspense>
    </div>
  );
}
