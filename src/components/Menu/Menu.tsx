import classes from './Menu.module.scss';
import {useProvider} from "../../provider";
import {MenuItem} from "./components";

export const Menu = () => {

    const { menuItems, getSelectedItem } = useProvider()

    return (
        <div className={classes.container}>
            {menuItems.map(i => <MenuItem key={i} name={i} getSelectedItem={getSelectedItem}/>)}
        </div>
    );
};