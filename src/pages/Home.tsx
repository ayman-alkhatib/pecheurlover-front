import "../../styles/LoginStyles.css";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const Home = () => {
  const [saumons, setSaumons] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const GlobalStyle = createGlobalStyle`
        body {
            background-color: #87CEEB;
            height: 100vh;
            overflow: hidden;
        }
    `;

  useEffect(() => {
    let saumonsIntervalId = setInterval(createSaumon, 2000);

    return () => {
      clearInterval(saumonsIntervalId);
    };
  }, []);

  function createSaumon() {
    const newSaumon = {
        // random id without duplicates
        id:  Math.floor(Math.random() * Date.now() * 100000),

        // start from the left of the screen
        x:0,
        // max y is the height of the screen minus the height of the saumon
        y: Math.random() * (window.innerHeight - 200),
    };
    // @ts-ignore
    setSaumons((prevSaumons) => [...prevSaumons, newSaumon]);
  }

  function handleClick(id: number) {
    setSaumons((prevSaumons) =>
      prevSaumons.filter((s: any) => s.id !== id)
    );
    setCounter((prevCounter) => prevCounter + 1);
  }
    function handleLosing() {
        setIsGameOver(true);
        setSaumons([]);
    }

  return (
    <>
      <GlobalStyle />
      <h1>Bienvenue chez Pêcheur Lover</h1>
    <h2 className="saumons-score">Vous avez attrapé {counter} saumons !</h2>
      <div className="app">
        {!isGameOver && (
        <div className="container">

        {saumons.map((saumon: any) => (
            <div
            key={saumon.id}
            className="saumon-wrapper"
            style={{ left: saumon.x, top: saumon.y }}
            onClick={() => handleClick(saumon.id)}
            onAnimationEnd={() => handleLosing()}
            >
            <div className="saumon-container">
              <svg
                height="200px"
                width="200px"
                viewBox="0 0 512 512"
                fill="#EE8B8B"
                >
                <path d="M196.749,306.744c-19.5,21.5-48,32-48,32l-32-40l16-8L196.749,306.744z"></path>
                <path d="M308.749,204.744c0,0-22.5-23.625-48-42c0,0-16,16-48,30l24,18L308.749,204.744z"></path>
                <path d="M500.749,242.744c-20,6-32,32-32,32h32c-18.667,15.334-85.333,48-160,48s-142.667,5.334-216-32 c-55.831-28.424-55,32-120,32c0,0,16-41,16-64s-16-64-16-64c65,0,63,58,120,32s197-32,224-32S474.749,229.744,500.749,242.744z"></path>
              </svg>
            </div>
            </div>
            ))}

            </div>)}

        {isGameOver && (
            <div className="game-over">
                <h1>Game Over</h1>
                <h2>Vous avez attrapé {counter} saumons !</h2>
                <button onClick={() => {
                    setCounter(0);
                    setIsGameOver(false);
                }}>Rejouer</button>
            </div>
                )}
          </div>
    </>
  );
};

export default Home;
