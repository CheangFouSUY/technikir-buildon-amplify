/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
