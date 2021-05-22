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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DestinationAccTransactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationaccs {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationaccs {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationaccs {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      destinationacc {
        id
        first_name
        last_name
        acc_num
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
