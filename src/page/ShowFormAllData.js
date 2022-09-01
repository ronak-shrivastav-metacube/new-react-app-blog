import {useNavigate} from 'react-router-dom';

function ShowFormAllData()
{
    // const location = useLocation();
    const navigate = useNavigate();

    const handellClick = ()=>{
        navigate('/register',{replace:true});
    }

    return(
        <>
            {/* {location.state.templates} */}
            <button type="button" onClick={handellClick} className="btn btn-sm btn-primary m-4" >Click On Me</button>
        </>
        );
}

export default ShowFormAllData;