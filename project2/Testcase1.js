describe('Open Angular js website',function() {  


it('Sign-in & Sign-out',function() {
	
	browser.driver.manage().window().maximize();
	browser.get("http://posse.com/");
	element(by.css("a[href='/signin']")).click();
	browser.sleep(3000);
	element(by.model('email')).sendKeys("test11@gmail.com");
	element(by.model('password')).sendKeys("Tester");
	element(by.buttonText('Sign in')).click();
	browser.sleep(3000);
	element(by.css("a[class='dropdown-toggle userLoggedIn']")).click();
	browser.sleep(3000);
	element(by.css("a[href='/logout']")).click();
	browser.sleep(3000);
	
})
})

	