/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      balance
      address
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      balance
      address
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      balance
      address
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      type
      currency
      amount
      swift_code
      beneficiary_bank
      purpose_of_transfer
      date
      branch_name
      customer_verified_by
      register_number
      approval
      checked_by
      uploaded_by
      teller_name
      source_id
      beneficiary_id
      progress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      type
      currency
      amount
      swift_code
      beneficiary_bank
      purpose_of_transfer
      date
      branch_name
      customer_verified_by
      register_number
      approval
      checked_by
      uploaded_by
      teller_name
      source_id
      beneficiary_id
      progress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      type
      currency
      amount
      swift_code
      beneficiary_bank
      purpose_of_transfer
      date
      branch_name
      customer_verified_by
      register_number
      approval
      checked_by
      uploaded_by
      teller_name
      source_id
      beneficiary_id
      progress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
