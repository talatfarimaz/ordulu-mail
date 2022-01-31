import CareerAndLifeSectionOne from "./CareerAndLife/CareerAndLifeSectionOne";
import CareerAndLifeStyle from "../Styles/CareerAndLifeStyle";
import CareerAndLifeSectionTwo from "./CareerAndLife/CareeAndLifeSectionTwo";
import CareerAndLifeSectionThree from "./CareerAndLife/CareerAndLifeSectionThree";
import CareerAndLifeSectionFour from "./CareerAndLife/CareerAndLifeSectionFour";
import CareerAndLifeSectionFive from "./CareerAndLife/CareerAndLifeSectionFive";


function CareerAndLife() {
    const classes = CareerAndLifeStyle();
    return (
        <div className={classes.bodyDivStyle} id={"career"}>
            <CareerAndLifeSectionOne/>
            <CareerAndLifeSectionTwo/>
            <CareerAndLifeSectionThree/>
           {/* <CareerAndLifeSectionFour/>
            <CareerAndLifeSectionFive/>*/}
        </div>
    );
}

export default CareerAndLife;