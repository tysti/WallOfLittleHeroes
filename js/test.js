$(function() {
	
	//storing certain page elements into variables for the Javascript
	var $homeButton = $('#home');
	var $aboutButton = $('#about');
	var $projectButton = $('#project');
	var $involveButton = $('#involve');
	
	var $homePage = $('#home_page');
	var $aboutPage = $('#about_page');
	var $projectPage = $('#project_page');
	var $involvePage = $('#involve_page');
	
	//default loading display - homepage is displayed
	$homePage.show();
	$aboutPage.hide();
	$projectPage.hide();
	$involvePage.hide();
	
	$homeButton.addClass('current');
	
	//when the home button is clicked, homepage is displayed and other pages are hidden
	//the current class will also be added to the home button and taken away from the others
	$homeButton.on('click', function() {
		$homePage.show();
		$aboutPage.hide();
		$projectPage.hide();
		$involvePage.hide();
		
		$homeButton.addClass('current');
		$aboutButton.removeClass('current');
		$projectButton.removeClass('current');
		$involveButton.removeClass('current');
	});
	
	//when the about us button is clicked, about us page is displayed and other pages are hidden
	//the current class will also be added to the about button and taken away from the others
	$aboutButton.on('click', function() {
		$homePage.hide();
		$aboutPage.show();
		$projectPage.hide();
		$involvePage.hide();
		
		$homeButton.removeClass('current');
		$aboutButton.addClass('current');
		$projectButton.removeClass('current');
		$involveButton.removeClass('current');
	});
	
	//when the our project button is clicked, our project page is displayed and other pages are hidden
	//the current class will also be added to the project button and taken away from the others
	$projectButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.show();
		$involvePage.hide();
		
		$homeButton.removeClass('current');
		$aboutButton.removeClass('current');
		$projectButton.addClass('current');
		$involveButton.removeClass('current');
	});
	
	//when the get involved button is clicked, get involved page is displayed and other pages are hidden
	//the current class will also be added to the get involved button and taken away from the others
	$involveButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.hide();
		$involvePage.show();
		
		$homeButton.removeClass('current');
		$aboutButton.removeClass('current');
		$projectButton.removeClass('current');
		$involveButton.addClass('current');
	});
});
