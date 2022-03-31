import React, {useState, useEffect} from 'react';

export default function Quiz() {
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          if(data.response_code !== 0) {
            throw new Error('Could not retrieve any questions at this time');
          } else {
            // console.log(data.results);
            setTriviaData(data.results);
          }
        });
    } catch(error) {
      window.alert(error);
    }
  }, []);

  return (
    <pre style={{padding:'28em 2em 2em 6em'}}>{JSON.stringify(triviaData, null, 2)}</pre>
  )
}