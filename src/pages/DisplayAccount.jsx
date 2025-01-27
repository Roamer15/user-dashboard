import { useNavigate } from 'react-router'
import Banner from '../components/Banner'

function DisplayAccount() {
    const accountInfo = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const update = () => {
        navigate('/update')
    }
    return (
        <>
          <Banner />
        <div className="info">
            <p><strong>Name</strong>: {accountInfo.name}</p>
            <p><strong>Email</strong>: {accountInfo.email}</p>
           
            <button className='edit-info' onClick={update}>Update info</button>
        </div>
        </>
      
    )
}

export default DisplayAccount