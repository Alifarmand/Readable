import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

class ModalGeneral extends Component {
  render () {
    //These props come from App.js
    const {open, closeModal } = this.props
    return (
      <Modal open={open} onClose={closeModal} little >
        <div>
          <h2 >Simple centered modal</h2 >
          <p>lalalalala</p>
        </div>
      </Modal >
    )
  }
}

export default ModalGeneral