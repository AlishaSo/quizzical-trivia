import React, {useState, useEffect} from 'react';

export default function Quiz() {
  let apiData;

  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          if(data.response_code !== 0) {
            throw new Error('Could not retrieve any questions at this time');
          } else {
            // console.log(data.results);
            apiData = data.results;
          }
        });
    } catch(error) {
      window.alert(error);
    }
  }, []);

  return (
    <p>quiz questions go here</p>
  )
}