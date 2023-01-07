import { useState } from "react"

const Edit = ({add}) => {

    const [note,setNote] = useState("")
    function noteChange(e){
        setNote(e.target.value)
    }
    const [date,setDate] = useState("")
    function dateChange(e){
        setDate(e.target.value)
    }
    const [time,setTime] = useState("")
    function timeChange(e){
        setTime(e.target.value)
    }
    function addItem(){
        add(function(preData){
            return [...preData,{
                note,
                date,
                time
            }]
        })
    }
    console.log(note,date,time);
    return <div className="edit">
        <h1>備忘錄</h1>
        <h2>記事:</h2>
        <input type="text" value={note} onChange={noteChange}/>
        <h2>日期:</h2>
        <input type="date" value={date} onChange={dateChange}/>
        <h2>時間:</h2>
        <input type="time" value={time} onChange={timeChange}/>
        <button className="add" onClick={addItem}>新增</button>
    </div>
}
export default Edit