import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

const Notification = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        <CButton onClick={() => setVisible(!visible)}>
            Vertically centered modal
        </CButton>
        <CModal alignment="center" visible={visible}>
            <CModalHeader onDismiss={() => setVisible(false)}>
            <CModalTitle>Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
            </CModalBody>
            <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
            </CModalFooter>
        </CModal>
        </>
    )
}

export default Notification;
