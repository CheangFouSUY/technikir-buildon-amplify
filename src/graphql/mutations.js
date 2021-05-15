/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      source_info {
        account_id
        first_name
        last_name
      }
      destination_info {
        account_id
        first_name
        last_name
      }
      swift_code
      beneficiary_bank
      purpose_of_transfer
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
      source_info {
        account_id
        first_name
        last_name
      }
      destination_info {
        account_id
        first_name
        last_name
      }
      swift_code
      beneficiary_bank
      purpose_of_transfer
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
      source_info {
        account_id
        first_name
        last_name
      }
      destination_info {
        account_id
        first_name
        last_name
      }
      swift_code
      beneficiary_bank
      purpose_of_transfer
      createdAt
      updatedAt
    }
  }
`;
