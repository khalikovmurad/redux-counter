import { useSelector } from "react-redux";



const Number = () => {
   const num = useSelector((state) => state.number);
   return (
        <div>{num}</div>
    );
}

export default Number;