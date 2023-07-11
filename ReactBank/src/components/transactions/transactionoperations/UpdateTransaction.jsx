import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateTransaction ,getTransaction } from "../../../actions/projectActions";

const UpdateTransaction = ({ updateTransaction, navigate}) => {
  const { walletid, id } = useParams();

  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    type: "1",
  });

  const { amount, description, type } = transaction;

  useEffect(() => {
    // Fetch transaction details from the API using the walletid and id
    // Set the received data as the initial state for the transaction
    const fetchTransaction = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/transaction/${walletid}/${id}`
        );
        const data = await response.json();
        setTransaction(data); // Assuming the response data matches the shape of the transaction object
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransaction();
  }, [walletid, id]);

  const changeHandler = (event, fieldName) => {
    setTransaction({
      ...transaction,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const oldTransaction = {
      amount,
      description,
      type,
    };

    updateTransaction(oldTransaction, navigate, walletid, id);
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/transactions/${walletid}`} className="btn btn-light">
              Back to Wallet
            </Link>
            <h4 className="display-4 text-center">Update Transaction</h4>
            <p className="lead text-center">UBL Account</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(event) => changeHandler(event, "amount")}
                  className="form-control form-control-lg"
                  placeholder="Amount"
                />
              </div>
              <div className="form-group">
                <textarea
                  value={description}
                  onChange={(event) => changeHandler(event, "description")}
                  className="form-control form-control-lg"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Transaction Type :
                </label>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    checked={type === "1"}
                    className="custom-control-input"
                    type="radio"
                    id="income"
                    onChange={(event) => changeHandler(event, "type")}
                    value="1"
                  />
                  <label className="custom-control-label" htmlFor="income">
                    Income
                  </label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    checked={type === "2"}
                    className="custom-control-input"
                    type="radio"
                    id="expense"
                    onChange={(event) => changeHandler(event, "type")}
                    value="2"
                  />
                  <label className="custom-control-label" htmlFor="expense">
                    Expense
                  </label>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTransaction: (oldTransaction, navigate, walletid, id) =>
      dispatch(updateTransaction(oldTransaction, navigate, walletid, id)),
  };
};

const ConnectedUpdateTransaction = connect(
  null,
  mapDispatchToProps
)(UpdateTransaction);

const UpdateTransactionContainer = () => {
  const navigate = useNavigate();
  return <ConnectedUpdateTransaction navigate={navigate} />;
};

export default UpdateTransactionContainer;
