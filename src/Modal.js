import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      error: false
    };
  }

  componentDidMount() {
    document.addEventListener("keypress", this._onKeyPress);
  }

  componentDidUpdate(prevProps) {
    !prevProps.active && this.props.active && this.urlInput.focus();
  }

  _onKeyPress = e => {
    e.code === "Enter" && this.props.active && this.handleSubmit();
  };

  determineHost = url => {
    const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const vmRegExp = /(vimeo(?:cdn|pro)?)\.com\/(?:(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+|staff\/frame)\/)?videos?)\/)?(\d+)(?:_(\d+)(?:x(\d+))?)?(\.\w+)?/i;
    const youTube = url.match(ytRegExp);
    const vimeo = url.match(vmRegExp);

    if (youTube && youTube[2].length == 11)
      return { type: "youtube", id: youTube[2] };
    else if (vimeo && vimeo[2]) return { type: "vimeo", id: vimeo[2] };
    else return undefined;
  };

  handleSubmit = e => {
    const { url } = this.state;

    const embedData = this.determineHost(url);

    if (embedData) {
      this.props.onSubmit(embedData);
      this.setState({ url: "", error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { active, onCancel } = this.props;
    const { url, error } = this.state;

    if (!active) return null;
    return (
      <div
        className={`megadraft-video-embed-plugin__modal ${
          error ? "megadraft-video-embed-plugin__modal--error" : ""
        }`}
      >
        <input
          ref={input => {
            this.urlInput = input;
          }}
          type="text"
          value={url}
          onChange={e => this.setState({ url: e.target.value })}
        />
        {error && (
          <p className="megadraft-video-embed-plugin__error-msg">
            Please enter a valid YouTube video url
          </p>
        )}
        <div className="megadraft-video-embed-plugin__modal--btn-cont">
          <button
            className="megadraft-video-embed-plugin__button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            className="megadraft-video-embed-plugin__button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
