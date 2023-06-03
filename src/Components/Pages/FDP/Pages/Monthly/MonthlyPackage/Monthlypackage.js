import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../../../Contexts/AuthContext/AuthProvider";
import SingleItem from "./SingleItem";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";

const Monthlypackage = () => {
  const [action, setAction] = useState("overview");
  const handleServices = (data) => {
    if ("overview" === data) {
      setAction("overview");
    } else if ("buyPackage" === data) {
      setAction("buyPackage");
    } else if ("history" === data) {
      setAction("history");
      console.log(data);
    }
  };

  const { id } = useParams();

  const { LoginWithEmail, authUser } = useContext(AuthContext);

  const [monthlyPackageShow, setmonthlyPackageShow] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/monthly/package/ftp/view/${authUser.userName}/${id}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setmonthlyPackageShow(data.data);
          // console.log(data.data[0].package_amount);
        });
    }
  }, []);
  const [monthlyPackageAmount, setmonthlyPackageAmount] = useState(0);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/monthly/package/view/by/single/${authUser.userName}/${id}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setmonthlyPackageAmount(data.data);
          // console.log(data.data.package_amount);
        });
    }
  }, []);

  const [message, setMessage] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const userFrom = location.state?.from?.pathname || "/fdp/monthly";

  const [deposit, setDeposit] = useState({});

  const [showUsdGenerate, setUsdGenerate] = useState([]);

  // User Balance

  const [withdrawAmount, setwithdrawAmount] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/withdraw/accept/view/${authUser.userName}/${authUser._id}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setwithdrawAmount(data.data.data);
        });
    }
  }, []);

  let withdrawAmountSum = 0;
  for (let i = 0; i <= withdrawAmount?.length; i++) {
    if (withdrawAmount[i]) {
      withdrawAmountSum += parseFloat(withdrawAmount[i]?.amountWithVat);
    }
  }

  const [totalDeposit, setTotalDeposit] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/deposit/accept/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotalDeposit(data.data);
        });
    }
  }, []);

  let DepositAmountSum = 0;
  for (let i = 0; i <= totalDeposit?.length; i++) {
    if (totalDeposit[i]) {
      DepositAmountSum += parseFloat(totalDeposit[i]?.amount);
    }
  }

  const [bonusAmount, setbonusAmount] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/bonus/balance/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setbonusAmount(data.data.data);
          // console.log(data.data);
        });
    }
  }, []);

  let userTotalbonusAmount = 0;
  for (let i = 0; i <= bonusAmount?.length; i++) {
    if (bonusAmount[i]) {
      userTotalbonusAmount += parseFloat(bonusAmount[i]?.amount);
    }
  }

  const [CoinbonusAmount, setCoinbonusAmount] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/bonus/coin/mining/balance/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setCoinbonusAmount(data.data.data);
          // console.log(data.data.data);
        });
    }
  }, []);

  let userTotalCoinbonusAmount = 0;
  for (let i = 0; i <= CoinbonusAmount?.length; i++) {
    if (CoinbonusAmount[i]) {
      userTotalCoinbonusAmount += parseFloat(CoinbonusAmount[i]?.amount);
    }
  }

  //  User Balance End

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/usd/generate/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsdGenerate(data);
          // console.log(data)
        });
    }
  }, []);

  let UsdGenSum = 0;
  for (let i = 0; i <= showUsdGenerate.length; i++) {
    if (showUsdGenerate[i]) {
      UsdGenSum += parseFloat(showUsdGenerate[i].package_amount);
    }
  }

  const [showCoinMining, setCoinMining] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/coin/mining/view/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setCoinMining(data);
          // console.log(data)
        });
    }
  }, []);

  // console.log(AmountSum)
  let CoinMiningSum = 0;
  for (let i = 0; i <= showCoinMining.length; i++) {
    if (showCoinMining[i]) {
      CoinMiningSum += parseFloat(showCoinMining[i].package_amount);
    }
  }

  const [btnDisable, setBtnDisable] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    setBtnDisable(true);
    // console.log(deposit);
    fetch(
      `http://localhost:5000/api/user/monthly/package/fdp/montly/${authUser.userName}/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
        },
        body: JSON.stringify({
          user_name: authUser?.userName,
          package_amount: monthlyPackageAmount.package_amount,
          package_id: id,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success === false) {
          setMessage(data);
          setBtnDisable(false);
          // console.log(data)
        } else {
          setBtnDisable(false);
          navigate(userFrom, { replace: true });
          toast("Monthly Deposit successfull!", {
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
  };

  // Bonus Section

  const [Totaldirect, setTotaldirect] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/monthly/package/direct/sells/bonus/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotaldirect(data.data);
          // console.log(data.data.data);
        });
    }
  }, []);

  let userTotaldirect = 0;

  for (let i = 0; i <= Totaldirect.length; i++) {
    if (Totaldirect[i]) {
      userTotaldirect += parseInt(Totaldirect[i].commision);
    }
  }

  const [Totalteam, setTotalteam] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/monthly/package/team/sells/bonus/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotalteam(data.data);
          // console.log(data.data.data);
        });
    }
  }, []);

  let userTotalteam = 0;
  for (let i = 0; i <= Totalteam?.length; i++) {
    if (Totalteam[i]) {
      userTotalteam += parseFloat(Totalteam[i]?.commision);
    }
  }

  const [Totalgeneration, setTotaltgeneration] = useState([]);

  useEffect(() => {
    if (authUser) {
      fetch(
        `http://localhost:5000/api/user/monthly/package/generation/bonus/${authUser.userName}`
        , {
          method: 'GET',
          headers: {
              'authorization':
                  'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
          },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotaltgeneration(data.data);
          // console.log(data.data);
        });
    }
  }, []);

  let userTotalgeneration = 0;
  for (let i = 0; i <= Totalgeneration?.length; i++) {
    if (Totalgeneration[i]) {
      userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
    }
  }

  // Here are the two dates to compare
  var date2 = moment(monthlyPackageAmount.time, "DD-MM-YYYY").format(
    "YYYY-MM-DD"
  );

  let date_1 = new Date(date2);
  let date_2 = new Date();
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <>
      <div className="services-menu container mt-5 d-flex justify-content-between">
        <button
          onClick={() => handleServices("overview")}
          class="btn btn-light btn-color fw-bolder "
        >
          History
        </button>

        <button
          onClick={() => handleServices("buyPackage")}
          class="btn btn-light btn-color fw-bolder"
        >
          Deposit Now
        </button>
      </div>

      <section className="container mt-3">
        <div
          className={`${
            action === "buyPackage"
              ? "shadow-lg p-3 mb-5 bg-body rounded d-block "
              : "shadow-lg p-3 mb-5 bg-body rounded d-none"
          }`}
        >
          <div className="deposit-title text-center">
            {/* <i className="fa-solid fa-arrow-left"></i> */}
            <h1> Monthly Deposit </h1>
          </div>

          <form onSubmit={handleForm}>
            <div className="row g-4">
              <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">
                <div className="deposit-form-area px-md-3 px-lg-3">
                  <small>Token Amount</small>
                  <div className="deposit-form">
                    <input
                      type="text"
                      width="70%"
                      name="amount"
                      className="form-control deposit-input"
                      defaultValue={monthlyPackageAmount.package_amount}
                      disabled
                    />
                  </div>

                  <div className="total-calculate">
                    <small>Available Balance</small>
                    <h4>
                      {userTotalCoinbonusAmount +
                        userTotalbonusAmount +
                        DepositAmountSum -
                        withdrawAmountSum -
                        UsdGenSum -
                        CoinMiningSum}
                      USD
                    </h4>
                    <small>Frozen Balance</small>
                    <h4>
                      {userTotalCoinbonusAmount +
                        userTotalbonusAmount +
                        DepositAmountSum -
                        withdrawAmountSum -
                        UsdGenSum -
                        CoinMiningSum -
                        monthlyPackageAmount.package_amount}
                      USD
                    </h4>
                    <small>Duration </small>
                    <h4>1095 Days</h4>
                    <small>Commission</small>
                    <h4>3x</h4>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 col-lg-8 py-0 py-lg-3 py-md-3">
                <div className="col-12 col-md-12 col-lg-8">
                  <div>
                    <div className="withdraw-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbXv8bN5un2I_nZEDZgpEpFnRJohSiel_NQ&usqp=CAU"
                        alt=""
                      />
                    </div>

                    <div className="mobile-balance-show mb-2">
                      <div className="d-flex justify-content-between m-0 align-items-center">
                        <small>
                          Available Balance : <strong> USD</strong>
                        </small>
                        <small>
                          Frozen Balance : <strong> USD</strong>
                        </small>
                      </div>
                      <hr />
                      <div className="d-flex  m-0 justify-content-between align-items-center">
                        <small>
                          Duration : <strong>1095 Days</strong>
                        </small>
                        <small>
                          Commission : <strong>3x</strong>
                        </small>
                      </div>
                      <hr />

                      <hr />
                      <div className="d-flex  m-0 justify-content-between align-items-center"></div>
                    </div>

                    <div className="deposit-form-area pb-4 pt-4">
                      <small>
                        Yow can't transfer dollers to your main balance from
                        here until your earn $10...
                      </small>
                    </div>
                    <div class="d-grid gap-2">
                      {(() => {
                        if (btnDisable === true) {
                          return (
                            <>
                              <button
                                class="btn btn-primary deposit-btn-submit"
                                type="submit"
                                disabled
                              >
                                Confirm
                              </button>
                            </>
                          );
                        } else {
                          return (
                            <>
                              {userTotalCoinbonusAmount +
                                userTotalbonusAmount +
                                DepositAmountSum -
                                withdrawAmountSum -
                                UsdGenSum -
                                CoinMiningSum -
                                monthlyPackageAmount.package_amount >=
                              0 >=
                              0 ? (
                                <button
                                  class="btn btn-primary deposit-btn-submit"
                                  type="submit"
                                >
                                  Confirm
                                </button>
                              ) : (
                                <button
                                  class="btn btn-primary deposit-btn-submit"
                                  type="submit"
                                  disabled
                                >
                                  Confirm
                                </button>
                              )}
                            </>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div
          className={`${
            action === "overview"
              ? "shadow-lg p-3 mb-5 bg-body rounded d-block"
              : "shadow-lg p-3 mb-5 bg-body rounded d-none"
          }`}
        >
          <div className="deposit-title align-items-center mt-3  d-flex">
            <i className="fa-solid fa-arrow-left"></i>
            <h1>History</h1>
          </div>

          <div className="scrollbar-x ">
            <div className="deposit-form-area pb-4 pt-4 d-flex justify-content-between">
              <h5>Remaining days: {TotalDays >= 0 ? TotalDays : 0} days</h5>
              <button class="btn btn-light btn-color fw-bolder">
                  Transfer Now
                </button>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Package Amount</th>
                  <th scope="col">Monthly Amount</th>
                  <th scope="col">Profit</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {monthlyPackageShow.map((data, index) => (
                  <SingleItem data={data} index={index} key={data._id}>
                    {" "}
                  </SingleItem>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Monthlypackage;
