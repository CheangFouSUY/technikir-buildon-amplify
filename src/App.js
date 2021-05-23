
import { useEffect, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Greetings } from 'aws-amplify-react';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

// import uuid for creating unique ID
import { v4 as uuidv4 } from 'uuid';

// import mutation and query
import { createSourceAcc as CreateSourceAcc, createDestinationAcc as CreateDestinationAcc, createTransaction as CreateTransaction  } from './graphql/mutations';
import { listSourceAccs as ListSourceAccs, listDestinationAccs as ListDestinationAccs, listTransactions as ListTransactions, getDestinationAcc } from './graphql/queries';

// import the subscription
import { onCreateTransaction as OnCreateTransaction } from './graphql/subscriptions'; 

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // // component did mount
  // // subscribe in useEffect
  // useEffect(() => {
  //   getData()
  //   const subscription = API.graphql(graphqlOperation(OnCreateTransaction)).subscribe({
  //     next: (eventData) => {
  //       const transaction = eventData.value.data.onCreateTransaction;
  //       if (transaction.id === CLIENT_ID) return
  //       dispatch({ type: "ADD_TRANSACTION", transaction});
  //     }
  //   })
  //   return () => subscription.unsubscribe();
  // }, []);

  // async function getData() {
  //   try {
  //     const transactionData = await API.graphql(graphqlOperation(ListTransactions));
  //     console.log("data from API: ", transactionData);
  //     dispatch({ type: 'SET_TRANSACTIONS', transactions: transactionData.data.listTransactions.items});
  //   } catch (err) {
  //     console.log("error fetching data...", err);
  //   }
  // }

  // async function createTransaction() {
  //   const { type, currency, amount, swift_code, beneficiary_bank, purpose_of_transfer, sourceaccountID } = state;

  //   if (type === '' || currency === '' || amount === '' || swift_code === '' || beneficiary_bank === '' || purpose_of_transfer === '' || sourceaccountID === '') return 
  
  //   const transaction = { type, currency, amount, swift_code, beneficiary_bank, purpose_of_transfer, sourceaccountID, transactiontypeID: TRANSACTION_ID, id: CLIENT_ID };
  //   const transactions = [ ...state.transactions, transaction ];
  //   dispatch({ type: "SET_TRANSACTIONS", transactions });
  //   dispatch({ type: "CLEAR_INPUT" });
  //   console.log("in createTransaction function:", transactions);

  //   try {
  //     await API.graphql(graphqlOperation(CreateTransaction, { input: transaction}));
  //     console.log("item created! Transactions", transactions);
  //     console.log("item created! Transaction", transaction);
  //   } catch (err) {
  //     console.log("error creating transaction...", err);
  //   }
  // }

  // // change state then user types into input
  // function onChange(e) {
  //   dispatch({ type: "SET_INPUT", key: e.target.name, value: e.target.value });
  // }

    // add UI with event handlers to manage user input
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    )
}

export default App;
// export default withAuthenticator(App);