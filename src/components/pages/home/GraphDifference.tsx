import {
    LineChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line,
    BarChart,
    YAxis,
    Legend,
    Bar,
    ResponsiveContainer,
    PieChart, Pie
} from "recharts"
import React from "react";
import Graph from "./Graph";

const data01 = [
    {
        "name": "Доходы",
        "value": 120000
    },
    {
        "name": "Расходы",
        "value": 15000
    }
] as Data;

type Data = Array<DataItem>

interface DataItem {
    name : string,
    value: number
}


const GraphDifference : React.FC = () => {
    return (
        <ResponsiveContainer width={"50%"} height={"50%"}>
            <PieChart >
                <Pie data={data01} dataKey="value" nameKey={"name"} outerRadius={250} fill="green" label/>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default GraphDifference;