import React from 'react'
import {
  CButton,
  CCol,
  CRow
} from '@coreui/react'



const Buttons = () => {
  return (
    <>
          <CRow className="align-items-center">
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block color="info" size = "lg">Within Bank</CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block color="info" size = "lg">Cross Bank</CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block color="info" size = "lg">Cross Country</CButton>
            </CCol>
          </CRow>
    </>
  )
}

export default Buttons
