import classes from './MenuItem.module.scss';
import {useProvider} from "../../../../provider";
import {clsx} from "clsx";
import {MenuItemProps} from "./MenuItem.types";
import {memo} from "react";

export const MenuItem = memo(({name, getSelectedItem}: MenuItemProps) => {

  const { selectedItem } = useProvider()

  return (
    <div className={clsx(classes.container, name === selectedItem && classes.selected)} onClick={() => getSelectedItem(name)}>
      {name}
    </div>
  );
});