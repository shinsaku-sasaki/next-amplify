
type Props = {
    time: string;
}

const CurrentTime = ({ time }: Props) => {
    return (
        <div>
            <h1>Current Time: {time}</h1>
        </div>
    );
};

export default CurrentTime;
