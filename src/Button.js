/*
 * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
 *
 * License: MIT
 */

import React, { Component } from "react";

import Icon from "./icon.js";
import Modal from "./Modal.js";
import constants from "./constants";
import { insertDataBlock } from "megadraft";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };
  }

  onClick = e => {
    this.setState({ modalActive: true });
  };

  modalConfirm = embedData => {
    this.setState({ modalActive: false });

    const data = {
      type: constants.PLUGIN_TYPE,
      embedData
    };

    this.props.onChange(insertDataBlock(this.props.editorState, data));
  };

  render() {
    const { className } = this.props;
    const { modalActive } = this.state;

    return (
      <div>
        <button
          className={className}
          type="button"
          onClick={this.onClick}
          title={constants.PLUGIN_NAME}
        >
          <Icon className="sidemenu__button__icon" />
        </button>
        <Modal
          active={modalActive}
          onSubmit={this.modalConfirm}
          onCancel={() => this.setState({ modalActive: false })}
        />
      </div>
    );
  }
}
