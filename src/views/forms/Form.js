import { useState, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createTransaction as CreateTransaction  } from '../../graphql/mutations';
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
  type: '',
  currency: '',
  amount: '',
  swift_code: '',
  beneficiary_bank: '',
  purpose_of_transfer: '',
  sourceaccountID: '',
  transactiontypeID: '',
  transactions: []
};

// create reducer to update state
function reducer (state, action) {  
  switch(action.type) {
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.transactions }
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
  const [collapsed, setCollapsed] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  async function createTransaction() {
    const { type, currency, amount, swift_code, beneficiary_bank, purpose_of_transfer, sourceaccountID } = state;

    if (currency === '' || amount === '' || swift_code === '' || beneficiary_bank === '' ) return 
  
    const transaction = { type: "none", currency, amount, swift_code, beneficiary_bank, purpose_of_transfer: "none", sourceaccountID, transactiontypeID: TRANSACTION_ID, id: CLIENT_ID };
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_id">Source ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.sourceaccountID} type="number" id="source_id" name="sourceaccountID" placeholder="ID" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="source_name">Source Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="text" id="source_name" name="source_name" placeholder="Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_id">Beneficiary ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="number" id="beneficiary_id" name="beneficiary_id" placeholder="ID" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_name">Beneficiary Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="text" id="beneficiary_name" name="beneficiary_name" placeholder="Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="beneficiary_bank">Beneficiary Bank</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.beneficiary_bank} type="text" id="beneficiary_bank" name="beneficiary_bank" placeholder="Bank" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="swift-code">SWIFT Code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value={state.swift_code} type="text" id="swift-code" name="swift_code" placeholder="Code" />
                  </CCol>
                </CFormGroup>
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="branch-name">Branch Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput onChange={onChange} value="" type="text" id="branch-name" name="branch-name" placeholder="Branch Name" />
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
                  <CCol md="3">
                    <CLabel>Payment Method</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="within-bank" name="payment-method" value="within-bank" />
                      <CLabel variant="custom-checkbox" htmlFor="within-bank">Within Bank</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="cross-bank" name="payment-method" value="cross-bank" />
                      <CLabel variant="custom-checkbox" htmlFor="cross-bank">Cross Bank</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="cross-country" name="payment-method" value="cross-country" />
                      <CLabel variant="custom-checkbox" htmlFor="cross-country">Cross Country</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
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
