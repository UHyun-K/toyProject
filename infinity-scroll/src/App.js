import useBookSearch from "./useBookSearch";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }
    return (
        <>
            <input type="text" onChange={handleSearch}></input>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Loading..</div>
            <div>Error</div>
        </>
    );
}

export default App;
