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
	
	//when the home button is clicked, homepage is displayed and other pages are hidden
	$homeButton.on('click', function() {
		$homePage.show();
		$aboutPage.hide();
		$projectPage.hide();
		$involvePage.hide();
	});
	
	//when the about us button is clicked, about us page is displayed and other pages are hidden
	$aboutButton.on('click', function() {
		$homePage.hide();
		$aboutPage.show();
		$projectPage.hide();
		$involvePage.hide();
	});
	
	//when the our project button is clicked, our project page is displayed and other pages are hidden
	$projectButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.show();
		$involvePage.hide();
	});
	
	//when the get involved button is clicked, get involved page is displayed and other pages are hidden
	$involveButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.hide();
		$involvePage.show();
	});
	
});