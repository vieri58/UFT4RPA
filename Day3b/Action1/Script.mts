Browser("Advantage Shopping").Page("Advantage Shopping").Link("headphonesTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("headphonesTxt")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf6.xml_;_
CurrentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml")) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf7.xml_;_
If CurrentScore >=  9.0 Then
Reporter.ReportEvent micPass, "checkScore", "Score greater than 9.0"
Else
Reporter.ReportEvent micFail, "checkScore", "Score too low. Found " & CurrentScore & ", desired 9.0"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set "2" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty")
