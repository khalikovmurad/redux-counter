import { useDispatch } from "react-redux";


const Buttons = () => {
    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch({ type: 'plus' });

    
    }

const handleDec = () => {
        dispatch({ type: 'minus' })
    }

const handleRand =() => {
    const rand = Math.round(Math.random() * 100);
    dispatch({ type: 'rand', payload: rand })
}


    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleRand}>ran</button>
        </div>
    );
}

export default Buttons;    

