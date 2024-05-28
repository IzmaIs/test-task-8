import classes from './App.module.scss';
import {Menu, TegCard} from "./components";
import {Provider} from "./provider/Provider";

export const App = () => {
  return (
    <Provider>
      <div className={classes.container}>
        <Menu/>
        <TegCard/>
      </div>
    </Provider>
  );
}
