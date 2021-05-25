/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDestinationAcc = /* GraphQL */ `
  subscription OnCreateDestinationAcc {
    onCreateDestinationAcc {
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
export const onUpdateDestinationAcc = /* GraphQL */ `
  subscription OnUpdateDestinationAcc {
    onUpdateDestinationAcc {
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
export const onDeleteDestinationAcc = /* GraphQL */ `
  subscription OnDeleteDestinationAcc {
    onDeleteDestinationAcc {
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
export const onCreateTransactionType = /* GraphQL */ `
  subscription OnCreateTransactionType {
    onCreateTransactionType {
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
export const onUpdateTransactionType = /* GraphQL */ `
  subscription OnUpdateTransactionType {
    onUpdateTransactionType {
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
export const onDeleteTransactionType = /* GraphQL */ `
  subscription OnDeleteTransactionType {
    onDeleteTransactionType {
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
export const onCreateSourceAcc = /* GraphQL */ `
  subscription OnCreateSourceAcc {
    onCreateSourceAcc {
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
export const onUpdateSourceAcc = /* GraphQL */ `
  subscription OnUpdateSourceAcc {
    onUpdateSourceAcc {
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
export const onDeleteSourceAcc = /* GraphQL */ `
  subscription OnDeleteSourceAcc {
    onDeleteSourceAcc {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateDestinationAccTransaction = /* GraphQL */ `
  subscription OnCreateDestinationAccTransaction {
    onCreateDestinationAccTransaction {
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
export const onUpdateDestinationAccTransaction = /* GraphQL */ `
  subscription OnUpdateDestinationAccTransaction {
    onUpdateDestinationAccTransaction {
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
export const onDeleteDestinationAccTransaction = /* GraphQL */ `
  subscription OnDeleteDestinationAccTransaction {
    onDeleteDestinationAccTransaction {
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
