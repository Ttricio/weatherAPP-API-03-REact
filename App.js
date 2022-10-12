const api = {
	key: "bbcb421e22939803bcda1d7b42951a17",
	base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
	return (
		<div className='app'>
			<main>
				<div className='search-box'>
					<input
						type='text'
						className='search-bar'
						placeholder='Search...'></input>
				</div>
			</main>
		</div>
	)
}

export default App
