(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contract"],{

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: JSX attributes must only be assigned a non-empty expression (29:56)\n\n\u001b[0m \u001b[90m 27 | \u001b[39m                        is_contract_mode\u001b[33m=\u001b[39m{\u001b[36mtrue\u001b[39m}\n \u001b[90m 28 | \u001b[39m                        \u001b[33mDigits\u001b[39m\u001b[33m=\u001b[39m{\u001b[33m<\u001b[39m\u001b[33mDigits\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m                        \u001b[33mInfoBox\u001b[39m\u001b[33m=\u001b[39m{\u001b[33m<\u001b[39m\u001b[33mInfoBox\u001b[39m is_trade_page\u001b[33m=\u001b[39m{} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m}\n \u001b[90m    | \u001b[39m                                                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 30 | \u001b[39m                        is_ended\u001b[33m=\u001b[39m{isEnded(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mcontract_info)}\n \u001b[90m 31 | \u001b[39m                        end_epoch\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mcontract_info\u001b[33m.\u001b[39mdate_start}\n \u001b[90m 32 | \u001b[39m                        start_epoch\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mcontract_info\u001b[33m.\u001b[39mdate_expiry}\u001b[0m\n");

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Errors = __webpack_require__(/*! ../../../App/Components/Elements/Errors */ "./src/javascript/app_2/App/Components/Elements/Errors/index.js");

var _Errors2 = _interopRequireDefault(_Errors);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _contractReplay = __webpack_require__(/*! ./contract-replay.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx");

var _contractReplay2 = _interopRequireDefault(_contractReplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contract = function Contract(_ref) {
    var error_message = _ref.error_message,
        has_error = _ref.has_error,
        match = _ref.match;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        has_error ? _react2.default.createElement(_Errors2.default, { message: error_message }) : _react2.default.createElement(
            'div',
            { className: 'trade-container' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactTransitionGroup.CSSTransition,
                    {
                        'in': !has_error,
                        timeout: 400,
                        classNames: {
                            enter: 'contract--enter',
                            enterDone: 'contract--enter-done',
                            exit: 'contract--exit'
                        },
                        unmountOnExit: true
                    },
                    _react2.default.createElement(_contractReplay2.default, { contract_id: match.params.contract_id, key: match.params.contract_id })
                )
            )
        )
    );
};

Contract.propTypes = {
    error_message: _propTypes2.default.string,
    has_error: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    match: _propTypes2.default.object,
    symbol: _propTypes2.default.string
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        ui = _ref2.ui;
    return {
        error_message: modules.contract.error_message,
        has_error: modules.contract.has_error,
        is_mobile: ui.is_mobile,
        symbol: modules.contract.contract_info.underlying
    };
})(Contract);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/index.js":
/*!********************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _contract = __webpack_require__(/*! ./Containers/contract.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract.jsx");

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contract2.default;

/***/ })

}]);