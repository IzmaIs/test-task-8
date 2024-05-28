import classes from './TegCardItem.module.scss';
import {clsx} from "clsx";
import {TegCardItemProps} from "./TegCardItem.types";
import {memo} from "react";

export const TegCardItem = memo(({ image, description, bgColor }: TegCardItemProps) => {
    return (
        <div className={classes.container}>
            <img style={{background: bgColor}} src={image} className={clsx(classes.image)}  alt={description}/>
            <div className={classes.description}>{description}</div>
        </div>
    );
});