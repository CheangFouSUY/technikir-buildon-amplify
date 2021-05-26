import { useState, useReducer, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {listAccounts as ListAccounts } from '../graphql/queries';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CInputCheckbox,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// create initial state
const initialState = {
  source_id: '',
  source_firstname: '',
  source_lastname: '',
  source_phone: '',
  source_address: '',
  beneficiary_id: '',
  beneficiary_firstname: '',
  beneficiary_lastname: '',
  beneficiary_address: '',
  currency: '',
  amount: '',
  date: '',
  purpose_of_transfer: '',
  branch_name: '',
  customer_verified_by: '',
  register_number: '',
  approval: '',
  checked_by: '',
  uploaded_by: '',
  teller_name: '',
  accounts: []
}


// create reducer to update state
function reducer (state, action) {  
    switch(action.type) {
      case "SET_TRANSACTIONS":
        return { ...state, transactions: action.transactions }
      case "SET_ACCOUNTS":
        return { ...state, accounts: action.accounts }
      case "SET_INPUT":
        return {...state, [action.key]: action.value };
      case "CLEAR_INPUT":
        return { ...initialState, transactions: state.transactions };
      case "ADD_TRANSACTION":
        return { ...state, transactions: [...state.transactions, action.transaction]};
      default:
        return state;
    }
}  

const WithinForm = (props) => {
    const transactionDetail = props.locatoin.state || {};
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const accountData = await API.graphql(graphqlOperation(ListAccounts));
            console.log("data from API: ", accountData);
            dispatch( { type: 'SET_ACCOUNTS', accounts: accountData.data.listAccounts.items});
        } catch (err) {
            console.log("error fetching data...", err);
        }
    }

    function checkID(id) {
        return state.accounts.findIndex(e => e.acc_num == id);
    }

    return (
        <>
        <CRow>

        <CCol>
            <CCard>
                <CCardHeader>
                <h3>Payment Instruction Within Bank Form</h3>
                </CCardHeader>
                <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <h4>APPLICANT DETAILS:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_id">Source ID</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.source_id} type="number" id="source_id" name="source_id" placeholder="ID" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_firstname">Source First Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={checkID(transactionDetail.source_id) === -1 ? "" : state.accounts[checkID(transactionDetail.source_id)].first_name} type="text" id="source_firstname" name="source_firstname" placeholder="First Name" disabled/>
                    </CCol>
                    {console.log(state.accounts[checkID(transactionDetail.source_id)])}
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_lastname">Source Last Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={checkID(transactionDetail.source_id) === -1 ? "" : state.accounts[checkID(transactionDetail.source_id)].last_name} type="text" id="source_lastname" name="source_lastname" placeholder="Last Name" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_phone">Source Phone Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={checkID(transactionDetail.source_id) === -1 ? "" : state.accounts[checkID(transactionDetail.source_id)].phone_number} type="tel" id="source_phone" name="source_phone" placeholder="Phone Number" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_address">Source Address</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={checkID(transactionDetail.source_id) === -1 ? "" : state.accounts[checkID(transactionDetail.source_id)].address} type="text" id="source_address" name="source_address" placeholder="Address" disabled/>
                    </CCol>
                    </CFormGroup>
                    <h4>BENEFICIARY DETAIL:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="beneficiary_id">Beneficiary ID</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.beneficiary_id} type="number" id="beneficiary_id" name="beneficiary_id" placeholder="ID" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="beneficiary_firstname">Beneficiary First Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.beneficiary_firstname} type="text" id="beneficiary_firstname" name="beneficiary_firstname" placeholder="First Name" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="beneficiary_lastname">Beneficiary Last Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.beneficiary_lastname} type="text" id="beneficiary_lastname" name="beneficiary_lastname" placeholder="Last Name" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="beneficiary_address">Beneficiary Address</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.beneficiary_address} type="text" id="beneficiary_address" name="beneficiary_address" placeholder="Address" disabled/>
                    </CCol>
                    </CFormGroup>
                    <h4>CURRENCY AND AMOUNT OF TRANSFER:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="currency">Currency</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.currency} type="text" id="currency" name="currency" placeholder="Currency" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="amount">Amount</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.amount} type="number" id="amount" name="amount" placeholder="Amount" />
                    </CCol>
                    </CFormGroup>
                    <h4>PURPOSE OF TRANSFER: </h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="purpose_of_transfer">Purpose of Transfer</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.purpose_of_transfer} type="number" id="purpose_of_transfer" name="purpose_of_transfer" placeholder="Purpose of Transfer" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="date">Date</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.date} type="date" id="date" name="date" placeholder="date" />
                    </CCol>
                    </CFormGroup>
                    <h4>BANK USE ONLY:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="branch_name">Branch Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.branch_name} type="text" id="branch_name" name="branch_name" placeholder="Branch Name" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="register_number">Register Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.register_number} type="Number" id="register_number" name="register_number" placeholder="Register Number" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="approval">Approval</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.approval} type="text" id="approval" name="approval" placeholder="Approval" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="uploaded_by">Uploaded By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.uploaded_by} type="text" id="uploaded_by" name="uploaded_by" placeholder="Uploaded By" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="checked_by">Checked By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.checked_by} type="text" id="checked_by" name="checked_by" placeholder="Checked By" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="teller_name">Teller Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.teller_name} type="text" id="teller_name" name="teller_name" placeholder="Teller Name" />
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="customer_verified_by">Customer Verified By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.customer_verified_by} type="text" id="customer_verified_by" name="customer_verified_by" placeholder="Verified By" />
                    </CCol>
                    </CFormGroup>
                </CForm>
                </CCardBody>
                <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </CCardFooter>
            </CCard>
            </CCol>
        </CRow>
        </>
    );
};

export default WithinForm;
