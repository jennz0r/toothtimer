$(document).ready(function() {

$('#button').click(

	function call_youtube(){
	
	var count = 120;
	var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
	var thing = document.getElementById('timer');
	function timer() {
		count = count - 1;
		if (count < 0) {
    		clearInterval(counter);
     		$('#timer').fadeOut(100, function(){
     			$('#cheer').fadeIn(100);
     		});
     	return;
 		}
		$('#timer').html(count.toString());
	}

	var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=cute+funny&type=video&videoDuration=short&key=AIzaSyAzbxEzpDORl5gUwugGG8z8IGcxRULSEMQ";
	var videos = new Array();

	$.getJSON(url, function(data) {
		for(i = 0; i < data.items.length; i++) {
			videos.push(data.items[i].id.videoId);
			//$('#temp').append("video id: " + data.items[i].id.videoId + "<br/>");
		}
		var randomnumber = Math.floor(Math.random()*videos.length);
		var vHtml = "";
		vhtml = "<iframe id=\"ytplayer\" type=\"text/html\" width=\"420\" height=\"315\" src=\"http://www.youtube.com/embed/{0}?autoplay=1\" frameborder=\"0\"/>";
		$('#video').append(vhtml.replace("{0}",videos[randomnumber]));
		$('#video').fadeIn(100);
		$('#button').hide();
		$('#timer').show();
		timer();
	});

});

});