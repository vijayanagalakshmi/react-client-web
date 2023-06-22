import React, {useState} from "react"
const CityPage = () => {
    
    const [cities, setCities] = useState([]);
    const [currentCity, setCurrentCity] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');
    const [filter, setFilter] = useState('');

    // Function to add a new city
    const addCity = () => {
        if (currentCity.trim() !== '') {
            setCities([
                ...cities,
                { name: currentCity, description: currentDescription },
                
            ]);
            console.log("city added",currentCity)
           setCurrentCity('');
            setCurrentDescription('');
        }
    };
    const filterCities= (letter) => {
        setFilter (letter);
    };
    
    return (
        <div>
            <h1>Cities</h1>
            <input
                type="text"
                value={currentCity}
                onChange={(e) => setCurrentCity(e.target.value)}
                placeholder="City"
            />
            <input
                type="text"
                value={currentDescription}
                onChange={(e) => setCurrentDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={addCity}>Add City</button>
            <div>
                <br/>
            <button type="button" className="Button" onClick={() => filterCities('A')}>A</button>
            <button type="button" className="Button" onClick={() => filterCities('B')}>B</button>
            <button type="button" className="Button" onClick={() => filterCities('C')}>C</button>
            <button type="button" className="Button" onClick={() => filterCities('D')}>D</button>
            <button type="button" className="Button" onClick={() => filterCities('E')}>E</button>
    
        </div>
            </div>
           
            )
  

}

            export default CityPage;