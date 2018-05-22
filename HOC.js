var container = document.getElementById('container')

header = document.createElement("div")
header.className = "header"
container.appendChild(header)

h1header = document.createElement("h1")
header.appendChild(h1header)
h1header.innerHTML = "HighOnCoding"

menu = document.createElement("ul")
header.appendChild(menu)

homeLink = document.createElement("li")
menu.appendChild(homeLink)

homeLinkURL = document.createElement("a")
homeLink.appendChild(homeLinkURL)
homeLinkURL.href = "index.html"
homeLinkURL.innerHTML = "Home"
homeLinkURL.id = "home"

categoriesLink = document.createElement("li")
menu.appendChild(categoriesLink)

categoriesLinkURL = document.createElement("a")
categoriesLink.appendChild(categoriesLinkURL)
categoriesLinkURL.href = "categories.html"
categoriesLinkURL.innerHTML = "Categories"

curse = document.createElement("div")
curse.className = "curse"
container.appendChild(curse)

curseTitle = document.createElement("h2")
curse.appendChild(curseTitle)
curseTitle.innerHTML = "Curse of the Current Reviews"

curseText = document.createElement("p")
curse.appendChild(curseText)
curseText.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."

articles = document.createElement("div")
articles.className = "articles"
container.appendChild(articles)

article_title1 = document.createElement("h4")
articles.appendChild(article_title1)
article_title1.innerHTML = "Hello WatchKit"

article_content1 = document.createElement("p")
articles.appendChild(article_content1)
article_content1.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

article_comments1 = document.createElement("p")
article_comments1.className = "comments"
articles.appendChild(article_comments1)

span1 = document.createElement("span")
article_comments1.appendChild(span1)
span1.innerHTML = "12 comments"

span2 = document.createElement("span")
article_comments1.appendChild(span2)
span2.innerHTML = "124 likes"

article_title2 = document.createElement("h4")
articles.appendChild(article_title2)
article_title2.innerHTML = "Introduction to Swift"

article_content2 = document.createElement("p")
articles.appendChild(article_content2)
article_content2.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."

article_comments2 = document.createElement("p")
article_comments2.className = "comments"
articles.appendChild(article_comments2)

span3 = document.createElement("span")
article_comments2.appendChild(span3)
span3.innerHTML = "15 comments"

span4 = document.createElement("span")
article_comments2.appendChild(span4)
span4.innerHTML = "45 likes"
