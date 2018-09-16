describe('Photo finder', function()
//The describe syntax is from the Jasmine framework. 
//Here "describe" typically defines components of an application, which can be a class or function etc.
 {
    it('display photos', function() {
    browser.get('https://www.istockphoto.com/');
    browser.sleep(3000);
    element(by.id("search-phrase")).clear();
    var ele = element(by.className("nav-root"));
    console.log(ele[0]);
    browser.sleep(20000);
    /*element(by.id("search-phrase")).sendKeys("Capgemini");
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(3000);
    var text = element(by.id("zero-result-title"));
    expect(text.getText()).toEqual('Sorry, your search returned zero results for "Capgemini"');*/
    
});

   });