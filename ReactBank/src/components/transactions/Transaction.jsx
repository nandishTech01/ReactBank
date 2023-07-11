import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTransactions, deleteTransaction } from '../../actions/projectActions';

const Transaction = ({ transactions, getTransactions, deleteTransaction }) => {
  const { id } = useParams();
  //this id indicates the wallet id

  useEffect(() => {
    getTransactions(id);
  }, [getTransactions, id]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this Transaction?')) {
      deleteTransaction(id);
    }
  };

  const calculateTotalBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  console.log(transactions);

  return (
    <div className="container">
      <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
        Back
      </Link>
  
      <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Record new Transaction</i>
        </Link>
      <div className="card text-center">
        <div className="card-header bg-success text-white">
          <h4>UBL Account total Balance</h4>
          <h1>Rs. {calculateTotalBalance()}</h1>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>
                <Link className="text-info" to={`/updateTransaction/${id}/${transaction.id}`}>
                  <i className="fas fa-edit fa-2x"></i>
                </Link>
                <Link
                  to={`/transactions/${id}`} //this id indicates the wallet id
                  onClick={() => handleDelete(transaction.id)}
                  className="text-danger"
                >
                  <i className="fas fa-trash fa-2x"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transaction.transactions,
});

export default connect(mapStateToProps, { getTransactions, deleteTransaction })(Transaction);
