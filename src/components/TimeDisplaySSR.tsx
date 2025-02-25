import ShowTime from "./ShowTime";

async function getTimeData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data;
}

export default async function TimeDisplaySSR() {
    const data = await getTimeData();

    return <ShowTime time={`${data.time}:${data.seconds}`} />;
}
