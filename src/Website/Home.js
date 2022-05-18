import React,{useState} from 'react';

function Home() {
 const [count, setCount] = useState(0);
 const description='Please provide some details of your grievance to proceed. Your information will remain secure with us.';
  return (
    <div >
     <div class="Banner-Background">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <h1>This platform aims to register your grievance and assist you in its redressal</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Home;
