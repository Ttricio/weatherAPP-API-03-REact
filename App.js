import { useState } from "react"

const api = {
	key: "bbcb421e22939803bcda1d7b42951a17",
	base: "https://api.openweathermap.org/data/2.5/",
}

let monthsArr = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]
let daysArr = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

function App() {
	const [query, setQuery] = useState("")
	const [weather, setWeather] = useState({})

	const search = (event) => {
		if (event.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(
				(res) =>
					res.json().then((result) => {
						setQuery("")
						setWeather(result)
						
					})
			)
		}
	}

	const dateBuilder = (d) => {
		let months = monthsArr
		let days = daysArr

		let day = days[d.getDay()]
		let date = d.getDate()
		let month = months[d.getMonth()]
		let year = d.getFullYear()
		return `${day} ${date} ${month} ${year}`
	}
	return (
		<div
			className={
				typeof weather.main !== "undefined"
					? weather.main.temp > 16
						? "app warm"
						: "app"
					: "app"
			}>
			<main>
				<div className='search-box'>
					<input
						type='text'
						className='search-bar'
						placeholder='Search...'
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{typeof weather.main != "undefined" ? (
					<div>
						<div className='location-box'>
							<div className='location'>{weather.name}</div>
							<div className='date'>{dateBuilder(new Date())}</div>
						</div>
						<div className='weather-box'>
							<div className='temp'>{Math.round(weather.main.temp)}°C</div>
							<div className='weather'> {weather.weather[0].main}</div>
						</div>
					</div>
				) : (
					""
				)}
			</main>
		</div>
	)
}

export default App
