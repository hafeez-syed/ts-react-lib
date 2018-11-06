import {Avatar} from "./avatar";
import {Recipe} from "./recipe";
import {ShoppingList} from "./shoppinglist";
import {Profile} from "./profile";

import user from './user.json';

import '../assets/css/bootstrap.css';
import '../assets/css/style.less';

ReactDOM.render(
    <Profile customer={user.customer} />,
    document.getElementById('app')
);

window.replaceComponent = function() {
	ReactDOM.render(
		<ShoppingList name='Facebook' />,
		document.getElementById('app')
	);
};

export {
	Avatar,
	Recipe,
	ShoppingList,
	Profile
}
