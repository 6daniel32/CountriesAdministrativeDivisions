# CountriesAdministrativeDivisions

Simple crawler built on puppeteer for obtaining all administrative division from different countries (data obtained from https://www.iso.org/obp/ui)

The project is a simple node server which runs on localhost on port 3003. It executes a puppeteer instance for crawling data from subdomains of the web shown above.

The server accepts local requests, offering 2 endpoints:

## 'localhost:3003/countryStates?countryAlpha2Code=CountryCode' => get all country administrative division categories. 

For example, your requests if you want Spain's administrative divisions must be 'http://localhost:3003//countryStates?countryAlpha2Code=ES', and the response would be 
'['province', 'autonomous community', 'autonomous city in North Africa']'). 

You can obtain countries ISO alpha 2 codes from this api -> 'https://restcountries.eu/#api-endpoints-list-of-codes', or checking them manually here -> 
'https://www.iso.org/obp/ui/#search'.

## 'localhost:3003/countryStates?countryAlpha2Code=CountryCode&divisions=['divisionType1', 'divisionType2', ... , 'divisionTypeN']' => get names of all country administrative divisions whose category is included in the array passed as second query param.

For example, if you want provinces and autonomous cities in North Africa from Spain, your request must be 'localhost:3003/countryStates?countryAlpha2Code=ES&divisions=['province', 'autonomous city in North Africa']', and
the response would be '["A Coruña [La Coruña]","Alacant*","Albacete","Alicante","Almería","Araba*","Asturias","Badajoz","Balears [Baleares]","Barcelona [Barcelona]","Bizkaia","Burgos","Cantabria","Castelló*","Castellón","Ceuta","Ciudad Real","Cuenca","Cáceres","Cádiz","Córdoba","Gipuzkoa","Girona [Gerona]","Granada","Guadalajara","Huelva","Huesca","Jaén","La Rioja","Las Palmas","León","Lleida [Lérida]","Lugo [Lugo]","Madrid","Melilla","Murcia","Málaga","Nafarroa*","Navarra","Ourense [Orense]","Palencia","Pontevedra [Pontevedra]","Salamanca","Santa Cruz de Tenerife","Segovia","Sevilla","Soria","Tarragona [Tarragona]","Teruel","Toledo","Valencia","Valladolid","València*","Zamora","Zaragoza","Álava","Ávila"]'.

Probably this project and documentation is full of errors because it is my first free software contribution and i'm not an english native speaker. Feel free to fork it and modify it
as you want.
