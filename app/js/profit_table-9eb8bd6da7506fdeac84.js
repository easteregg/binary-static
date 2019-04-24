(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_table"],{

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Add proper messages before the PR
var ProfitTable = function ProfitTable() {
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
                    data_source: data,
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
};

exports.default = ProfitTable;

/***/ })

}]);