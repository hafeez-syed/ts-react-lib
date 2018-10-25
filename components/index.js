//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

import {Avatar} from "./avatar";
import {Recipe} from "./recipe";
import {ShoppingList} from "./shoppinglist";
import numRef from './ref.json';

import '../css/style.less';



function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
}

function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}


export {
    Avatar,
    Recipe,
    ShoppingList,
    numToWord,
    wordToNum
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
    <ShoppingList name="Hafeez"/>,
    document.getElementById('app')
);*/
