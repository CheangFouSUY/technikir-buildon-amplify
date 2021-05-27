import { useState, useReducer, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createTransaction as CreateTransaction  } from '../../graphql/mutations';
import { listTransactions as ListTransaction, listAccounts as ListAccounts } from '../../graphql/queries';
import { onCreateTransaction as OnCreateTransaction } from '../../graphql/subscriptions'; 
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
import FileBase64 from 'react-file-base64';
import { func } from 'prop-types';



const CLIENT_ID = uuidv4();


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
  transactions: [],
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


const WithinForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // component did mount
  useEffect(() => {
    getData()
    const subscription = API.graphql(graphqlOperation(OnCreateTransaction)).subscribe({
      next: (eventData) => {
        const transaction = eventData.value.data.onCreateTransaction;
        if (transaction.id === CLIENT_ID) return
        dispatch({ type: "ADD_TRANSACTION", transaction});
      }
    })
    return () => subscription.unsubscribe();
  }, []);


  async function testing(){
    this.setState({approval: 'laskdjakl'})
  }

  // get the data of accounts
  async function getData() {
    try {
      const accountData = await API.graphql(graphqlOperation(ListAccounts));
      console.log("data from API: ", accountData);
      dispatch({ type: 'SET_ACCOUNTS', accounts: accountData.data.listAccounts.items});
    } catch (err) {
      console.log("error fetching data...", err);
    }
  }
  async function createTransaction() {
    const {  source_id, beneficiary_id, currency, amount, date, branch_name, register_number, approval, checked_by, uploaded_by, teller_name,  beneficiary_firstname, beneficiary_lastname, beneficiary_address } = state;

    if (source_id === '' || beneficiary_id === '' || currency === '' || amount === '' || date === '' || branch_name === '' || register_number === '' || approval === '' || checked_by === '' || uploaded_by === '' || teller_name === '' ) return 
    const transaction = { id: CLIENT_ID, type: "Within Bank", swift_code: "None", beneficiary_bank: "JTrust", progress: "Pending", purpose_of_transfer: "Others", customer_verified_by: "Others", source_id, beneficiary_id, currency, amount, date, branch_name, register_number, approval, checked_by, uploaded_by, teller_name, beneficiary_firstname, beneficiary_lastname, beneficiary_address}
    const transactions = [ ...state.transactions, transaction ];
    dispatch({ type: "SET_TRANSACTIONS", transactions });
    dispatch({ type: "CLEAR_INPUT" });
    console.log("in createTransaction function:", transactions);

    try {
      await API.graphql(graphqlOperation(CreateTransaction, { input: transaction}));
      console.log("item created! Transactions", transactions);
      console.log("item created! Transaction", transaction);
    } catch (err) {
      console.log("error creating transaction...", err);
    }
  }

  function onChange(e) {
    dispatch({ type: "SET_INPUT", key: e.target.name, value: e.target.value });
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
                    <CInput onChange={onChange} value={state.source_id} type="number" id="source_id" name="source_id" placeholder="ID" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_firstname">Source First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput value={checkID(state.source_id) === -1 ? "" : state.accounts[checkID(state.source_id)].first_name} type="text" id="source_firstname" name="source_firstname" placeholder="First Name" disabled/>
                  </CCol>
                  {console.log(state.accounts[checkID(state.source_id)])}
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_lastname">Source Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput value={checkID(state.source_id) === -1 ? "" : state.accounts[checkID(state.source_id)].last_name} type="text" id="source_lastname" name="source_lastname" placeholder="Last Name" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_phone">Source Phone Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput value={checkID(state.source_id) === -1 ? "" : state.accounts[checkID(state.source_id)].phone_number} type="tel" id="source_phone" name="source_phone" placeholder="Phone Number" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_address">Source Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput value={checkID(state.source_id) === -1 ? "" : state.accounts[checkID(state.source_id)].address} type="text" id="source_address" name="source_address" placeholder="Address" disabled/>
                  </CCol>
                </CFormGroup>
                <h4>BENEFICIARY DETAIL:</h4>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_id">Beneficiary ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.beneficiary_id} type="number" id="beneficiary_id" name="beneficiary_id" placeholder="ID" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_firstname">Beneficiary First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={checkID(state.beneficiary_id) === -1 ? "" : state.accounts[checkID(state.beneficiary_id)].first_name} type="text" id="beneficiary_firstname" name="beneficiary_firstname" placeholder="First Name" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_lastname">Beneficiary Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={checkID(state.beneficiary_id) === -1 ? "" : state.accounts[checkID(state.beneficiary_id)].last_name} type="text" id="beneficiary_lastname" name="beneficiary_lastname" placeholder="Last Name" disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_address">Beneficiary Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onchange={onChange} value={checkID(state.beneficiary_id) === -1 ? "" : state.accounts[checkID(state.beneficiary_id)].address} type="text" id="beneficiary_address" name="beneficiary_address" placeholder="Address" disabled/>
                  </CCol>
                </CFormGroup>
                <h4>CURRENCY AND AMOUNT OF TRANSFER:</h4>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="currency">Currency</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.currency} type="text" id="currency" name="currency" placeholder="Currency" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="amount">Amount</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.amount} type="number" id="amount" name="amount" placeholder="Amount" />
                  </CCol>
                </CFormGroup>
                <h4>PURPOSE OF TRANSFER: </h4>
                <CFormGroup row>
                  <CCol md="3"><CLabel>Purpose of Transfer</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="purpose-relative" name="purpose-relative" value="send-to-relative" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="purpose-relative">Send to Relative</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="purpose-loan" name="purpose-loan" value="loan-payment" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="purpose-loan">Loan Payment</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="purpose-property" name="purpose-property" value="for-property" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="purpose-property">For Property</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="purpose-others" name="purpose-others" value="for-others" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="purpose-others">Others</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date">Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.data} type="date" id="date" name="date" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <h4>BANK USE ONLY:</h4>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="branch_name">Branch Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.branch_name} type="text" id="branch_name" name="branch_name" placeholder="Branch Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="register_number">Register Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.register_number} type="Number" id="register_number" name="register_number" placeholder="Register Number" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="approval">Approval</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.approval} type="text" id="approval" name="approval" placeholder="Approval" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="uploaded_by">Uploaded By</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.uploaded_by} type="text" id="uploaded_by" name="uploaded_by" placeholder="Uploaded By" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="checked_by">Checked By</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.checked_by} type="text" id="checked_by" name="checked_by" placeholder="Checked By" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="teller_name">Teller Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.teller_name} type="text" id="teller_name" name="teller_name" placeholder="Teller Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3"><CLabel>Customer Verified By</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="customer_signature" name="customer_signature" value="Signature" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="customer_signature">Signature</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="customer_others" name="customer_others" value="Others" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="customer_others">Others</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                  <CCol xs="12" md="9">
                    <FileBase64 multiple= {true}></FileBase64>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={ createTransaction} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton onClick={ () => this.testing() } type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default WithinForm;
