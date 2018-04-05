console.log('Sanity check!');



$(document).ready(function() {
	console.log('app.js loaded')

	// Render home page
	$.ajax({
		method: 'GET',
		url: '/api/experience',
		success: handleSuccess,
		error: handleError,
		complete: handleComplete
	})

	// Render details
	$('.mainList').on('click', function(event) {
		let currentId = event.target.dataset.eventid

		// let id = $('.mainList').find('.btn').attr('data-eventid');
		$.ajax({
			method: 'GET',
			url: '/api/experience',
			success: function handleDetailSuccess(detailPages) {
				console.log(detailPages);
				detailPages.forEach(function(detailPage) {
					if (detailPage._id === currentId) {
						renderDetails(detailPage);
					}
					// console.log(detailPage)
				})
			},
			error: handleErrorError
		})
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



function handleErrorError(err) {
	console.log('Throwing error: ', err);
}

// When item was clicked, move top
function handleComplete() {

    $(function(){
	  let checkedbox;
	  $('input[type="checkbox"]').on('change', function(){

	    if($(this).prop('checked', 'checked')){
	      checkedbox = $(this).parent().clone();
	    }
	    $(this).parent().remove();
	    $('.mainList').prepend(checkedbox)
	    
	  })
	})
}

function renderDetails(detail) {
	let detailHtml = `
	 <!-- Page Main -->
    <div class="experienceBody">
      <div class="experienceContent">
        <div class="col-md-8 blog-main">
          <h2 class="blog-post-title">${ detail.name }</h2>
          <p class="blog-post-meta">${ detail.type }</p>
          <hr>
          <p>San Francisco</p>
          <p>${ detail.duration }</p>
          <p>Hiking, biking, photograph</p>
          <hr>
          <h2>What to explore</h2>
          <p>${ detail.briefDesc }</p>
          <hr>
          <h2>Where is it?</h2>
          <p>Add map API later</p>
          <hr>
          <h2>Reviews</h2>
     	  <form class="form-inline">
		      <div class="form-group">
		          <input type="text" name="displayname" class="form-control" id="name" placeholder="Name" autofocus>
		      </div>
		  	  <div class="form-group">
		    	  <input type="text" name="review" class="form-control" id="comment" placeholder="review">
		      </div>
		   	  <input type="submit" id="commentSubmit" value="POST">
		  </form>
        </div>

        <!-- Page sidebar -->
        <div class="experienceSidebar">
          <div class="col-md-4 blog-sidebar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxjr60WCGWKBMSg9evTTXBnD8sUc1poTrZ2CxwQUgd71_KUrZyw" width="300" height="260">
          </div>
        </div>

     	<div class="map"></div>



      </div>
    </div>
		
	`
	$('.mainList').empty();
	$('.mainList').prepend(detailHtml);
}




function render(experience) {
	let expHtml = `
	<div class="container py-3">
		<input type="checkbox">
		<div class="card">
		  <div class="row">
		    <div class="col-4">
		        <img class="w-74" src=${ experience.photo }>
		      </div>
		      <div class="col-lg-4 px-3">
		        <div class="card-block px-3">
		          <h4 class="card-title">${ experience.name }</h4>
		          <p class="card-text">${ experience.address }</p>
		          <p class="card-text1">${ experience.description }</p>
		          <a  class="btn btn-primary" data-eventid="${ experience._id }">Read More</a>
		        </div>
		      </div>
		    </div>
		  </div>
	</div>
	`
	$('.mainList').prepend(expHtml);

}


