// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

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
