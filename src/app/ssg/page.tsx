import CurrentTime from "@/components/CurrentTime";

export default async function Home() {
  const res = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo`, { cache: 'force-cache' });
  const data = await res.json();

  return (
    <div >
      <h1>SSG</h1>
      <p>現在時刻</p>
      <CurrentTime time={new Date().toLocaleTimeString()} />
      <p>データ取得された時刻</p>
      <CurrentTime time={`${data.time}:${data.seconds}`} />
    </div>
  );
}
