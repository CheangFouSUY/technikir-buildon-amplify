import React from 'react'
import {
  CButton,
  CCol,
  CRow
} from '@coreui/react'

import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
   
  return (
    <>
          <CRow className="align-items-center">
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton onClick={ () => { history.push('/base/forms')}} block color="info" size = "lg">Within Bank</CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton onClick={ () => { history.push('/base/forms')}} block color="info" size = "lg">Cross Bank</CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton onClick={ () => { history.push('/base/forms')}} block color="info" size = "lg">Cross Country</CButton>
            </CCol>
          </CRow>
    </>
  )
};
