/*
 * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
 *
 * License: MIT
 */

import React, { Component } from "react";

import { MegadraftPlugin, MegadraftIcons } from "megadraft";

const { BlockContent } = MegadraftPlugin;

export default class Block extends Component {
  constructor(props) {
    super(props);

    this.actions = [
      { key: "edit", icon: MegadraftIcons.EditIcon, action: this._handleEdit },
      {
        key: "delete",
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove
      }
    ];
  }

  _handleEdit = () => {
    alert(JSON.stringify(this.props.data, null, 4));
  };

  _handleCaptionChange = event => {
    this.props.container.updateData({ caption: event.target.value });
  };

  renderVideo = () => {
    const { type, id } = this.props.data.embedData;
    switch (type) {
      case "youtube":
        return (
          <iframe
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            }}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
        break;
      case "vimeo":
        return (
          <iframe
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            }}
            src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0&badge=0`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        );
        break;
      default:
        return <div />;
    }
  };

  render() {
    return (
      <BlockContent>
        <div
          style={{
            paddingBottom: "56.25%",
            paddingTop: 30,
            height: 0,
            overflow: "hidden",
            position: "relative"
          }}
        >
          {this.renderVideo()}
        </div>
      </BlockContent>
    );
  }
}
