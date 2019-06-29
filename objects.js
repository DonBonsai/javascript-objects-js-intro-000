

var playlist = {
  radioHead: 'Subterranean Homesick alien'
}



function updatePlaylist(obj, artist, songTitle) {

  Object.assign(obj, artist, songTitle);
  return playlist
}
