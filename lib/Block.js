"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent;

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this._handleEdit = function () {
      alert(JSON.stringify(_this.props.data, null, 4));
    };

    _this._handleCaptionChange = function (event) {
      _this.props.container.updateData({ caption: event.target.value });
    };

    _this.renderVideo = function () {
      var _this$props$data$embe = _this.props.data.embedData,
          type = _this$props$data$embe.type,
          id = _this$props$data$embe.id;

      switch (type) {
        case "youtube":
          return _react2.default.createElement("iframe", {
            style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            },
            src: "https://www.youtube.com/embed/" + id,
            frameBorder: "0",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          });
          break;
        case "vimeo":
          return _react2.default.createElement("iframe", {
            style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            },
            src: "https://player.vimeo.com/video/" + id + "?color=ffffff&title=0&byline=0&portrait=0&badge=0",
            frameBorder: "0",
            allow: "autoplay; fullscreen",
            allowFullScreen: true
          });
          break;
        default:
          return _react2.default.createElement("div", null);
      }
    };

    _this.actions = [{ key: "edit", icon: _megadraft.MegadraftIcons.EditIcon, action: _this._handleEdit }, {
      key: "delete",
      icon: _megadraft.MegadraftIcons.DeleteIcon,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        BlockContent,
        null,
        _react2.default.createElement(
          "div",
          {
            style: {
              paddingBottom: "56.25%",
              paddingTop: 30,
              height: 0,
              overflow: "hidden",
              position: "relative"
            }
          },
          this.renderVideo()
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;