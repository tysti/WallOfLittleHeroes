$(function() {
	
	//storing certain page elements into variables for the Javascript
	var $homeButton = $('#home');
	var $aboutButton = $('#about');
	var $projectButton = $('#project');
	var $contactButton = $('#contact');
	var $donateButton = $('#donate');
	
	var $homePage = $('#home_page');
	var $aboutPage = $('#about_page');
	var $projectPage = $('#project_page');
	var $contactPage = $('#contact_page');
	var $donatePage = $('#donate_page');
	
	//default loading display - homepage is displayed
	$homePage.show();
	$aboutPage.hide();
	$projectPage.hide();
	$contactPage.hide();
	$donatePage.hide();
	
	//when the home button is clicked, homepage is displayed and other pages are hidden
	$homeButton.on('click', function() {
		$homePage.show();
		$aboutPage.hide();
		$projectPage.hide();
		$contactPage.hide();
		$donatePage.hide();
	});
	
	//when the about us button is clicked, about us page is displayed and other pages are hidden
	$aboutButton.on('click', function() {
		$homePage.hide();
		$aboutPage.show();
		$projectPage.hide();
		$contactPage.hide();
		$donatePage.hide();
	});
	
	//when the our project button is clicked, our project page is displayed and other pages are hidden
	$projectButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.show();
		$contactPage.hide();
		$donatePage.hide();
	});
	
	//when the contact us button is clicked, contact us page is displayed and other pages are hidden
	$contactButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.hide();
		$contactPage.show();
		$donatePage.hide();
	});
	
	//when the donate button is clicked, donate button is displayed and other pages are hidden
	$donateButton.on('click', function() {
		$homePage.hide();
		$aboutPage.hide();
		$projectPage.hide();
		$contactPage.hide();
		$donatePage.show();
	});
});