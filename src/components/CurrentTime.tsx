"use client";


const CurrentTime = () => {
    return (
        <div>
            <h1>{new Date().toLocaleTimeString("ja-JP")}</h1>
        </div>
    );
};

export default CurrentTime;
