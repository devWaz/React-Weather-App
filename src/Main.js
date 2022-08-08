const api = {
    key: "c026713c36dfb2de015fc84d94e5be17",
    base: "https://api.openweathermap.org/data/2.5/"
  }


function Main(){
    return (
        <main>
        <div className='search'>
          <input 
          type="text"
          className="search-bar"
          placeholder='Search Country'
          />
        </div>
      </main>
    )
}


export default Main;