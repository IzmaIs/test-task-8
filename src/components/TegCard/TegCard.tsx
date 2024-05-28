import classes from './TegCard.module.scss';
import {useProvider} from "../../provider";
import {TegCardItem} from "./components";

export const TegCard = () => {

    const { getFilteredCourses } = useProvider()

    return (
        <div className={classes.container}>
            {getFilteredCourses().map(course => <TegCardItem key={course.id} image={course.image} description={course.name} bgColor={course.bgColor}/>)}
        </div>
    );
};