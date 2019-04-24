(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_table"],{

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
                            className: 'profit',
                            data_source: this.data,
                            columns: columns,
                            onScroll: handleScroll,
                            getRowLink: function getRowLink(row_obj) {
                                return row_obj.id ? (0, _Routes.getContractPath)(row_obj.id) : undefined;
                            },
                            is_empty: is_empty
                        },
                        _react2.default.createElement(PlaceholderComponent, {
                            is_loading: is_loading,
                            has_selected_date: has_selected_date,
                            is_empty: is_empty
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