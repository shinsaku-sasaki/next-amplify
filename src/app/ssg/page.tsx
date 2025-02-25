import CurrentTime from "@/components/CurrentTime";
import ShowTime from "@/components/ShowTime";

export default async function Home() {
  const res = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo`, { cache: 'force-cache' });
  const data = await res.json();

  return (
    <div >
      <h1>SSG</h1>
      <p>現在時刻</p>
      <CurrentTime />
      <p>データ取得された時刻</p>
      <ShowTime time={`${data.time}:${data.seconds}`} />
    </div>
  );
}
