export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2a82d292ccmsh5122a21b3abd311p14ba58jsn4174a5dfaaf2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2a82d292ccmsh5122a21b3abd311p14ba58jsn4174a5dfaaf2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};