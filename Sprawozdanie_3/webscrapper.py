import requests
from bs4 import BeautifulSoup
import random
from tabulate import tabulate
hop = 0
table = []


def scrapeWiki(url):
    global destinationSlice,destination
    def finishWiki(result):
        if result==1:
            print("Gratulacje! Scraperowi udało się odnaleźć link o który prosiles!")
        else:
            print("Niestety scraperowi nie udało sie znalezc strony po 50 probach")
        print(tabulate(table,headers=["Ilosc hopek","Nazwa artykulu","Link"]))
    def saveToTable(name,link):
        global table,hop
        table.append([hop,name,link])
        hop+=1
    def responseGet(url):
        try:
            response = requests.get(url)
        except requests.exceptions.ConnectionError:
            print("Connection refused")
        soup = BeautifulSoup(response.content,"html.parser")
        return soup
           
    soup = responseGet(url)

    articleName = soup.find(id="firstHeading").text
    print(articleName,url)
    saveToTable(articleName,url)

    if(hop==51):
        finishWiki(0)
        return

    destinationLink = soup.find(id = "bodyContent").find(href = destinationSlice)

    if(destinationLink):
        soup = responseGet(destination) 
        articleName = soup.find(id="firstHeading").text
        saveToTable(articleName,destination)
        finishWiki(1)
        return
    else:
        allLinks = soup.find(id = "bodyContent").find_all("a",{'class': None})        
        random.shuffle(allLinks)
        linkToScrape = 0
        for link in allLinks:
            if link['href'].find("/wiki/") == -1 or link['href'].find("Wikipedia:") == 1:
                continue  
            linkToScrape = link
            break
        scrapeWiki("https://pl.wikipedia.org"+linkToScrape['href'])
print("Witaj! Podaj dwa różne url artykułów z wikipedii, a program spróbuje do niej dojść używając tylko hiperłączy w 50 hopkach.")
print("Podaj skąd ma zaczynać:")
src = input()
print("Podaj cel:")
destination = input()
destinationSlice = destination[24:]
scrapeWiki(src)  


  