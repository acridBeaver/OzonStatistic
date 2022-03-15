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
    ResponsiveContainer
} from "recharts"

const data = [
    {name: "Понедельник", uv: 1453 , pv: 2300, amt: 500},
    {name: "Вторник", uv: 10000 , pv: 700, amt: 532},
    {name: "Среда", uv: 5432 , pv: 1700, amt: 300},
    {name: "Четверг", uv: 6700 , pv: 5432, amt: 431},
    {name: "Пятница", uv: 2348 , pv: 2313, amt: 324},
    {name: "Суббота", uv: 14300 , pv: 5444, amt: 543},
    {name: "Воскресение", uv: 9000 , pv: 3212, amt: 123},
]
function Graph () {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={data} margin={{ top: 10, left: 0, right: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign={"top"} height={30}/>
                <Bar dataKey="uv" fill="#8884d8" name="Доход"/>
                <Bar dataKey="pv" fill="#82ca9d" name="Убыток"/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Graph;