
import { useEffect, useState } from "react";
function Tables() {
    const fieldss = ['departmentName', 'qualification', 'teacherName', 'programme'];
    const [tableData, setTableData] = useState([])
    const [inp, setInp] = useState('')
    const [copy, setCopy] = useState([])

    // Sample data to populate the table
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:5000/portal", { method: 'GET' })
            const result = await res.json();
            if (result['succes']) {
                //console.log(result)
                const d = result['data'];
                setTableData(d);
                setCopy(d)

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
    const handleChange = (e) => {
        setInp(e.target.value)
    }
    useEffect(() => {
        if(inp===''){
            return
        }
        const setIn = setTimeout(() => {
            const filterData = tableData.filter(x => x.teacherName.includes(inp));
            setCopy(filterData)
        },[1000])
        return () => { clearTimeout(setIn) };
    }, [inp])

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div>count:<span>{tableData.length}</span></div>
            <label htmlFor="search">search by teacher name:</label>
            <input type="text" value={inp} onChange={(e) => handleChange(e)} />
            <table className="table-details">
                <thead>
                    <tr>
                        {fieldss.map((field, index) => (
                            <th key={index}>{field}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {copy.map((item, index) => (
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
