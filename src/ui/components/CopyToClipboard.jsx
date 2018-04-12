import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import { observer, inject } from 'mobx-react';
import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard';

const styles = theme => ({});

@withStyles(styles)
@inject('rootStore')
@observer
class CopyToClipboard extends Component {
  state = { snackbarOpen: false };

  render() {
    const { children, text } = this.props;
    return (
      <ReactCopyToClipboard text={text} onCopy={this.onCopy}>
        {children}
      </ReactCopyToClipboard>
    );
  }

  onCopy = () => {
    this.props.rootStore.uiState.showSnackbar({
      message: 'Copied to Clipboard',
      duration: 2000,
      position: 'bottom'
    });
  };
}

export default CopyToClipboard;
