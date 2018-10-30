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
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            githubRepo: props.githubRepo
        };
        _this.updateRepo = _this.updateRepo.bind(_this);
        return _this;
    }
    Avatar.prototype.updateRepo = function (repo) {
        this.setState(function () {
            return {
                githubRepo: repo
            };
        });
    };
    Avatar.prototype.componentDidMount = function () {
        if (this.state.githubRepo) {
            this.updateRepo(this.state.githubRepo);
        }
    };
    Avatar.prototype.render = function () {
        var githubRepo = this.state.githubRepo;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'popular-rank' }, "#"),
            React.createElement("ul", { className: "space-list-items" },
                React.createElement("li", null,
                    React.createElement("img", { className: "avatar", src: githubRepo.owner.avatar_url, alt: "Avatar from " + githubRepo.owner.login })),
                React.createElement("li", null,
                    React.createElement("a", { href: githubRepo.html_url }, githubRepo.name)),
                React.createElement("li", null,
                    "@",
                    githubRepo.owner.login),
                React.createElement("li", null,
                    githubRepo.stargazers_count,
                    " stars"))));
    };
    return Avatar;
}(React.Component));
exports.Avatar = Avatar;
//# sourceMappingURL=avatar.js.map