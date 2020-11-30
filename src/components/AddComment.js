import { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

function AddComment() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    let history = useHistory();

    const onSubmit = function (e) {
        e.preventDefault();
        axios.post("http://localhost:8080/", {
            name,
            message,
        }).then(() => history.push("/"));
    };

    return (
        <form onSubmit = {onSubmit}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            <br />
            Message: <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <br />
            <button>Add Comment</button>
        </form>
    );
}


export default AddComment;