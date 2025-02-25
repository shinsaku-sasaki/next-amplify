import CurrentTime from "@/components/CurrentTime";
import TimeDisplayISR from "@/components/TimeDisplayISR";

export default async function Home() {
  return (
    <div >
      <h1>ISR</h1>
      <p>現在時刻</p>
      <CurrentTime time={new Date().toLocaleTimeString("ja-JP")} />
      <p>データ取得された時刻</p>
      {/* Suspense 使えない */}
      <TimeDisplayISR />
    </div>
  );
}
