export default async function getQuizData() {
  try {
     const response = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
      const data = await response.json();
      
      if(data.response_code !== 0) {
        throw new Error('Could not retrieve any questions at this time');
      } else {
        // console.log(data.results);
        return data.results;
      }
  }
  catch(error) {
    window.alert(error);
  }
}