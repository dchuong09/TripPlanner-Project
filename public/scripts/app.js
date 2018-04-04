console.log('Sanity check!');






$(document).ready(function() {
	console.log('app.js loaded')


	$.ajax({
		method: 'GET',
		url: '/api/experience',
		success: handleSuccess,
		error: handleError,
		complete: handleComplete
	})
});

function handleSuccess(exps) {
	exps.forEach(function(exp) {
		render(exp);
	})
};

function handleError(err) {
	console.log('Throwing error: ', err);
};

// When item was clicked, move top
function handleComplete() {

    $(function(){
	  var checkedbox;
	  $('input[type="checkbox"]').on('change', function(){

	    if($(this).prop('checked', 'checked')){
	      checkedbox = $(this).parent().clone();
	    }
	    $(this).parent().remove();
	    $('.mainList').prepend(checkedbox);
	  })
	})
}


function render(experience) {
	let expHtml = `
	<div class="container py-3">
		<input type="checkbox">
		<div class="card">
		  <div class="row ">
		    <div class="col-4">
		        <img class="w-74" src=${ experience.photo }>
		      </div>
		      <div class="col-lg-4 px-3">
		        <div class="card-block px-3">
		          <h4 class="card-title">${ experience.name }</h4>
		          <p class="card-text">${ experience.address }</p>
		          <p class="card-text1">${ experience.description }</p>
		          <a href="details.html" class="btn btn-primary">Read More</a>
		        </div>
		      </div>
		    </div>
		  </div>
	</div>
	`
	console.log(experience.photo)
	$('.mainList').prepend(expHtml);


}