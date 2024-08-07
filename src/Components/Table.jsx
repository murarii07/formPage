import React from "react";
import { useState } from "react";
function Tables() {
    const fieldss = ['departmentName', 'qualification', 'teacherName', 'programme'];
    const [tableData, setTableData] = useState([])

    // Sample data to populate the table
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:5000/portal", { method: 'GET' })
            const result = await res.json();
            if (result['succes']) {
                //console.log(result)
                const d = result['data'];
                setTableData(d)
               
            }
            else {
                setTableData([])
            }
        }
        catch (error) {
            console.log(error);
            return;
        }


    }

    useState(async () => {
        fetchData()
    }, [tableData])
    return (
        <>
        <div>count:<span>{tableData.length}</span></div>
            <table className="table-details">
                <thead>
                    <tr>
                        {fieldss.map((field, index) => (
                            <th key={index}>{field}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            {fieldss.map((field, idx) => (
                                <td key={idx}>{item[field]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button><a href="http://localhost:5000/download" download="result.zip">download the table</a></button>
        </>
    );
}

export default Tables;
