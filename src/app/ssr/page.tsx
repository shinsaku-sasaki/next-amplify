import CurrentTime from "@/components/CurrentTime";
import TimeDisplaySSR from "@/components/TimeDisplaySSR";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div >
      <h1>SSR</h1>
      <p>現在時刻</p>
      <CurrentTime />
      <p>データ取得された時刻</p>
      {/* Suspense を使ってローディング中の UI を指定 */}
      <Suspense fallback={<p>Loading time...</p>}>
        <TimeDisplaySSR />
      </Suspense>
    </div>
  );
}
