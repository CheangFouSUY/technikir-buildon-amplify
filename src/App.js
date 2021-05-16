// import the useState and useEffect hooks from React
import { useState, useEffect } from 'react'

// import the API category from Amplify library
import { API } from 'aws-amplify'

// import the Auth component
import { Auth } from 'aws-amplify'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// import the GraphQL query (created by the CLI)
import { listTransactions } from './graphql/queries'

// import GraphQL mutation
import { createTransaction } from './graphql/mutations'

function App() {
  // define some state to hold the data returned from the API
  const [transactions, setTransactions] = useState([])

  // create form state
  const [formState, setFormState] = useState({ type: '', currency: '', amount: ''})


  useEffect(() => {
    // create and invoke a function to fetch the data from the API
    fetchTransactions()
    async function fetchTransactions() {
      try {
        const transactions = await API.graphql({
          query: listTransactions
        })
        console.log('pets:', transactions)
        setTransactions(transactions.data.listTransactions.items)
      } catch (err) {
        console.log('error fetching transaction...', err)
      }
    }
  }, [])

  function onChange(event) {
    setFormState({
      ...formState, [event.target.type] :event.target.amount
    })
  }


  // Class method to sign up a user
  // async function signUp() {
  //   const { username, password, email, phone_number } = formState
  //   try {
  //     await Auth.signUp({ username, password, attributes: { email, phone_number }})
  //   } catch (err) {
  //     console.log('error signing up user...', err)
  //   }
  // }
  
  // create a function that updates the API as well as the form state
  async function createTransactionMutation() {
    const { type, amount } = formState
    if (type === '') return
    let transaction = { type }
    if (amount !== '') {
      transaction = { ...transaction, amount }
    }
    const updatedTransactionArray = [...transactions, transaction]
    setTransactions(updatedTransactionArray)
    try {
      await API.graphql({
        query: createTransaction,
        variables: { input: transaction }
      })
      console.log('item created!')
    } catch (err) {
      console.log('error creating transaction...', err)
    }
  }




  return (
    <div className="App">
      <h1>My Bank App</h1>
      <input
        name='type'
        placeholder='type'
        onChange={onChange}
        value={formState.type}
      />
      <input
        name='amount'
        placeholder='amount'
        onChange={onChange}
        value={formState.amount}
      />
      <button onClick={createTransactionMutation}>Create Transaction</button>
      {
        transactions.map((transaction, index) => (
          <div key={index}>
            <h3>{transaction.type}</h3>
            <p>{transaction.amount}</p>
          </div>
        ))
      }
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default App

// export default withAuthenticator(App)