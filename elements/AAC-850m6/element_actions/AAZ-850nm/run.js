function(instance, properties, context) {
    
    var audioElement = instance.data.sound;
  	var volumeSet = properties.volume / 100;
  	audioElement.volume = volumeSet;
  	
 	console.log("Howler volume set")
}