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
		<div className='app'>
			<main>
				<div className='search-box'>
					<input type='text' className='search-bar' placeholder='Search...' />
				</div>
				<div>
					<div className='location'>Warsaw, POL</div>
					<div className='date'>{dateBuilder(new Date())}</div>
				</div>
				<div className='weather-box'>
					<div className='temp'>15</div>
					<div className='weather'> Sunny</div>
				</div>
			</main>
		</div>
	)
}

export default App
