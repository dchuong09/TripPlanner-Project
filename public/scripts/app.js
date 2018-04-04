console.log('Sanity check!');


$(document).ready(function() {
	console.log('app.js loaded')

	$.ajax({
		method: 'GET',
		url: '/api/experience',
		success: handleSuccess,
		error: handleError
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

function render(experience) {
	let expHtml = `
	<div class="container py-3">
		<div class="card">
		  <div class="row ">
		    <div class="col-md-4">
		        <img src=${experience.photo} class="w-100">
		      </div>
		      <div class="col-md-8 px-3">
		        <div class="card-block px-3">
		          <h4 class="card-title">${ experience.name }</h4>
		          <p class="card-text">${ experience.address }</p>
		          <p class="card-text">${ experience.description }</p>
		          <a href="#" class="btn btn-primary">Read More</a>
		        </div>
		      </div>
		    </div>
		  </div>
	</div>
	`
	$('.mainList').prepend(expHtml);
}