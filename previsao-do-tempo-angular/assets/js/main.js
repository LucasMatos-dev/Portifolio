const apiKey = "14d4aea16d9b89066f20d5692197683d"
const lang = "pt_br"
const units = "metric"
const app = angular.module("weatherApp", [])

app.controller('WeatherController', function ($scope, $http) {
    $scope.city = ""
    $scope.cardActive = false
    $scope.temperature = ""
    $scope.feelsLike = ""
    $scope.minTemperature = ""
    $scope.maxTemperature = ""
    $scope.humidity = ""
    $scope.windVelocity = ""
    $scope.windOrientation = ""
    $scope.iconUrl = ""
    $scope.cityName = ""

    $scope.callApi = async () => {
        const city = $scope.city || localStorage.getItem("city") || "São Paulo"

        const response = await $http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
        )

        const { data } = response

        const icon = data.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

        $scope.iconUrl = iconUrl

        $scope.temperature = Math.round(data.main.temp)
        $scope.feelsLike = Math.round(data.main.feels_like)
        $scope.minTemperature = Math.round(data.main.temp_min)
        $scope.maxTemperature = Math.round(data.main.temp_max)
        $scope.humidity = data.main.humidity
        $scope.windVelocity = data.wind.speed.toLocaleString()
        $scope.windOrientation = data.wind.deg
        $scope.cityName = data.name

        localStorage.setItem("city", $scope.cityName)

        $scope.cardActive = true
        $scope.$apply()
    }

    $scope.callApi()
})