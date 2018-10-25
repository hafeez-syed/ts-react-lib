import * as Avatar from "./avatar";
import * as Recipe from "./recipe";
import {ShoppingList} from "./shoppinglist";

import '../css/style.less';

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

/*
ReactDOM.render(
    <ShoppingList name="Hafeez"/>,
    document.getElementById('app')
);
*/
