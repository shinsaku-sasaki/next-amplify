import ShowTime from "./ShowTime";

async function getTimeData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo`, {
        next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
}

export default async function TimeDisplayISR() {
    const data = await getTimeData();

    return <ShowTime time={`${data.time}:${data.seconds}`} />;
}
