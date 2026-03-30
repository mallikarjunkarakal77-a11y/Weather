async function getWeather() {
    const location = document.getElementById("location").value;
    if (location === "") {
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.weatherapi.com/v1/current.json?key=ded803a0afc845dfb6c12925262703&q=${location}&aqi=yes`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.error) {
            alert("City not found");
            return;
        }
        document.getElementById("city").innerText =
            data.location.name + ", " + data.location.country;
        document.getElementById("temp").innerText =
            "Temperature: " + data.current.temp_c + " °C";
        document.getElementById("condition").innerText =
            "Condition: " + data.current.condition.text;
    } catch (error) {
        console.log(error);
        alert("Error fetching weather data");
    }
}