/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDestinationAcc = /* GraphQL */ `
  mutation CreateDestinationAcc(
    $input: CreateDestinationAccInput!
    $condition: ModelDestinationAccConditionInput
  ) {
    createDestinationAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
      }
    }
  }
`;
export const updateDestinationAcc = /* GraphQL */ `
  mutation UpdateDestinationAcc(
    $input: UpdateDestinationAccInput!
    $condition: ModelDestinationAccConditionInput
  ) {
    updateDestinationAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
      }
    }
  }
`;
export const deleteDestinationAcc = /* GraphQL */ `
  mutation DeleteDestinationAcc(
    $input: DeleteDestinationAccInput!
    $condition: ModelDestinationAccConditionInput
  ) {
    deleteDestinationAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
      }
    }
  }
`;
export const createTransactionType = /* GraphQL */ `
  mutation CreateTransactionType(
    $input: CreateTransactionTypeInput!
    $condition: ModelTransactionTypeConditionInput
  ) {
    createTransactionType(input: $input, condition: $condition) {
      id
      transac_type_id
      transac_type_name
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
    }
  }
`;
export const updateTransactionType = /* GraphQL */ `
  mutation UpdateTransactionType(
    $input: UpdateTransactionTypeInput!
    $condition: ModelTransactionTypeConditionInput
  ) {
    updateTransactionType(input: $input, condition: $condition) {
      id
      transac_type_id
      transac_type_name
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
    }
  }
`;
export const deleteTransactionType = /* GraphQL */ `
  mutation DeleteTransactionType(
    $input: DeleteTransactionTypeInput!
    $condition: ModelTransactionTypeConditionInput
  ) {
    deleteTransactionType(input: $input, condition: $condition) {
      id
      transac_type_id
      transac_type_name
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
    }
  }
`;
export const createSourceAcc = /* GraphQL */ `
  mutation CreateSourceAcc(
    $input: CreateSourceAccInput!
    $condition: ModelSourceAccConditionInput
  ) {
    createSourceAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
    }
  }
`;
export const updateSourceAcc = /* GraphQL */ `
  mutation UpdateSourceAcc(
    $input: UpdateSourceAccInput!
    $condition: ModelSourceAccConditionInput
  ) {
    updateSourceAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
    }
  }
`;
export const deleteSourceAcc = /* GraphQL */ `
  mutation DeleteSourceAcc(
    $input: DeleteSourceAccInput!
    $condition: ModelSourceAccConditionInput
  ) {
    deleteSourceAcc(input: $input, condition: $condition) {
      id
      first_name
      last_name
      acc_num
      createdAt
      updatedAt
      Transactions {
        nextToken
      }
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
      sourceaccountID
      transactiontypeID
      createdAt
      updatedAt
      destinationaccs {
        nextToken
      }
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
      sourceaccountID
      transactiontypeID
      createdAt
      updatedAt
      destinationaccs {
        nextToken
      }
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
      sourceaccountID
      transactiontypeID
      createdAt
      updatedAt
      destinationaccs {
        nextToken
      }
    }
  }
`;
export const createDestinationAccTransaction = /* GraphQL */ `
  mutation CreateDestinationAccTransaction(
    $input: CreateDestinationAccTransactionInput!
    $condition: ModelDestinationAccTransactionConditionInput
  ) {
    createDestinationAccTransaction(input: $input, condition: $condition) {
      id
      destinationaccID
      transactionID
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        createdAt
        updatedAt
      }
      transaction {
        id
        type
        currency
        amount
        swift_code
        beneficiary_bank
        purpose_of_transfer
        sourceaccountID
        transactiontypeID
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDestinationAccTransaction = /* GraphQL */ `
  mutation UpdateDestinationAccTransaction(
    $input: UpdateDestinationAccTransactionInput!
    $condition: ModelDestinationAccTransactionConditionInput
  ) {
    updateDestinationAccTransaction(input: $input, condition: $condition) {
      id
      destinationaccID
      transactionID
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        createdAt
        updatedAt
      }
      transaction {
        id
        type
        currency
        amount
        swift_code
        beneficiary_bank
        purpose_of_transfer
        sourceaccountID
        transactiontypeID
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDestinationAccTransaction = /* GraphQL */ `
  mutation DeleteDestinationAccTransaction(
    $input: DeleteDestinationAccTransactionInput!
    $condition: ModelDestinationAccTransactionConditionInput
  ) {
    deleteDestinationAccTransaction(input: $input, condition: $condition) {
      id
      destinationaccID
      transactionID
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        createdAt
        updatedAt
      }
      transaction {
        id
        type
        currency
        amount
        swift_code
        beneficiary_bank
        purpose_of_transfer
        sourceaccountID
        transactiontypeID
        createdAt
        updatedAt
      }
    }
  }
`;
