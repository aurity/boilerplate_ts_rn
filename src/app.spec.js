"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var app_1 = __importDefault(require("./app"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
describe("App", function () {
    it("should render", function () {
        var tree = react_test_renderer_1.default
            .create(react_1.default.createElement(app_1.default, null))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
