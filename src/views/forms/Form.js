import { useState, useReducer, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createTransaction as CreateTransaction  } from '../../graphql/mutations';
import { listTransactions as ListTransaction, listAccounts as ListAccount } from '../../graphql/queries';
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
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CLIENT_ID = uuidv4();
const TRANSACTION_ID = uuidv4();


// create initial state
const initialState = {
  source_id: '',
  source_name: '',
  source_phone: '',
  source_address: '',
  beneficiary_id: '',
  beneficiary_name: '',
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


const PaymentInstructionForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  // get the data of accounts
  async function getData() {
    try {
      const accountData = await API.graphql(graphqlOperation(ListAccount));
      console.log("data from API: ", accountData);
      dispatch({ type: 'SET_ACCOUNTS', accounts: accountData.data.listAccounts.items});
    } catch (err) {
      console.log("error fetching data...", err);
    }
  }
  
  async function createTransaction() {
    const {  source_id, beneficiary_id, currency, amount, date, purpose_of_transfer, branch_name, customer_verified_by, register_number, approval, checked_by, uploaded_by, teller_name } = state;

    if (source_id === '' || beneficiary_id === '' || currency === '' || amount === '' || date === '' || purpose_of_transfer === '' || branch_name === '' || customer_verified_by === '' || register_number === '' || approval === '' || checked_by === '' || uploaded_by === '' || teller_name  ) return 
    const transaction = { id: CLIENT_ID, type: "Within Bank", swift_code: "None", beneficiary_bank: "JTrust", source_id, beneficiary_id, currency, amount, date, purpose_of_transfer, branch_name, customer_verified_by, register_number, approval, checked_by, uploaded_by, teller_name}
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

  // change state then user types into input
  function onChange(e) {
    dispatch({ type: "SET_INPUT", key: e.target.name, value: e.target.value });
  }


  return (
    <>
      <CRow>

      <CCol>
          <CCard>
            <CCardHeader>
              <h3>Payment Instruction Form</h3>
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
                    <CLabel htmlFor="source_name">Source Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.source_name} type="text" id="source_name" name="source_name" placeholder="Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_phone">Source Phone Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.source_phone} type="tel" id="source_phone" name="source_phone" placeholder="Phone Number" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_address">Source Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.source_address} type="tel" id="source_address" name="source_address" placeholder="Address" />
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
                    <CLabel htmlFor="beneficiary_name">Beneficiary Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.beneficiary_name} type="text" id="beneficiary_name" name="beneficiary_name" placeholder="Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_address">Beneficiary Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.beneficiary_address} type="text" id="beneficiary_address" name="beneficiary_address" placeholder="Name" />
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
                <h4>PURPOSE OF TRANSFER</h4>
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
                    <CLabel htmlFor="branch_name">Branch Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="text" id="branch_name" name="branch_name" placeholder="Branch Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="approval">Approval</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="text" id="approval" name="approval" placeholder="Approval" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date">Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="date" id="date" name="date" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={ createTransaction } type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default PaymentInstructionForm;
