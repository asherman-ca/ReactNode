// write a function to retrieve a blob of json - an ajax request!
// use fetch function (default js as of 2015)
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// new es2017 syntax

async function fetchAlbums() {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

fetchAlbums();
