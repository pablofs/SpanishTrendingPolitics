// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

	// Add User button click
    $('#btnGetDocByDate').on('click', getDocByDate);
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/documentlist', function( data ) {
		// Stick our user data array into a userlist variable in the global object
		documentlistData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="' + this.url + '" class="linkshowuser">Link to the doc</a></td>';
            tableContent += '<td>' + this.date + '</td>';
            tableContent += '<td>' + this.description + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#documentlist table tbody').html(tableContent);
    });
};

// 
function getDocByDate(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#inputDate input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'date': $('#getDocByDate fieldset input#inputDate').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/documentbydate',
            dataType: 'JSON'
        }).done(function( response ) {

			/*
            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#getDocByDate fieldset input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
			*/
			
			// alert('responses: ' + response.length);
			
			// Empty content string
			var tableContent = '';
			
			// For each item in our JSON, add a table row and cells to the content string
			$.each(response, function(index, value){
				// alert( index + ": " + value.url );
				tableContent += '<tr>';
				tableContent += '<td><a href="' + value.url + '" class="linkshowuser">Link to the doc</a></td>';
				tableContent += '<td>' + value.date + '</td>';
				tableContent += '<td>' + value.description + '</td>';
				tableContent += '</tr>';
			});

			// Inject the whole content string into our existing HTML table
			$('#documentbydate table tbody').html(tableContent);			
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};