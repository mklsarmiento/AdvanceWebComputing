$(document).ready(function(){
	$('#send').click(function(){

		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the Movie Title");
		}
			$(function(){
			$('#search4').html("");
			$('#search4').append('<p class="text-info"><font color="white">Searching for: ' +moviesearch+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'cztm65d4hwpxcqfbujnm2ryh'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
				//console.log(response);
				$('.lamesa').html("");
				$('#search4').html("");
				var lengthofmov = response.movies.length;
					$('#entry').html("");
					$('#entry').append('<p class="text-info"><font color="white">Number of Entry: '+lengthofmov+'</p>');
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h2 style="text-align: center;"><font color="white">No Available Synopsis</h2>';
						$('.lamesa').append('<div class="movie_holder">'+'<p class="movie_title"><font color="white"><font color="white"> ' +movie.title+ '</p>'+'<img src="' +movie.posters.thumbnail+'"/>'+'<div class="title">'+ '<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{					
					$('.lamesa').append('<div class="movie_holder">'+'<div class="title">'+'<p class="movie_title"><font color="white">' +movie.title+'</p>'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'<div class="synopsis">'+'<p class="synop">"'+synop+'"</p>'+'</div>'+'</div>'+ '</div>'+'<div class="clear">'+'</div>');
					}
				}
					
			}
				
			});
				$( '#formmovie' ).each(function(){
					this.reset();
				});
			
		});
		

});

