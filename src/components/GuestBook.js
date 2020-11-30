import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function GuestBook() {

    const [entries, setEntries] = useState([{
        id: 0,
        name: "Steve",
        message: "Hi"
    }]);

    useEffect(() => {
        axios.get("http://localhost:8080").then(res => setEntries(res.data));
    }, []);

    return (
        <>
            <h2>GuestBook</h2>
            <table border="1">
                <thead><tr><th>Name</th><th>Message</th></tr></thead>

                <tbody>
                    {
                        entries.map(entry =>
                            <tr key={entry.id}>
                                <td>{entry.name}</td>
                                <td>{entry.message}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p><Link to="/add">Add Comment</Link></p>
        </>
    );
}


export default GuestBook;