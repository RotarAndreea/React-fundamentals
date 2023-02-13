
# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Rezumatul proiectului
Proiectul a urmarit implementarea mai multor concepte si tehnologii de baza ale framework-ului React. Scopul proiectului a fost punerea in practica a termenilor precum: props si state, event listeners, ternary operator, useEffect, fetch data .
 
In folderul components se afla toate scripturile pentru crearea elementelor. Folderul pages cuprinde fisierele pentru toate paginile web implementate in proiect, in numar de 7.

# folderul components
In folderul components s-au creat mai multe subfoldere cu un nume sugestiv pentru fiecare pagina din browser.

# pagina home
Este pagina principala care se deschide la rularea proiectului. Aici au fost implementate mai multe elemente folosindu-se CSS (responsive design si adaptive design), precum si integrarea conceptelor de props.

# pagina MemeGenerator
Pagina MemeGenerator este, dupa cum sugereaza si numele, o mini aplicatie pentru generarea de meme-uri. Pagina cuprinde butoane text care preiau textul cu ajutorul useState si il ecranizeaza peste o imagine generata random. Imaginile precum si informatiile despre acestea sunt generate aleator dintr-o pagina web din care datele au fost extrase cu ajutorul useEffect, mai exact folosind functia fetch.

# pagina Applications
Aceasta pagina foloseste de asemenea useEffects pentru a prelua datele unor caractere, si ulterior afisarea acestora. Informatiile sunt afisate pe rand, cu ajutorul unui buton care in momentul in care este apasat schimba caracterul (datele acestuia) si incrementeaza un numar afisat in pagina care contorizeaza de cate ori a fost apasat butonul.
In aceasta pagina se afla si implementarea tehnologiilor props si operatorul ternar pentru afisarea unei imagini goale sau colorate, in functie de apasarea pe aceasta.

# pagina Exercise
Implementarea acestei pagini s-a facut axandu-se pe integrarea cunostintelor de props, operatorii ternari, functii ale array-ului si state. In pagina sunt afisate 6 cuburi, unele goale iar altele colorate. In pagina este afisat de 6 ori acelasi element cub, insa cu valori diferite. La apasarea oricarui cub, acesta trebuie sa isi modifice culoarea: daca este transparent trebuie sa se coloreze in negru, respectiv daca este negru trebuie sa devina transparent.
De asemenea au fost implementate si butoane de diferite tipuri pentru a fi folosite in moduri specifice, urmarindu-se importanta caracteristicilor acestuia : id, value,onChange, name.

# pagina Form
Aceasta pagina cuprinde diferite butoane caruia li s-au pus anumite reguli ce trebuie sa fie respectate pentru a putea fi apasat cu succes butonul de Send.

# pagina Exercise2
In aceasta pagina este afisat pe ecran latimea ecranului(folosindu-se useEffect), in timp ce utilizatorul redimensioneaza fereastra.

# pagina Challenge1
In aceasta pagina a fost implementat un buton de tipul dark/light theme, care in momentul in care este apasat schimba culorile predominante de pe ecran in alb sau negru.