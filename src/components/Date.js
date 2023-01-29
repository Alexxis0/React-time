import React from "react";
import { useState } from "react";

const DateOne = () => {
    const [timezone, setTimezone] = useState("UTC");

    function handleChange(e) {
        setTimezone(e.target.value);
    }
    const currentTime = new Date().toLocaleTimeString("fr-FR", {
        hour: "numeric",
        minute: "numeric",
        timeZone: timezone,
    });

    return (
        <div className="date">
            <select value={timezone} onChange={handleChange}>
                <option value="UTC">UTC</option>
                <option value="America/New_York">New York</option>
                <option value="Asia/Tokyo">Tokyo</option>
                <option value="Europe/Paris">Paris</option>
            </select>
            <p>{currentTime}</p>
        </div>
    );
};

export default DateOne;
