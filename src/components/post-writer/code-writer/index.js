import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class CodeWriter extends Component {
  constructor() {
    super();
    this.state = {
      editionMode: true,
      code: ''
    };
  }

  saveCode() {
    const { code } = this.state;

    if (code.length !== 0) {
      this.setState({ editionMode: false });
    }
  }

  editCode() {
    this.setState({ editionMode: true });
  }

  handleCodeChange(event) {
    this.setState({ code: event.target.value });
  }

  render() {
    const { code, editionMode } = this.state;
    const { className } = this.props;

    return (
      <div className={`code-writer ${className}`}>
        {editionMode && (
          <textarea
            className='code-writer-textarea'
            onChange={event => this.handleCodeChange(event)}
            value={code}
          />
        )}
        {!editionMode && <kbd className='code-writer-code'>{code}</kbd>}

        {editionMode && (
          <div className='code-writer-buttons-row'>
            <button
              className='buttons-save'
              type='button'
              onClick={() => this.saveCode()}
            >
              Salvar
            </button>
          </div>
        )}
        {!editionMode && (
          <div className='buttons-row'>
            <button
              className='buttons-edit'
              type='button'
              onClick={() => this.editCode()}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    );
  }
}

CodeWriter.propTypes = {
  className: PropTypes.string
};

CodeWriter.defaultProps = {
  className: ''
};

export default CodeWriter;
