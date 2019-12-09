
function Signin(a,b)
{
	
	element(by.model("email")).sendKeys(a);
    element(by.model("password")).sendKeys(b);
    element(by.buttonText('/button'));
	
	
	}