import {useState} from 'react';

function TestingState()
{
    const [data, setData] = useState("Tom");
    function updateData()
    {
        setData("Ronak");
    }
    return (
        <section className="mt-5 text-center">
            <h1>{data}</h1>
            <button onClick={updateData} className="btn btn-success btn-md">Click Here For Change</button>
        </section>
    );
}

export default TestingState;