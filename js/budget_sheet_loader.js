$('#get-budget_sheet').on('click', function(e) {
	
	//prevents loading when clicking the link
	e.preventDefault();
	
	//gets the url of the data
	var url = this.href;
	
	//clears the cart and loads with the new data
	$('#budget_sheet').empty().load(url).hide().fadeIn('slow');
});