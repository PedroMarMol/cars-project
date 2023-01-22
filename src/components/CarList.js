import { useSelector } from "react-redux";

function CarList() {
    const cars = useSelector((state) => {
        return state.cars.data;

    });
    
    console.log(cars);
    return <div>list of cars</div>;
}

export default CarList;