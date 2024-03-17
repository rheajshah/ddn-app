import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Teams.css';

function Teams() {
    // Define state to store the result
    const [result, setResult] = useState(null);

    // Function to call the API
    const callAPI = (base, exponent) => {
        // API endpoint
        const apiUrl = 'https://dfze7gsm5a.execute-api.us-east-1.amazonaws.com/dev';

        // Request body
        const requestBody = {
            base: base,
            exponent: exponent
        };

        // Make the API call
        axios.post(apiUrl, requestBody)
            .then(response => {
                setResult(response.data.body);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>TO THE POWER OF MATH!</h1>
            <form>
                <label>Base number:</label>
                <input type="text" id="base" />
                <label>...to the power of:</label>
                <input type="text" id="exponent" />
                {/* Call the callAPI function on button click */}
                <button
                    type="button"
                    onClick={() => {
                        const base = document.getElementById('base').value;
                        const exponent = document.getElementById('exponent').value;
                        callAPI(base, exponent);
                    }}
                >
                    CALCULATE
                </button>
            </form>
            {/* Display the result */}
            {result && <p>Result: {result}</p>}
        </div>
    );
}

export default Teams;
