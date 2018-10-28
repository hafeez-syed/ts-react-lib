import {Avatar} from "./avatar";
import {Recipe} from "./recipe";
import {ShoppingList} from "./shoppinglist";
import {Profile} from "./profile";

import user from './user.json';

import '../assets/css/bootstrap.css';
import '../assets/css/style.less';



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

ReactDOM.render(
    <Profile customer={user.customer} />,
    document.getElementById('app')
);

export {
	Avatar,
	Recipe,
	ShoppingList,
	Profile
}
