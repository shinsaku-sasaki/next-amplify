import CurrentTime from "@/components/CurrentTime";

export default function Home() {
  return (
    <div >
      <h1>SSG</h1>
      <p>現在時刻</p>
      <CurrentTime time={new Date().toLocaleTimeString()} />
      <p>データ取得された時刻</p>
      <CurrentTime time={new Date().toLocaleTimeString()} />
    </div>
  );
}
