/*!
 * react-google-places-suggest v3.5.0 - https://github.com/xuopled/react-google-places-suggest#readme
 * MIT Licensed
 */
;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("prop-types"), require("react"))
  else if (typeof define === "function" && define.amd)
    define(["prop-types", "react"], factory)
  else if (typeof exports === "object")
    exports["ReactDemoPage"] = factory(require("prop-types"), require("react"))
  else root["ReactDemoPage"] = factory(root["PropTypes"], root["React"])
})(this, function(
  __WEBPACK_EXTERNAL_MODULE_0__,
  __WEBPACK_EXTERNAL_MODULE_1__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        })
        /******/
      }
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"]
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, "a", getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = "" // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 2))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_0__

        /***/
      },
      /* 1 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3)

        /***/
      },
      /* 3 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true})
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_List__ = __webpack_require__(
          4
        )
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function")
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        /* global document */

        var GooglePlacesSuggest = (function(_React$Component) {
          _inherits(GooglePlacesSuggest, _React$Component)

          function GooglePlacesSuggest(props) {
            _classCallCheck(this, GooglePlacesSuggest)

            var _this = _possibleConstructorReturn(
              this,
              _React$Component.call(this)
            )

            _this.hasFocus = false

            _this.state = {
              focusedPredictionIndex: 0,
              predictions: [],
              open:
                !!props.autocompletionRequest &&
                props.autocompletionRequest.input,
            }

            _this.handleKeyDown = _this.handleKeyDown.bind(_this)
            _this.onFocusChange = _this.onFocusChange.bind(_this)
            _this.handleDOMClick = _this.handleDOMClick.bind(_this)
            return _this
          }

          GooglePlacesSuggest.prototype.componentWillMount = function componentWillMount() {
            this.updatePredictions(this.props.autocompletionRequest)
            document.addEventListener("click", this.handleDOMClick)
          }

          GooglePlacesSuggest.prototype.componentWillUnmount = function componentWillUnmount() {
            document.removeEventListener("click", this.handleDOMClick)
          }

          GooglePlacesSuggest.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps
          ) {
            if (
              this.props.autocompletionRequest !==
                nextProps.autocompletionRequest &&
              nextProps.autocompletionRequest
            ) {
              this.updatePredictions(nextProps.autocompletionRequest)
            }
          }

          GooglePlacesSuggest.prototype.handleSelectPrediction = function handleSelectPrediction(
            suggest
          ) {
            var _this2 = this

            var onSelectSuggest = this.props.onSelectSuggest

            this.setState(
              {
                open: false,
                predictions: [],
              },
              function() {
                _this2.hasFocus = false
                _this2.geocodePrediction(suggest.description, function(result) {
                  onSelectSuggest(result, suggest)
                })
              }
            )
          }

          GooglePlacesSuggest.prototype.updatePredictions = function updatePredictions(
            autocompletionRequest
          ) {
            var _this3 = this

            var googleMaps = this.props.googleMaps

            var autocompleteService = new googleMaps.places.AutocompleteService()
            if (!autocompletionRequest || !autocompletionRequest.input) {
              this.setState(
                {
                  open: false,
                  predictions: [],
                },
                function() {
                  return (_this3.hasFocus = false)
                }
              )
              return
            }

            autocompleteService.getPlacePredictions(
              autocompletionRequest, // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
              function(predictions) {
                if (!predictions) {
                  _this3.setState({open: true, predictions: []})
                  return
                }
                _this3.setState({
                  focusedPredictionIndex: 0,
                  open: true,
                  predictions: predictions,
                })
              }
            )
          }

          GooglePlacesSuggest.prototype.geocodePrediction = function geocodePrediction(
            address,
            callback
          ) {
            var googleMaps = this.props.googleMaps

            var geocoder = new googleMaps.Geocoder()

            geocoder.geocode({address: address}, function(results, status) {
              if (status === googleMaps.GeocoderStatus.OK) {
                if (results.length > 0) {
                  callback(results[0])
                }
              } else {
                // eslint-disable-next-line
                console.error("Geocode error: " + status)
              }
            })
          }

          GooglePlacesSuggest.prototype.handleKeyDown = function handleKeyDown(
            e
          ) {
            var _state = this.state,
              focusedPredictionIndex = _state.focusedPredictionIndex,
              predictions = _state.predictions

            if (predictions.length > 0) {
              if (e.key === "Enter") {
                this.handleSelectPrediction(predictions[focusedPredictionIndex])
              } else if (e.key === "ArrowUp") {
                if (predictions.length > 0 && focusedPredictionIndex > 0) {
                  this.focusPrediction(focusedPredictionIndex - 1)
                }
              } else if (e.key === "ArrowDown") {
                if (
                  predictions.length > 0 &&
                  focusedPredictionIndex < predictions.length - 1
                ) {
                  this.focusPrediction(focusedPredictionIndex + 1)
                }
              }
            }
          }

          GooglePlacesSuggest.prototype.focusPrediction = function focusPrediction(
            index
          ) {
            this.setState({focusedPredictionIndex: index})
          }

          GooglePlacesSuggest.prototype.onFocusChange = function onFocusChange(
            val
          ) {
            this.hasFocus = val
          }

          GooglePlacesSuggest.prototype.handleDOMClick = function handleDOMClick() {
            if (!this.hasFocus && this.state.open) {
              this.setState({open: false})
            }
          }

          GooglePlacesSuggest.prototype.render = function render() {
            var _this4 = this

            var _state2 = this.state,
              focusedPredictionIndex = _state2.focusedPredictionIndex,
              open = _state2.open,
              predictions = _state2.predictions
            var _props = this.props,
              children = _props.children,
              customContainerRender = _props.customContainerRender,
              customRender = _props.customRender,
              textNoResults = _props.textNoResults

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                onKeyDown: this.handleKeyDown,
                className: "react-google-places-suggest",
              },
              children,
              open &&
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_List__[
                    "a" /* default */
                  ],
                  {
                    items: predictions,
                    activeItemIndex: focusedPredictionIndex,
                    customContainerRender: customContainerRender,
                    customRender: customRender,
                    onSelect: function onSelect(suggest) {
                      return _this4.handleSelectPrediction(suggest)
                    },
                    textNoResults: textNoResults,
                    onFocusChange: this.onFocusChange,
                  }
                )
            )
          }

          return GooglePlacesSuggest
        })(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)

        GooglePlacesSuggest.propTypes = {
          children:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any.isRequired,
          googleMaps:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
              .isRequired,
          onSelectSuggest:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          customContainerRender:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          customRender: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          autocompletionRequest: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape(
            {
              input:
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
                  .isRequired,
            }
          ).isRequired,
          textNoResults:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        }

        GooglePlacesSuggest.defaultProps = {
          onSelectSuggest: function onSelectSuggest() {},
          textNoResults: "No results",
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = GooglePlacesSuggest

        /***/
      },
      /* 4 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListItem__ = __webpack_require__(
          5
        )
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function")
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        var List = (function(_React$Component) {
          _inherits(List, _React$Component)

          function List(props) {
            _classCallCheck(this, List)

            var _this = _possibleConstructorReturn(
              this,
              _React$Component.call(this, props)
            )

            _this.handleMouseEnter = _this.handleMouseEnter.bind(_this)
            _this.handleMouseLeave = _this.handleMouseLeave.bind(_this)
            return _this
          }

          List.prototype.renderDefault = function renderDefault() {
            var _props = this.props,
              customRender = _props.customRender,
              items = _props.items,
              activeItemIndex = _props.activeItemIndex,
              onSelect = _props.onSelect,
              textNoResults = _props.textNoResults

            if (items.length > 0) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  className: "react-google-places-suggest-list",
                },
                items.map(function(item, index) {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__ListItem__["a" /* default */],
                    {
                      key: index,
                      active: activeItemIndex === index,
                      customRender: customRender,
                      onClick: function onClick(item) {
                        return onSelect(item)
                      },
                      item: item,
                    }
                  )
                })
              )
            }

            if (textNoResults || customRender) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  className: "react-google-places-suggest-list",
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__ListItem__["a" /* default */],
                  {customRender: customRender, textNoResults: textNoResults}
                )
              )
            }

            return null
          }

          List.prototype.handleMouseEnter = function handleMouseEnter() {
            var onFocusChange = this.props.onFocusChange

            if (onFocusChange) {
              onFocusChange(true)
            }
          }

          List.prototype.handleMouseLeave = function handleMouseLeave() {
            var onFocusChange = this.props.onFocusChange

            if (onFocusChange) {
              onFocusChange(false)
            }
          }

          List.prototype.render = function render() {
            var _props2 = this.props,
              customContainerRender = _props2.customContainerRender,
              items = _props2.items

            return customContainerRender
              ? customContainerRender(items)
              : this.renderDefault(items)
          }

          return List
        })(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)

        List.propTypes = {
          activeItemIndex:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
          items: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
              description:
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              matched_substrings: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
                  length:
                    __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                      .isRequired,
                  offset:
                    __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                      .isRequired,
                })
              ),
            })
          ),
          children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType(
            [
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(
                  __WEBPACK_IMPORTED_MODULE_2__ListItem__["a" /* default */]
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(
                __WEBPACK_IMPORTED_MODULE_2__ListItem__["a" /* default */]
              ),
            ]
          ),
          onSelect: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          onFocusChange:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          customContainerRender:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          customRender: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          textNoResults:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        }

        List.defaultProps = {
          items: [],
        }

        /* harmony default export */ __webpack_exports__["a"] = List

        /***/
      },
      /* 5 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Prediction__ = __webpack_require__(
          6
        )
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function")
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        var ListItem = (function(_React$Component) {
          _inherits(ListItem, _React$Component)

          function ListItem() {
            _classCallCheck(this, ListItem)

            return _possibleConstructorReturn(
              this,
              _React$Component.apply(this, arguments)
            )
          }

          ListItem.prototype.renderDefault = function renderDefault(item) {
            var textNoResults = this.props.textNoResults

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {className: "react-google-places-suggest-list-item"},
              item
                ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__Prediction__[
                      "a" /* default */
                    ],
                    {item: item}
                  )
                : textNoResults
            )
          }

          ListItem.prototype.renderItem = function renderItem(item) {
            var customRender = this.props.customRender

            return customRender ? customRender(item) : this.renderDefault(item)
          }

          ListItem.prototype.render = function render() {
            var _props = this.props,
              active = _props.active,
              item = _props.item,
              onClick = _props.onClick

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                onClick:
                  item &&
                  function() {
                    return onClick(item)
                  },
                className:
                  "react-google-places-suggest-list-item-container " +
                  (item
                    ? "react-google-places-suggest-list-item-container-clickable"
                    : "") +
                  " " +
                  (active
                    ? "react-google-places-suggest-list-item-container-active"
                    : ""),
              },
              this.renderItem(item)
            )
          }

          return ListItem
        })(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)

        ListItem.propTypes = {
          active: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
          onClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          item: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
            description:
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            matched_substrings: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
                length:
                  __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                    .isRequired,
                offset:
                  __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                    .isRequired,
              })
            ),
          }),
          customRender: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
          textNoResults:
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        }

        ListItem.defaultProps = {
          active: false,
        }

        /* harmony default export */ __webpack_exports__["a"] = ListItem

        /***/
      },
      /* 6 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict"
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
          1
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_react__
        )

        var Prediction = function Prediction(_ref) {
          var item = _ref.item
          var description = item.description,
            matched_substrings = item.matched_substrings

          var firstMatchedString =
            matched_substrings &&
            matched_substrings.length > 0 &&
            matched_substrings.shift()
          var labelParts = null

          if (firstMatchedString) {
            labelParts = {
              before: description.substr(0, firstMatchedString.offset),
              match: description.substr(
                firstMatchedString.offset,
                firstMatchedString.length
              ),
              after: description.substr(
                firstMatchedString.offset + firstMatchedString.length
              ),
            }
          }

          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {className: "react-google-places-suggest-prediction"},
            labelParts
              ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "span",
                  null,
                  labelParts.before,
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "span",
                    {className: "react-google-places-suggest-prediction-match"},
                    labelParts.match
                  ),
                  labelParts.after
                )
              : description
          )
        }

        Prediction.propTypes = {
          item: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
            description:
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            matched_substrings: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(
              __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
                length:
                  __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                    .isRequired,
                offset:
                  __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
                    .isRequired,
              })
            ),
          }).isRequired,
        }

        /* harmony default export */ __webpack_exports__["a"] = Prediction

        /***/
      },
      /******/
    ]
  )
})
