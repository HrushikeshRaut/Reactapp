import React, { useEffect, useState } from "react";

export default function Table({ data }) {
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            setHeaders(Object.keys(data[0]));
        }
    }, [data]);

    console.log("received Data", typeof data, typeof headers);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {headers.map((header) => (
                                <td key={header}>{item[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

