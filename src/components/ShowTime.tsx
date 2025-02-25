type Props = {
    time: string;
}

const ShowTime = ({ time }: Props) => {
    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
};

export default ShowTime;
