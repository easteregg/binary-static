(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_table"],{

/***/ "./src/javascript/app_2/Modules/Reports/Components/empty-profit-table-message.jsx":
/*!****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/empty-profit-table-message.jsx ***!
  \****************************************************************************************/
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

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _NavBar = __webpack_require__(/*! ../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app_2/Constants/index.js");

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyProfitTableMessage = function EmptyProfitTableMessage(_ref) {
    var has_selected_date = _ref.has_selected_date;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'empty-profit-table' },
            _react2.default.createElement(_Common.Icon, { icon: _NavBar.IconReports, className: 'empty-profit-table__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'empty-profit-table__text' },
                !has_selected_date ? (0, _localize.localize)('Your account has no trading activity.') : (0, _localize.localize)('Your account has no trading activity for the selected period.')
            ),
            !has_selected_date && _react2.default.createElement(
                _Routes.ButtonLink,
                {
                    className: 'btn--secondary btn--secondary--orange',
                    to: _Constants.routes.trade
                },
                _react2.default.createElement(
                    'span',
                    null,
                    (0, _localize.localize)('Trade now')
                )
            )
        )
    );
};

EmptyProfitTableMessage.propTypes = {
    has_selected_date: _propTypes2.default.bool
};

exports.default = EmptyProfitTableMessage;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx ***!
  \***********************************************************************************/
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

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceholderComponent = function PlaceholderComponent(props) {
    var EmptyMessageComponent = props.empty_message_component;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.is_empty && _react2.default.createElement(EmptyMessageComponent, { has_selected_date: props.has_selected_date }),
        props.is_loading && _react2.default.createElement(_loading2.default, null)
    );
};

PlaceholderComponent.propTypes = {
    empty_message_component: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool
};

exports.default = PlaceholderComponent;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReportsMeta = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportsMeta = function ReportsMeta(_ref) {
    var i18n_heading = _ref.i18n_heading,
        i18n_message = _ref.i18n_message;
    return _react2.default.createElement(
        'div',
        { className: 'reports__meta' },
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-description' },
            _react2.default.createElement(
                'h1',
                { className: 'reports__meta-description--heading' },
                i18n_heading
            ),
            _react2.default.createElement(
                'p',
                { className: 'reports__meta-description--paragraph' },
                i18n_message
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-filter' },
            '[FILTER COMPONENT]'
        )
    );
};

exports.ReportsMeta = ReportsMeta;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: Unexpected token, expected } (131:35)\n\n\u001b[0m \u001b[90m 129 | \u001b[39m        renderCellContent\u001b[33m:\u001b[39m ({ cell_value\u001b[33m,\u001b[39m row_obj }) \u001b[33m=>\u001b[39m (\n \u001b[90m 130 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mProgressSliderStream\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 131 | \u001b[39m                endtime\u001b[33m=\u001b[39m{cell_value{}\n \u001b[90m     | \u001b[39m                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 132 | \u001b[39m                \u001b[33m...\u001b[39mrow_obj\n \u001b[90m 133 | \u001b[39m            \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 134 | \u001b[39m        )\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Containers/profit-table.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Containers/profit-table.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _emptyProfitTableMessage = __webpack_require__(/*! ../Components/empty-profit-table-message.jsx */ "./src/javascript/app_2/Modules/Reports/Components/empty-profit-table-message.jsx");

var _emptyProfitTableMessage2 = _interopRequireDefault(_emptyProfitTableMessage);

var _placeholderComponent = __webpack_require__(/*! ../Components/placeholder-component.jsx */ "./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx");

var _placeholderComponent2 = _interopRequireDefault(_placeholderComponent);

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO Add proper messages before the PR
var ProfitTable = function (_React$Component) {
    _inherits(ProfitTable, _React$Component);

    function ProfitTable() {
        _classCallCheck(this, ProfitTable);

        return _possibleConstructorReturn(this, (ProfitTable.__proto__ || Object.getPrototypeOf(ProfitTable)).apply(this, arguments));
    }

    _createClass(ProfitTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                is_empty = _props.is_empty,
                is_loading = _props.is_loading,
                error = _props.error,
                handleScroll = _props.handleScroll,
                has_selected_date = _props.has_selected_date;

            if (error) return _react2.default.createElement(
                'p',
                null,
                error
            );

            var columns = (0, _dataTableConstants.getProfitTableColumnsTemplate)();

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Profit Table'),
                    i18n_message: (0, _localize.localize)('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'profit-table__content' },
                    _react2.default.createElement(
                        _DataTable2.default,
                        {
                            className: 'profit-table',
                            data_source: data,
                            columns: columns,
                            onScroll: handleScroll,
                            getRowLink: function getRowLink(row_obj) {
                                return row_obj.id ? (0, _Routes.getContractPath)(row_obj.id) : undefined;
                            },
                            is_empty: is_empty
                        },
                        _react2.default.createElement(_placeholderComponent2.default, {
                            is_loading: is_loading,
                            has_selected_date: has_selected_date,
                            is_empty: is_empty,
                            empty_message_component: _emptyProfitTableMessage2.default
                        })
                    )
                )
            );
        }
    }]);

    return ProfitTable;
}(_react2.default.Component);

ProfitTable.propTypes = {
    data: _mobxReact.PropTypes.arrayOrObservableArray,
    error: _propTypes2.default.string,
    handleScroll: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules;
    return {
        data: modules.profit_table.data,
        error: modules.profit_table.error,
        handleScroll: modules.profit_table.handleScroll,
        has_selected_date: modules.profit_table.has_selected_date,
        is_empty: modules.profit_table.is_empty,
        is_loading: modules.profit_table.is_loading,
        onMount: modules.profit_table.onMount,
        onUnmount: modules.profit_table.onUnmount
    };
})((0, _reactRouter.withRouter)(ProfitTable));

/***/ })

}]);