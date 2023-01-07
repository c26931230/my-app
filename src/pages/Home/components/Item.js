const Item = ({note,date,time}) => {
    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="delete">delete</button>
    </div>
}
export default Item