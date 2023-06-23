import {  useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState(["Enjoy the jokes"]);

  useEffect(() => {
    getNewJoke();
  }, []);

  const getNewJoke = async () => {

    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cc0e7fcc36msh6fffa9d21a0947ep1d5207jsn1cea9747a1d4',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      const jokeArray = result.body[0]
      console.log(jokeArray);
      const {setup, punchline} = jokeArray
      setJokes([setup, punchline])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex items-center py-10">
      <div className="max-w-screen-md	mx-auto mt-8 bg-blue-400 py-5 flex flex-col justify-center items-center drop-shadow-2xl shadow-blue-200 rounded-md px-5">
        <h1 className=" text-purple-950 text-5xl font-mono font-extrabold">
          Random Jokes 😆
        </h1>
        <div className="border-solid border-2 border-indigo-600 rounded-lg mt-5">
          <p className=" text-white text-xl font-serif px-7 mt-4">
            {jokes[0]} <br/> {jokes[1]}
          </p>
        </div>
        <button className=" bg-cyan-400 rounded-lg text-center font-sans text-2xl font-semibold mt-7 py-3 px-3 drop-shadow-md hover:scale-110" onClick={getNewJoke}>
          Get New Joke
        </button>
      </div>
    </main>
  );
}

export default App;
