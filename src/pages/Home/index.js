import { useState } from 'react';
import Edit from './components/Edit'
import List from './components/List'
import './index.css';
const app = {
    color: '#333333',
    border: '1px solid #333',
    width: '400px',
    padding: '30px'
}
const Home = () => {
    const [data, setData] = useState([])
    return <div style={app}>
        <Edit add={setData}/>
        <List listData={data}/>
    </div>
}

export default Home