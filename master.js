$(document).ready(function() {

var buttonid = $('#button');
$(buttonid).on('click', call_youtube);

var count = 120;
var counter = null;
var timerid = $('#timer');

function call_youtube(){
	var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=cute+funny&type=video&videoDuration=short&key=AIzaSyAzbxEzpDORl5gUwugGG8z8IGcxRULSEMQ";
	var videos = [];
	var videoid = $('#video');
	$.getJSON(url, function(data) {
		for(i = 0, dataLength = data.items.length; i < dataLength; i++) {
			videos.push(data.items[i].id.videoId);
			//$('#temp').append("video id: " + data.items[i].id.videoId + "<br/>");
		}
		var randomnumber = Math.floor(Math.random() * videos.length);
		var vHtml = "";
		vhtml = "<iframe id=\"ytplayer\" type=\"text/html\" src=\"http://www.youtube.com/embed/{0}?autoplay=1\" frameborder=\"0\"/>";
		$(videoid).append(vhtml.replace("{0}",videos[randomnumber]));
		$(videoid).fadeIn(100);
		$(buttonid).hide();
		$(timerid).show();
		counter = setInterval(timer, 1000); //1000 will run it every 1 second
	});
	$(buttonid).unbind('click', call_youtube);
}
	
	function timer() {
		var cheerid = $('#cheer');
		count = count - 1;
		if (count < 0) {
    		clearInterval(counter);
     		$(timerid).fadeOut(100, function(){
     			$(cheerid).fadeIn(100);
     		});
     		return;
 		}
		$(timerid).html(count.toString());
	}

});