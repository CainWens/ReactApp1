import {useDispatch,useSelector} from "react-redux";

const toggleAc = (value) => ({
    type: "SWITCH_TOGGLE",
    payload: value
})

const Toggler = () =>{
    const isChecked = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(isChecked)

    return(
        <>
            <input type='checkbox' value={isChecked} onChange={()=>{
                dispatch({type:"SWITCH_TOGGLE"})
            }}/>
        </>
    )
}

export default Toggler