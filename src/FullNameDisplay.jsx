import React, { useState } from "react";

function FullNameDisplay() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() && lastName.trim()) {
            setFullName(`Full Name: ${firstName} ${lastName}`);
        } else {
            setFullName("Please fill in both fields.");
        }
    };

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>{fullName}</p>
        </div>
    );
}

export default FullNameDisplay;
