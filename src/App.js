// import the useState and useEffect hooks from React
import { useEffect, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

// import uuid for creating unique ID
import { v4 as uuidv4 } from 'uuid';

// import mutation and query
import { createSourceAcc as CreateSourceAcc, createDestinationAcc as CreateDestinationAcc, createTransaction as CreateTransaction  } from './graphql/mutations';
import { listSourceAccs as ListSourceAccs, listDestinationAccs as ListDestinationAccs, listTransactions as ListTransactions, getDestinationAcc } from './graphql/queries';

const CLIENT_ID = uuidv4();

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
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // component did mount
  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    try {
      const transactionData = await API.graphql(graphqlOperation(ListTransactions));
      console.log("data from API: ", transactionData);
      dispatch({ type: 'SET_TRANSACTIONS', transactions: transactionData.data.listTransactions.items});
    } catch (err) {
      console.log("error fetching data...", err);
    }
  }

  async function createTransaction() {
    const { type, currency, amount, swift_code, beneficiary_bank, purpose_of_transfer, sourceaccountID } = state;

    if (type === '' || currency === '' || amount === '' || swift_code === '' || beneficiary_bank === '' || purpose_of_transfer === '' || sourceaccountID === '') return 
  
    const transaction = { type, currency, amount, swift_code, beneficiary_bank, purpose_of_transfer, sourceaccountID, transactiontypeID: CLIENT_ID, id: CLIENT_ID };
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

    // add UI with event handlers to manage user input
    return (
      <div>
        <input 
          name = 'type'
          onChange = {onChange}
          value = {state.type}
          placeholder = 'type'
        /> <br/>
        <input 
          name = 'currency'
          onChange = {onChange}
          value = {state.currency}
          placeholder = 'currency'
        /> <br/>
        <input 
          name = 'amount'
          onChange = {onChange}
          value = {state.amount}
          placeholder = 'amount'
        /> <br/>
        <input 
          name = 'swift_code'
          onChange = {onChange}
          value = {state.swift_code}
          placeholder = 'swift_code'
        /> <br/>
        <input 
          name = 'beneficiary_bank'
          onChange = {onChange}
          value = {state.beneficiary_bank}
          placeholder = 'beneficiary_bank'
        /> <br/>
        <input 
          name = 'purpose_of_transfer'
          onChange = {onChange}
          value = {state.purpose_of_transfer}
          placeholder = 'purpose_of_transfer'
        /> <br/>
        <input 
          name = 'sourceaccountID'
          onChange = {onChange}
          value = {state.sourceaccountID}
          placeholder = 'sourceaccountID'
        /> <br/>
        <button onClick = { createTransaction } > Create Transaction </button>
        <div>
          {console.log("state:", state)}
          {
            state.transactions.map((transaction) => (
              <div key = {transaction.id}>
                <h1>TransactionID: {transaction.transactiontypeID}</h1>
                <h3>Type: {transaction.type}</h3>
                <h3>Currency: {transaction.currency}</h3>
                <h3>Amount: {transaction.amount}</h3>
                <h3>Swift Code: {transaction.swift_code}</h3>
                <h3>Beneficiary Bank: {transaction.beneficiary_bank}</h3>
                <h3>Purpose of Transfer: {transaction.purpose_of_transfer}</h3>
                <h3>Source Account ID: {transaction.sourceaccountID}</h3><br/>
              </div>
            ))
          }
        </div>
      </div>
    )
}

export default App;