import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createTransaction } from "../../../actions/projectActions";

const AddTransaction = ({ createTransaction }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    type: "1",
  });

  const { amount, description, type } = transaction;

  const changeHandler = (event, fieldName, checkbox) => {
    setTransaction({
      ...transaction,
      [fieldName]: checkbox ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      amount,
      description,
      type,
    };

    createTransaction(newTransaction, navigate, id);
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/transactions/${id}`} className="btn btn-light">
              Back to Wallet
            </Link>
            <h4 className="display-4 text-center">Record New Transaction</h4>
            <p className="lead text-center">UBL Account</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="number" 
                  min="1"
                  value={amount}
                  onChange={(event) => changeHandler(event, "amount", false)}
                  className="form-control form-control-lg"
                  placeholder="Amount"
                />
              </div>
              <div className="form-group">
                <textarea
                  value={description}
                  onChange={(event) =>
                    changeHandler(event, "description", false)
                  }
                  className="form-control form-control-lg"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="form-group">
                                 <label htmlFor="exampleFormControlTextarea1">Transaction Type : </label>
                                    <div className="custom-control custom-radio custom-control-inline">
                             <input checked={type === '1'} className="custom-control-input" type="radio" id="income" onChange={event => changeHandler(event, "type", false)} value="1" />
                                        <label className="custom-control-label" htmlFor="income">Income</label>
                                    </div>

                                    <div className="custom-control custom-radio custom-control-inline">
                      <input checked={type === '2'} className="custom-control-input" type="radio" id="expense" onChange={event => changeHandler(event, "type", false)} value="2" />
                                        <label className="custom-control-label" htmlFor="expense">Expense</label>
                                    </div>
                                </div>
            <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

const ConnectedWallet = connect(null, { createTransaction })(AddTransaction);
const WalletContainer = () => {
  const navigate = useNavigate();
  return <ConnectedWallet navigate={navigate} />;
};

export default WalletContainer;
