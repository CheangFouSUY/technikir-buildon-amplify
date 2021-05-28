import { useState, useReducer, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {
  CBadge,
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react';

import { listTransactions as ListTransactions} from '../graphql/queries'
import { useHistory } from 'react-router-dom';


const getBadge = status => {
  switch (status) {
    case 'Authorized': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Rejected': return 'danger'
    default: return 'primary'
  }
}

const fields = ['register_number','date', 'type', 'progress', { key: 'show_details', label: '', _style: { width: '1%' }, sorter: false }];

// create initial state
const initialState = {
    id: '',
    source_id: '',
    beneficiary_id: '',
    beneficiary_firstname: '',
    beneficiary_lastname: '',
    beneficiary_address: '',
    currency: '',
    amount: '',
    date: '',
    purpose_of_transfer: '',
    branch_name: '',
    customer_verified_by: '',
    register_number: '',
    approval: '',
    checked_by: '',
    uploaded_by: '',
    teller_name: '',
    _deleted: '',
    _version: '',
    transactions: [],
    pending: [],
    authorized: [],
    rejected: []
};

// create reducer to update state
function reducer (state, action) {  
    switch(action.type) {
        case "SET_TRANSACTIONS":
            return { ...state, transactions: action.transactions }
        case "ADD_PENDING":
            return { ...state, pending: [...state.pending, action.pending] }
        case "ADD_AUTHORIZED":
            return { ...state, authorized: [...state.authorized, action.authorized] }
        case "ADD_REJECTED":
            return { ...state, rejected: [...state.rejected, action.rejected] }
        default:
        return state;
    }
}

const Authorizer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const history = useHistory();
    // component did mount
    useEffect(() => {
        getData()
    }, []);
    
    function divideProgress(e){
        if ( !e._deleted && e.progress === "Pending" && state.pending.findIndex((event) => event.register_number === e.register_number) === -1) 
            dispatch({ type: "ADD_PENDING", pending: e})
        else if ( !e._deleted && e.progress === "Authorized" && state.authorized.findIndex((event) => event.register_number === e.register_number) === -1)
            dispatch({ type: "ADD_AUTHORIZED", authorized: e})
        else if ( !e._deleted && e.progress === "Rejected" && state.rejected.findIndex((event) => event.register_number === e.register_number) === -1)
            dispatch({ type: "ADD_REJECTED", rejected: e})
    }
    
    async function getData() {
        try {
            const transactionData = await API.graphql(graphqlOperation(ListTransactions));
            transactionData.data.listTransactions.items.map(divideProgress);
            console.log("Fetched API:", transactionData);
            dispatch({ type: 'SET_TRANSACTIONS', transactions: transactionData.data.listTransactions.items});
        } catch (err) {
            console.log("error fetching data...", err);
        }
    }

    const handleClick = (data) => {
        history.push({
            pathname: '/transaction',
            state: data
        });
    }
        
    return (
        <>
            <CRow>
                <CCol>
                <CCard>
                    <CCardHeader>
                    <h3>Pending Queue</h3>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                    items={state.pending}
                    fields={fields}
                    striped
                    hover
                    sorter
                    itemsPerPage={5}
                    pagination
                    scopedSlots = {{
                        'progress':
                        (item)=>(
                            <td>
                                <CBadge color={getBadge(item.progress)}>
                                    {item.progress}
                                </CBadge>
                            </td>
                        ),
                        'show_details':
                        (item)=>(
                            <td className="py-2">
                                <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={() => handleClick(item)}
                                >
                                Show
                                </CButton>
                            </td>
                        )
                    }}
                    />
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
    
            <CRow>
                <CCol>
                <CCard>
                    <CCardHeader>
                    <h3>Authorized Table</h3>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                    items={state.authorized}
                    fields={fields}
                    striped
                    hover
                    sorter
                    itemsPerPage={5}
                    pagination
                    scopedSlots = {{
                        'progress':
                        (item)=>(
                            <td>
                                <CBadge color={getBadge(item.progress)}>
                                    {item.progress}
                                </CBadge>
                            </td>
                        ),
                        'show_details':
                        (item)=>(
                            <td className="py-2">
                                <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={ () => handleClick(item) }
                                >
                                Show
                                </CButton>
                            </td>
                        )
                    }}
                    />
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
            
            <CRow>
                <CCol>
                <CCard>
                    <CCardHeader>
                    <h3>Rejected Table</h3>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                    items={state.rejected}
                    fields={fields}
                    striped
                    hover
                    sorter
                    itemsPerPage={5}
                    pagination
                    scopedSlots = {{
                        'progress':
                        (item)=>(
                            <td>
                                <CBadge color={getBadge(item.progress)}>
                                    {item.progress}
                                </CBadge>
                            </td>
                        ),
                        'show_details':
                        (item)=>(
                            <td className="py-2">
                                <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={ () => handleClick(item) }
                                >
                                Show
                                </CButton>
                            </td>
                        )
                    }}
                    />
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
    
        </>
    )
}

export default Authorizer;
