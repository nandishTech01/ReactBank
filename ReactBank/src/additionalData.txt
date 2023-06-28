import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateWallet() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const changeHandler = (event, fieldName) => {
    if (fieldName === 'name') {
      setName(event.target.value);
    } else if (fieldName === 'accountNumber') {
      setAccountNumber(event.target.value);
    } else if (fieldName === 'description') {
      setDescription(event.target.value);
    } else if (fieldName === 'priority') {
      setPriority(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newWallet = {
      name: name,
      accountNumber: accountNumber,
      description: description,
      priority: priority
    };

    axios
      .post('http://localhost:8081/wallet', newWallet)
      .then((res) => {
        navigate('/dashboard'); // Redirect to the dashboard after creating the wallet
      })
      .catch((err) => {
        console.log(err);
        alert('Error');
      });
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create Wallet</h5>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => changeHandler(event, 'name')}
                  className="form-control form-control-lg"
                  placeholder="Account Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => changeHandler(event, 'accountNumber')}
                  className="form-control form-control-lg"
                  placeholder="Account No"
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={(event) => changeHandler(event, 'description')}
                  className="form-control form-control-lg"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  onChange={(event) => changeHandler(event, 'priority')}
                >
                  <option value={3}>Display Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWallet;
