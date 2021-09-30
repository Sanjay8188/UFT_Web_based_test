'Browser("Google").Page("Google_2").WebEdit("Search").Set "amazon" @@ hightlight id_;_Browser("Google").Page("Google 2").WebEdit("Search")_;_script infofile_;_ZIP::ssf1.xml_;_
'Browser("Google").Page("Google_2").WebButton("Google Search").Click @@ hightlight id_;_Browser("Google").Page("Google 2").WebButton("Google Search")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("Google").Page("amazon - Google Search").Link("Shop Online on Amazon").Click @@ hightlight id_;_Browser("Google").Page("amazon - Google Search").Link("Shop Online on Amazon")_;_script infofile_;_ZIP::ssf3.xml_;_
'Browser("Google").Page("Page").Link("var n={navigateTo:function(b,a").Click @@ hightlight id_;_Browser("Google").Page("Page").Link("var n{navigateTo:function(b,a")_;_script infofile_;_ZIP::ssf4.xml_;_

'Browser("Google").Page("Amazon.in - Your Browsing").WebEdit("Search").Set "laptop" @@ hightlight id_;_Browser("Google").Page("Amazon.in - Your Browsing").WebEdit("Search")_;_script infofile_;_ZIP::ssf5.xml_;_
'Browser("Google").Page("Amazon.in - Your Browsing").WebButton("Go").Click @@ hightlight id_;_Browser("Google").Page("Amazon.in - Your Browsing").WebButton("Go")_;_script infofile_;_ZIP::ssf6.xml_;_

'Browser("Google").Page("Google_2").WebEdit("Search").Set "microfocus marketplace"
'Browser("Google").Page("Google_2").WebButton("Google Search").Click
'Browser("Google").Page("microfocus marketplace - Google Search").Link("MicroFocus Marketplace").Click

Browser("Google").Page("Google_2").WebEdit("Search").Set "microfocus marketplace" @@ hightlight id_;_Browser("Google").Page("Google 2").WebEdit("Search")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Google").Page("Google_2").WebButton("Google Search").Click @@ hightlight id_;_Browser("Google").Page("Google 2").WebButton("Google Search")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Google").Page("amazon - Google Search").Link("Micro Focus Marketplacehttps:/").Click @@ hightlight id_;_Browser("Google").Page("amazon - Google Search").Link("Micro Focus Marketplacehttps:/")_;_script infofile_;_ZIP::ssf9.xml_;_

input=inputbox("enter the values need to search")
AIUtil.SetContext Browser("creationtime:=0")
'AIUtil.FindTextBlock("Search for apps & add-ons by name or by Micro Focus product").Search "UFT"
        AIUtil.FindTextBlock("Search for apps & add-ons by name or by Micro Focus product").Type input
       AIUtil("search").Click
'AIUtil("search").Search "Callin"
' input=inputbox("enter the values need to search")

Sub Callin
	Dim input
        input=Inputbox("enter the values need to search")
End Sub

