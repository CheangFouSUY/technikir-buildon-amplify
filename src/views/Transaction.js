import { useState, useReducer, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {listAccounts as ListAccounts } from '../graphql/queries';
import { updateTransaction as UpdateTransaction, deleteTransaction as DeleteTransaction } from '../graphql/mutations';
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
    id: '',
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
    _version: '',
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
    const transactionDetail = props.location.state || {};
    const [state, dispatch] = useReducer(reducer, initialState);
    let beneficiary_bank_type = "display: none !important";
    let swift_code_type = "display: none !important";
    if ( transactionDetail.type === "Cross Country" ){
        beneficiary_bank_type = "";
        swift_code_type = "";
    }else if (transactionDetail.type === "Cross Bank")
        beneficiary_bank_type = "";

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const accountData = await API.graphql(graphqlOperation(ListAccounts));
            // console.log("data from API: ", accountData);
            dispatch( { type: 'SET_ACCOUNTS', accounts: accountData.data.listAccounts.items});
        } catch (err) {
            console.log("error fetching data...", err);
        }
    }

    function checkID(id) {
        return state.accounts.findIndex(e => e.acc_num == id);
    }
 
    async function handleAuthorize(e) {
        const { id, progress, _version } = transactionDetail;
        const transaction = { id, progress, _version };
        if (e.target.name === "authorize") transaction.progress = "Authorized";
        else if (e.target.name === "reject") transaction.progress = "Rejected";

        try {
            await API.graphql(graphqlOperation(UpdateTransaction, { input: { id: transaction.id, progress: transaction.progress, _version: transaction._version }}));
            console.log("item updated! Transaction", transaction);
        } catch (err) {
            console.log("error updating transaction...", err);
        }
    }
    

    return (
        <>
        <CRow>
        {console.log(transactionDetail)}
        <CCol>
            <CCard>
                <CCardHeader>
                <h3>Payment Instruction {transactionDetail.type} Form</h3>
                </CCardHeader>
                <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <h4>APPLICANT DETAILS:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_id">Source ID</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.source_id} type="number" id="source_id" name="source_id" placeholder="ID" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="source_firstname">Source First Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={checkID(transactionDetail.source_id) === -1 ? "" : state.accounts[checkID(transactionDetail.source_id)].first_name} type="text" id="source_firstname" name="source_firstname" placeholder="First Name" disabled/>
                    </CCol>
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
                        <CInput value={transactionDetail.beneficiary_id} type="number" id="beneficiary_id" name="beneficiary_id" placeholder="ID" disabled/>
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
                    {console.log("transaction detail",transactionDetail)}
                    {() => {
                        if (transactionDetail.type == "Cross Bank" || transactionDetail.type == "Cross Country"){
                            return(
                                <CFormGroup row>
                                <CCol md="3" >
                                    <CLabel htmlFor="beneficiary_bank">Beneficiary Bank</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput value={transactionDetail.beneficiary_bank} type="text" id="beneficiary_bank" name="beneficiary_bank" placeholder="Beneficiary Bank" disabled/>
                                </CCol>
                                </CFormGroup>

                            );
                        }
                    }}
                    {() => {
                        if (transactionDetail.type == "Cross Country"){
                            <CFormGroup row>
                            <CCol md="3" >
                                <CLabel htmlFor="swift_code">SWIFT Code</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput value={transactionDetail.swift_code} type="text" id="swift_code" name="swift_code" placeholder="Swift Code" disabled/>
                            </CCol>
                            </CFormGroup>
                        }
                    }}
                    <h4>CURRENCY AND AMOUNT OF TRANSFER:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="currency">Currency</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.currency} type="text" id="currency" name="currency" placeholder="Currency" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="amount">Amount</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.amount} type="number" id="amount" name="amount" placeholder="Amount" disabled/>
                    </CCol>
                    </CFormGroup>
                    <h4>PURPOSE OF TRANSFER: </h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="purpose_of_transfer">Purpose of Transfer</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.purpose_of_transfer} type="text" id="purpose_of_transfer" name="purpose_of_transfer" placeholder="Purpose of Transfer" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="date">Date</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.date} type="date" id="date" name="date" placeholder="date" disabled/>
                    </CCol>
                    </CFormGroup>
                    <h4>BANK USE ONLY:</h4>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="branch_name">Branch Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.branch_name} type="text" id="branch_name" name="branch_name" placeholder="Branch Name" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="register_number">Register Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.register_number} type="Number" id="register_number" name="register_number" placeholder="Register Number" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="approval">Approval</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.approval} type="text" id="approval" name="approval" placeholder="Approval" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="uploaded_by">Uploaded By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.uploaded_by} type="text" id="uploaded_by" name="uploaded_by" placeholder="Uploaded By" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="checked_by">Checked By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.checked_by} type="text" id="checked_by" name="checked_by" placeholder="Checked By" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="teller_name">Teller Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.teller_name} type="text" id="teller_name" name="teller_name" placeholder="Teller Name" disabled/>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="customer_verified_by">Customer Verified By</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CInput value={transactionDetail.customer_verified_by} type="text" id="customer_verified_by" name="customer_verified_by" placeholder="Verified By" disabled/>
                    </CCol>
                    </CFormGroup>
                </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton  onClick={handleAuthorize} name="authorize" type="submit" md="9" size="sm" color="primary"><CIcon name="cil-scrubber" /> Authorize </CButton>
                    <CButton onClick={handleAuthorize} name="reject" type="submit" md="9" size="sm" color="danger"><CIcon name="cil-scrubber" /> Reject </CButton>
                {/* {() => {
                    console.log("progress:",transactionDetail.progress)
                    if (transactionDetail.progress == "Pending") {
                        <CButton  onClick={handleAuthorize} name="authorize" type="submit" md="9" size="sm" color="primary"><CIcon name="cil-scrubber" /> Authorize </CButton>
                    }else {
                        <CButton name="authorize" type="submit" md="9" size="sm" color="primary"><CIcon name="cil-scrubber" /> Print </CButton>
                    }
                }}
                {() => {
                    if (transactionDetail.progress == "Pending") 
                        <CButton onClick={handleAuthorize} name="reject" type="submit" md="9" size="sm" color="danger"><CIcon name="cil-scrubber" /> Reject </CButton>
                }} */}
                </CCardFooter>    
            </CCard>
            </CCol>
        </CRow>
        </>
    );
};

export default WithinForm;
