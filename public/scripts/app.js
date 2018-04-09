console.log('Sanity check!');

let $locationRow; 

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
	$('.mainList').on('click', '.read-more-btn', function(event) {
		let currentId = event.target.dataset.eventid

		// console.log(event.target)
		// debugger

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
	// Create new Location
	$('.form-horizontal').on('submit', function(e) {
		// e.preventDefault();
		var formData = $(this).serialize();
			$.ajax({
				method: 'POST',
				url: '/api/experience',
				data: formData,
				success: function handleJsonSuccess(newLocation) {
					$('.mainList').prepend(newLocation);
				},
				error: function(error) {
					console.log(error);
				}
			})
	})

	// Delete a location
	$('.mainList').on('click', '.delete-btn', function(event){
			let currentId = event.target.dataset.eventid
			// debugger;
			console.log(currentId);
			console.log('not working');
			$.ajax({
				type: 'DELETE',
				url: '/api/experience/' + currentId,
				success: function(result) {
					console.log(	$('[data-eventid=' + currentId + ']'))
					$('[data-eventid=' + currentId + ']').remove();
				}
			})
	})


	$('.mainList').on('click', '.edit-btn', handleEditClick);
	$('.mainList').on('click', '.save-btn', handleSaveClick);

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
    <img align="right" src=${ detail.photo }>
      <div class="experienceContent">
        <div class="col-md-8 blog-main">
          <h2 class="blog-post-title">${ detail.name }</h2>
          <p class="blog-post-meta" style="color:#0000b3">${ detail.type }</p>
          <hr>
          <p>San Francisco</p>
          <p>${ detail.duration }</p>
          <p>Hiking, biking, photograph</p>
          <hr>
          <h2>What to explore</h2>
          <p>${ detail.briefDesc }</p>
          <hr>
          <h2>Where is it?</h2>
     		<iframe width="600" height="450" frameborder="0" style="border:0" src=${ detail.locationUrl } allowfullscreen></iframe>
          
        </div>

       


  
    </div>


	`
	$('.mainList').empty();
	$('.theForm').empty();
	$('.mainList').prepend(detailHtml);
}

function handleEditClick(event) {
	let currentId = event.target.dataset.eventid;
	let $id = $(this).closest('.cards')
	console.log('this is$id', $id);
	console.log(currentId);



	$id.find('.edit-btn').toggleClass('hidden');
	$id.find('.save-btn').toggleClass('hidden');

	// debugger;
	// $id.find('.save-btn').toggleClass('hidden');
	
	let locationName = $id.find('.locationName').text();
	$id.find('.locationName').html('<input class="edit-location-name" value="' + locationName + '"></input>');

	let locationAdds = $id.find('.locationAdds').text();
	$id.find('.locationAdds').html('<input class="edit-location-adds" value="' + locationAdds + '"></input>');

	let locationDesc = $id.find('.locationDesc').text();
	$id.find('.locationDesc').html('<input class="edit-location-Desc" value="' + locationDesc + '"></input>');


	// $('.panel-footer').find('.edit-btn').toggleClass('hidden');
}

function handleSaveClick() {
	let currentId = event.target.dataset.eventid;
	let $locationRow = $('[data-eventid=' + currentId + ']');
	// $id.find('.save-btn').toggleClass('hidden');
	

	let data = {
		name: $locationRow.find('.edit-location-name').val(),
		address: $locationRow.find('.edit-location-adds').val(),
		description: $locationRow.find('.edit-location-Desc').val()
	};

	console.log('this is data', data)
	$.ajax({
		method: 'PUT',
		url: '/api/experience/' + currentId,
		data: data,
		success: function(data) {
			let nameReplace = $locationRow.find('.locationName').replaceWith(`<h4 class="card-title locationName">${ data.name }</h4>`);
			let addsReplace = $locationRow.find('.locationAdds').replaceWith(`<p class="card-title locationAdds">${ data.address }</p>`);
			let descReplace = $locationRow.find('.locationDesc').replaceWith(`<p class="card-title locationDesc">${ data.description }</p>`);
			// $('.mainList').append('d');
			// render(data);
			// $(this).find(':first-child').remove();

			// let nameReplace = $locationRow.find('.locationName').replaceWith(`<h4 class="card-title locationName">${ data.name }</h4>`);


		}
	})
}



// function handleLocationUpdateResponse(data) {
// 	let locationId = data._id;
// 	var idd = event.target.response
// 	console.log('idd', idd);
// 	console.log('resonse', data);

// 	// let $locationRow = $('[data-eventid=' + currentId + ']');
// 	console.log('$locationRow', $locationRow);

// 	// debugger;

// // 	// $('div[data-event-id=locatinId]').find('.edit-location-name').remove().html(data.name);


// // 	// use locatinId to find correct card
// // 	// within htat card, find the name input – remove it, and put just text
// // 	// within that card, find the address input – remove the input, and put in the correct text
// // 	// within that card, find the descripiton input – remove the input, and put in the correct text



// // 	// $('[data-eventid=' + locationId + ']').find('.edit-location-name').remove().html('<input class="edit-location-name"> ' ${ data.name } '</input>')



// 	$('[data-eventid=' + locationId + ']').remove();
// 	render(data);
// // 	// debugger;
// }




function render(experience) {
	let expHtml = `
	<div class="container py-3 locat"  data-eventid="${ experience._id }">
		<input type="checkbox">
		<div class="cards">
		  <div class="row">
		    <div class="col-4">
		        <img class="w-74 iconPhoto" src=${ experience.photo } >
		      </div>
		      <div class="col-lg-4 px-3">
		        <div class="card-block px-3">
		          <h4 class="card-title locationName">${ experience.name }</h4>
		          <p class="card-text locationAdds">${ experience.address }</p>
		          <p class="card-text1 locationDesc">${ experience.description }</p>

		          <div class='panel-footer'>
			          <button class="btn btn-primary read-more-btn" data-eventid="${ experience._id }">Read More</button>
					  <button class="btn btn-info edit-btn" data-eventid="${ experience._id }">Edit</button>
					  <button class="btn btn-info save-btn hidden" data-eventid="${ experience._id }">Save</button>
					  <button class="btn btn-danger delete-btn" data-eventid="${ experience._id }">Delete</button>
				  </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <hr>
	</div>
	
	`
	$('.mainList').prepend(expHtml);

}



