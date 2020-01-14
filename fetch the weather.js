//wat ik eerst doe is de url samenstellen aan de hand van het 'example of API call zie infra, en de
//city en country, en daar zit ook de sleutel in
//mijn sleutel: die heb ik gehaald uit de bevestigingsmail die ik ontvangen heb na mijn inschrijving
//https://mail.google.com/mail/u/0/?hl=en#all/FMfcgxwGCkfcHszHQKRGPRpxtnzrHpFB
//
//fc2270c19c5ce02e43323e35868ee676


/*Endpoint:
- Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fc2270c19c5ce02e43323e35868ee676

Useful links:
- API documentation https://openweathermap.org/api
- Details of your plan https://openweathermap.org/price
- Please, note that 16-days daily forecast and History API are not available for Free subscribers */


// luisteren naar de klik op de knop
(() => {
document.getElementById("submitWeather").addEventListener('click', function(){

    // geef de stad in
    // geef het land in
//haal de gegevens op via: document... .value
    let cityInput=document.getElementById("city").value;
    let countryInput=document.getElementById("country").value;
    //de sleutel steek ik in de variabele key
    let key="fc2270c19c5ce02e43323e35868ee676";
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fc2270c19c5ce02e43323e35868ee676
//zo ziet de volledige url eruit met cityInput, countryInput en de key
//de bedoeling is om dat allemaal aan mekaar te ketenen, de stukjes tussenin moet ik toevoegen
//tussen strings
//het begin stuk tot de city knip uit de http link hierboven
    let start="http://api.openweathermap.org/data/2.5/weather?q=";
    //ik keten alles aan mekaar
    let URL=start+cityInput+"&units=metric,"+countryInput+"&APPID="+key;

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then(data => {

        //console.log(data);

        document.getElementById("dataTemp").innerHTML=data.main.temp;
        document.getElementById("dataTempMax").innerHTML=data.main.temp_max;
        document.getElementById("dataTempMin").innerHTML=data.main.temp_min;
    })
});
})();