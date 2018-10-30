"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Recipe = /** @class */ (function (_super) {
    __extends(Recipe, _super);
    function Recipe(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            food: props.food
        };
        _this.updateRepo = _this.updateRepo.bind(_this);
        return _this;
    }
    Recipe.prototype.updateRepo = function (food) {
        this.setState(function () {
            return {
                food: food
            };
        });
    };
    Recipe.prototype.componentDidMount = function () {
        if (this.state.food) {
            this.updateRepo(this.state.food);
        }
    };
    Recipe.prototype.render = function () {
        var food = this.state.food;
        return (React.createElement("div", null,
            React.createElement("a", { className: 'recipe-link', href: "#" },
                React.createElement("img", { src: food.image_url, alt: food.title }),
                React.createElement("br", null),
                React.createElement("span", { className: "recipe-name" }, food.title)),
            React.createElement("br", null),
            React.createElement("span", { className: "publisher" }, food.publisher),
            React.createElement("span", { className: "badge badge-important" }, food.social_rank)));
    };
    return Recipe;
}(React.Component));
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map