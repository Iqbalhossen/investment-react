import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./Deposit.css";
import SingleItem from "./SingleItem";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Deposit = () => {
  const [action, setAction] = useState("history");
  const handleServices = (data) => {
    if ("overview" === data) {
      setAction("overview");
    } else if ("history" === data) {
      setAction("history");
    } else if ("claim" === data) {
      setAction("claim");
    }
  };
  const [copyText, setCopyText] = useState("");

  const depostwallet = (data) => {
    if (data === "Yone / polygon") {
      let min = 1;
      let max = 7;
      let rand = min + Math.random() * (max - min);

      if (Math.round(rand) === 1) {
        setCopyText("0x531B566CCC9707464B066edA2697277d849366fA");
      }
      if (Math.round(rand) === 2) {
        setCopyText("0x55a72eaF1C2E528Db6a1Ec366ff35AACc7C9afD3");
      }
      if (Math.round(rand) === 3) {
        setCopyText("0x3c2FB25b5c9e9f771B38CC8150Ad3A67470e1ba2");
      }
      if (Math.round(rand) === 4) {
        setCopyText("0x8c1a6879125C7Acd14bbdF6D5D1F9C126837f0eD");
      }
      if (Math.round(rand) === 5) {
        setCopyText("0xe3Be892E30c17Bb3b94446A8F43fBD638D513d8B");
      }
      if (Math.round(rand) === 6) {
        setCopyText("0x80Cd4C7C5cA59a7301F565e17dee2a6EDfD40B80");
      }
      if (Math.round(rand) === 7) {
        setCopyText("0xB193D4b77b17cACF2361eD1420946b04A73560Ca");
      }
    }
    if (data === "Usdt / trc20") {
      let min = 1;
      let max = 7;
      let rand = min + Math.random() * (max - min);

      if (Math.round(rand) === 1) {
        setCopyText("TNy9UbbQ5vEN2adWAbJ3UeszttByJ9ATGk");
      }
      if (Math.round(rand) === 2) {
        setCopyText("TM3m4q6np5krEBujS2JXeTLxX1ytJsUZ82");
      }
      if (Math.round(rand) === 3) {
        setCopyText("TCYiJTGJ4YMrHi448Fyv48KSZSS8UKyYKS");
      }
      if (Math.round(rand) === 4) {
        setCopyText("THo44GV5JZSA2xKgaGPcKzLjgUQWwcrcas");
      }
      if (Math.round(rand) === 5) {
        setCopyText("TJdQ9XZhpHQAPmvAsb67kUKuBkTZURrmjr");
      }
      if (Math.round(rand) === 6) {
        setCopyText("TUGXRTHMhoEDQhg6PxJ8wAuT8fb16vmtAv");
      }
      if (Math.round(rand) === 7) {
        setCopyText("TEiALGfroGZDMVugnWnrJKp3xvfUdRv1PN");
      }
    }
    if (data === "Busd / bep20") {
      let min = 1;
      let max = 7;
      let rand = min + Math.random() * (max - min);


      if (Math.round(rand) === 1) {
        setCopyText("0x531B566CCC9707464B066edA2697277d849366fA");
      }
      if (Math.round(rand) === 2) {
        setCopyText("0x55a72eaF1C2E528Db6a1Ec366ff35AACc7C9afD3");
      }
      if (Math.round(rand) === 3) {
        setCopyText("0x3c2FB25b5c9e9f771B38CC8150Ad3A67470e1ba2");
      }
      if (Math.round(rand) === 4) {
        setCopyText("0x8c1a6879125C7Acd14bbdF6D5D1F9C126837f0eD");
      }
      if (Math.round(rand) === 5) {
        setCopyText("0xe3Be892E30c17Bb3b94446A8F43fBD638D513d8B");
      }
      if (Math.round(rand) === 6) {
        setCopyText("0x80Cd4C7C5cA59a7301F565e17dee2a6EDfD40B80");
      }
      if (Math.round(rand) === 7) {
        setCopyText("0xB193D4b77b17cACF2361eD1420946b04A73560Ca");
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    toast("copies wallets address!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { LoginWithEmail, authUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const userFrom = location.state?.from?.pathname || "/deposit/now";

  const [notANumber, setNotANumber] = useState("");
  const [deposit, setdeposit] = useState({});
  const [netMessage, setNetMessage] = useState("");
  const [DepositBtnDisable, setDepositBtnDisable] = useState(false);

  const handleInputBlur = (event) => {
    setNetMessage("");
    if (event.target.name === "amount") {
      const checkNumber = /^[0-9\b]+$/;

      if (event.target.value === "" || checkNumber.test(event.target.value)) {
        setDepositBtnDisable(false);
        setNotANumber("");
      } else {
        setNotANumber("Invalid Number!");
        setDepositBtnDisable(true);
      }
    }
    if (event.target.name === "networks") {
      setDepositBtnDisable(false);
    }
    let setTime = new Date();
    const value = event.target.value;
    const field = event.target.name;
    const newUser = {
      ...deposit,
      User_id: authUser?.userName,
      status: 0,
      created_at: setTime,
    };
    newUser[field] = value;
    setdeposit(newUser);
  };

  useEffect(() => {
    depostwallet(deposit.networks);
  }, [deposit]);

  const [mimmumBalance, setMinimumBalance] = useState("");

  
  const handleForm = (event) => {
    setDepositBtnDisable(true);
    event.preventDefault();
    // console.log(deposit);
    if (deposit.networks) {
      fetch("http://localhost:5000/api/user/deposit/store", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'authorization':
          'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
        },
        body: JSON.stringify(deposit),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.success === false) {
            setDepositBtnDisable(false);
            setMinimumBalance(data.message);
          } else {
            // setMessage(data.message);
            navigate(userFrom, { replace: true });
            toast("Your Deposit is pending!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // setLoading(false);
          }
        })
        .catch((error) => <></>);
      event.target.reset();
    } else {
      setNetMessage("please select your network");
    }
  };

  // console.log(deposit);
  const [depositHistory, setDepositHistroy] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/deposit/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setDepositHistroy(data.data);
        });
    }
  }, []);
  // console.log(depositHistory)
  
 
   
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
      if (authUser) {
          fetch(`http://localhost:5000/api/user/personal/balance/view/${authUser.userName}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
              .then(res => res.json())
              .then(data => {
                  setTotalBalance(data.data);
              });
      }

  }, [])


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />

      <div className="services-menu container  mt-5 d-flex justify-content-between">
        <button
          onClick={() => handleServices("history")}
          className="btn btn-light btn-color fw-bolder"
        >
          Overview
        </button>

        <button
          onClick={() => handleServices("overview")}
          className="btn btn-light btn-color fw-bolder"
        >
          Deposit Now
        </button>
      </div>
      <section className="container mt-3">
        <div
          className={`${
            action === "overview"
              ? "shadow-lg p-3 mb-5 bg-body rounded d-block"
              : "shadow-lg p-3 mb-5 bg-body rounded d-none"
          }`}
        >
          <div className="deposit-title text-center">
            <h1> Deposit</h1>
          </div>

          <p className="text-danger">{mimmumBalance}</p>
          <form onSubmit={handleForm}>
            <div className="row g-4">
              <div className="col-lg-4 col-md-4 col-12 py-lg-3 py-md-3 py-0">
                {/* {message} */}
                <div className="deposit-form-area px-3">
                  <small>Token Amount</small>
                  <div className="deposit-form">
                    <input
                      type="text"
                      onChange={handleInputBlur}
                      width="70%"
                      name="amount"
                      className="form-control deposit-input"
                      placeholder="Enter your Amount"
                      required
                    />
                  </div>
                  <p className="text-danger">{notANumber}</p>
                  <div className="total-calculate">
                    <small>Available Balance</small>
                    <h4>
                      $ {totalBalance}{" "}
                      USDT
                    </h4>
                    <small>Total : </small>
                    <h4>
                      {deposit?.amount
                        ? totalBalance +
                          parseFloat(deposit?.amount)
                        : 0}{" "}
                      USDT
                    </h4>
                    <small>Deposit Amount : </small>
                    <h4>{deposit?.amount ? deposit?.amount : 0} USDT</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-md-8 col-12 py-lg-3 py-md-3">
                <div className="row px-3">
                  <div className="col-12 col-md-8 col-lg-8">
                    <div className="usd-networks ">
                      <h3>USDT Available Networks</h3>

                      <div className="network-btn-group  align-items-center justify-content-center  d-flex me-2">
                        <input
                          type="radio"
                          onChange={handleInputBlur}
                          defaultValue="Yone / polygon"
                          className="btn-check "
                          name="networks"
                          id="danger-outlined"
                        />
                        <label
                          className="btn btn-outline-secondary network-btn"
                          htmlFor="danger-outlined"
                        >
                          Yone <br /> polygon
                        </label>

                        <input
                          type="radio"
                          onChange={handleInputBlur}
                          defaultValue="Usdt / trc20"
                          className="btn-check"
                          name="networks"
                          id="danger-outlined2"
                        />
                        <label
                          className="btn btn-outline-secondary network-btn"
                          htmlFor="danger-outlined2"
                        >
                          Usdt <br /> trc20
                        </label>

                        <input
                          type="radio"
                          onChange={handleInputBlur}
                          defaultValue="Busd / bep20"
                          className="btn-check"
                          name="networks"
                          id="danger-outlined3"
                        />
                        <label
                          className="btn btn-outline-secondary network-btn"
                          htmlFor="danger-outlined3"
                        >
                          Busd <br /> bep20
                        </label>
                      </div>
                    </div>

                    <p className="text-danger">{netMessage}</p>

                    <div className="mobile-balance-show mt-2">
                      <div className="d-flex justify-content-between m-0 align-items-center">
                        <small>
                          Available Balance :{" "}
                          <strong>
                           $ {totalBalance}{" "}
                            USDT
                          </strong>
                        </small>
                        <small>
                          Total :{" "}
                          <strong>
                           $ {deposit?.amount
                              ? totalBalance +
                                parseFloat(deposit?.amount)
                              : 0}{" "}
                            USDT
                          </strong>
                        </small>
                      </div>
                      <div className="d-flex justify-content-between m-0 align-items-center">
                        <small>
                          Deposit Amount :{" "}
                          <strong>
                            {deposit?.amount ? deposit?.amount : 0} USDT
                          </strong>
                        </small>
                      </div>
                    </div>

                    <div className="my-3 deposit-input d-block">
                      <label className="form-label">
                        {" "}
                        Deposit Walllet Address
                      </label>
                      <div className="d-flex m-0">
                        <input
                          type="text"
                          defaultValue={copyText}
                          className="form-control deposit-input wallet-address-copy"
                          placeholder="Deposit Walllet Address"
                          disabled
                        />
                        <p onClick={handleCopy} className="btn btn-light">
                          Copy
                        </p>
                      </div>
                    </div>
                    <div className="my-3 deposit-input d-block">
                      <label className="form-label"> Transaction id</label>
                      <input
                        type="text"
                        onChange={handleInputBlur}
                        width="70%"
                        name="transaction_id"
                        className="form-control deposit-input"
                        placeholder="Enter your transaction id"
                        required
                      />
                    </div>

                    <div className="d-grid gap-2">
                      {DepositBtnDisable === true ? (
                        <button
                          className="btn btn-primary deposit-btn-submit"
                          disabled
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary deposit-btn-submit"
                          type="submit"
                        >
                          Confirm
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Overview history start  */}
        <div
          className={`${
            action === "history"
              ? "shadow-lg p-3 mb-5 bg-body rounded d-block"
              : "shadow-lg p-3 mb-5 bg-body rounded d-none"
          }`}
        >
          <div className="deposit-title align-items-center  d-flex">
            <i className="fa-solid fa-arrow-left"></i>
            <h1>History</h1>
          </div>

          <div className="scrollbar-x ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Networks</th>
                  <th scope="col">Transaction Id</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {depositHistory.map((data, index) => (
                  <SingleItem data={data} index={index} key={data._id}>
                    {" "}
                  </SingleItem>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Overview history end  */}
      </section>
    </>
  );
};

export default Deposit;
