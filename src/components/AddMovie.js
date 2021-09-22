import {useState} from "react";

export default function AddMovie(props) {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);

    const handleTitleInput = (event) => setTitle(event.target.value)
    const handleDirectorInput = (event) => setDirector(event.target.value)
    const handleIMDBRatingInput = (event) => setIMDBRating(event.target.value)
    const handleHasOscarsInput = (event) => setHasOscars(event.target.checked)

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {title, director, IMDBRating, hasOscars}
        
        props.addNewMovie(newMovie)

        setTitle('');
        setDirector('');
        setIMDBRating(5);
        setHasOscars(true);
    }

    return (
        <div className="AddMovie">
            <h4>Add a Movie</h4>
            {/* adding the form */}

            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={handleTitleInput} />

                <label>Director: </label>
                <input type="text" name="director" value = {director} onChange={handleDirectorInput} />

                <label>IMDB: </label>
                <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleIMDBRatingInput} />
                
                <label>Won Oscars: </label>
                <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleHasOscarsInput} />

                <button type="submit">Add a Movie</button>
            </form>

        </div>
    )
}