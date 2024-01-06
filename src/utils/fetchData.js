export const exerciseOptions = {
    method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'a1fffbe425msh980d5d070565c2ap181a92jsne4a17d43599d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9d54bbc36cmsh8364d36008bf69ap13d769jsne7ed3f8a1ff4',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };





export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
} 