

var playlist = {
  radioHead: 'Subterranean Homesick alien'
}



function updatePlaylist(obj, artist, songTitle) {

  Object.assign(obj, {[artist] : songTitle});
  return playlist
}

function removeFromPlaylist(obj, artist){
  var artist = `${artist}`;
  delete obj.artist;
  return obj
}
