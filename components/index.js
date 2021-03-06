import {Avatar} from "./avatar";
import {Recipe} from "./recipe";
import {ShoppingList} from "./shoppinglist";
import {Profile} from "./profile";

import user from './user.json';

import '../assets/css/bootstrap.css';
import '../assets/css/style.less';

function numbers() {
    return [1,2,3,4,5,6,7,8,9];
}

function strings() {
    return ['A', 'B', 'C'];
}


export {
    Avatar,
    Recipe,
    ShoppingList,
    Profile,
    numbers,
    strings
}

/*
export class ReactApp extends React.Component {
    render() {
        return (
            <div>
                Hello from ReactApp
            </div>
        )
    }
}
*/

/*ReactDOM.render(
    <Profile customer={user.customer}/>,
    document.getElementById('app')
);*/
