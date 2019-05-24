"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._onKeyPress = function (e) {
      e.code === "Enter" && _this.props.active && _this.handleSubmit();
    };

    _this.determineHost = function (url) {
      var ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var vmRegExp = /(vimeo(?:cdn|pro)?)\.com\/(?:(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+|staff\/frame)\/)?videos?)\/)?(\d+)(?:_(\d+)(?:x(\d+))?)?(\.\w+)?/i;
      var youTube = url.match(ytRegExp);
      var vimeo = url.match(vmRegExp);

      if (youTube && youTube[2].length == 11) return { type: "youtube", id: youTube[2] };else if (vimeo && vimeo[2]) return { type: "vimeo", id: vimeo[2] };else return undefined;
    };

    _this.handleSubmit = function (e) {
      var url = _this.state.url;


      var embedData = _this.determineHost(url);

      if (embedData) {
        _this.props.onSubmit(embedData);
        _this.setState({ url: "", error: false });
      } else {
        _this.setState({ error: true });
      }
    };

    _this.state = {
      url: "",
      error: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keypress", this._onKeyPress);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      !prevProps.active && this.props.active && this.urlInput.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keypress", this._onKeyPress);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          onCancel = _props.onCancel;
      var _state = this.state,
          url = _state.url,
          error = _state.error;


      if (!active) return null;
      return _react2.default.createElement(
        "div",
        {
          className: "megadraft-video-embed-plugin__modal " + (error ? "megadraft-video-embed-plugin__modal--error" : "")
        },
        _react2.default.createElement("input", {
          ref: function ref(input) {
            _this2.urlInput = input;
          },
          type: "text",
          value: url,
          onChange: function onChange(e) {
            return _this2.setState({ url: e.target.value });
          }
        }),
        error && _react2.default.createElement(
          "p",
          { className: "megadraft-video-embed-plugin__error-msg" },
          "Please enter a valid YouTube video url"
        ),
        _react2.default.createElement(
          "div",
          { className: "megadraft-video-embed-plugin__modal--btn-cont" },
          _react2.default.createElement(
            "button",
            {
              className: "megadraft-video-embed-plugin__button",
              onClick: this.handleSubmit
            },
            "Submit"
          ),
          _react2.default.createElement(
            "button",
            {
              className: "megadraft-video-embed-plugin__button",
              onClick: onCancel
            },
            "Cancel"
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;