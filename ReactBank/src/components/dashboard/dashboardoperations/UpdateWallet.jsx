import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { getWallet, updateWallet } from "../../../actions/projectActions";

const UpdateWallet = (props) => {
  const [state, setState] = useState({
    id: "",
    name: "",
    accountNumber: "",
    description: "",
    priority: "",
    errors: {},
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    props.getWallet(id);
    console.log( props.getWallet(id));
  }, [id]);

  useEffect(() => {
    if (props.errors !== state.errors) {
      setState({ ...state, errors: props.errors });
    }
    if (props.wallet) {
      const { id, name, accountNumber, description, priority } = props.wallet;
      setState({ ...state, id, name, accountNumber, description, priority });
    }
  }, [props.errors, props.wallet]);

  const changeHandler = (event, fieldName) => {
    setState({ ...state, [fieldName]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { id, name, accountNumber, description, priority } = state;
    const updatedWallet = {
      id,
      name,
      accountNumber,
      description,
      priority,
    };
    props.updateWallet(id, updatedWallet, navigate);
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Wallet</h5>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => changeHandler(event, "name")}
                  value={state.name}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": state.errors.name,
                  })}
                  placeholder="Account Name"
                />
                {state.errors.name && (
                  <p className="text-danger">{state.errors.name}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => changeHandler(event, "accountNumber")}
                  value={state.accountNumber}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": state.errors.accountNumber,
                  })}
                  placeholder="Account No"
                />
                {state.errors.accountNumber && (
                  <p className="text-danger">{state.errors.accountNumber}</p>
                )}
              </div>
              <div className="form-group">
                <textarea
                  onChange={(event) => changeHandler(event, "description")}
                  value={state.description}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": state.errors.description,
                  })}
                  placeholder="Description"
                ></textarea>
                {state.errors.description && (
                  <p className="text-danger">{state.errors.description}</p>
                )}
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  onChange={(event) => changeHandler(event, "priority")}
                  value={state.priority}
                >
                  <option value={3}>Display Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  wallet: state.wallet.wallet,
});

const ConnectedUpdateWallet = connect(mapStateToProps, {
  getWallet,
  updateWallet,
})(UpdateWallet);


const UpdateWalletContainer = () => {
  const navigate = useNavigate();
  return <ConnectedUpdateWallet navigate={navigate} />;
};

export default UpdateWalletContainer;
