import React, { useEffect, useState } from "react";
import "./table.css";

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
                                // <>
                                // {
                                //     item[header].search('/(http|https)/') ? 
                                //     <div>hello</div> :
                                //     <div>no</div>
                                // }
                                // </>
                                // {item[header].search( '/(http|https)/'))}
                                // <td key={header}>{item[header]}</td>
                                    <td key={header}>
                                    {/* <img src='https://b2c-bucket-model-uat.s3.ap-south-1.amazonaws.com/drTestimonial/1700125596678_profileImage.png' /> */}
                                    {item[header]}
                                    </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

