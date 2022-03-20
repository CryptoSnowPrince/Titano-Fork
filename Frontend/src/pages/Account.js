import React from 'react';

const Account = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <h6>Total Earned</h6>
                <h2>$0.00</h2>
                <h6>0.00 TITANO (0.00% increase)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card nested">
            <div className="card-body">
              <div className="card-inner d-flex justify-content-between align-items-center">
                <div style={{ width: "100%" }}>
                  <h6>APY</h6>
                  <h4>102,483.58%</h4>
                  <h6>Daily ROI 1.90%</h6>
                </div>
                <div className="card-nested">
                  <h6>Your Balance</h6>
                  <h4>
                    <div className="lines">
                      <div className="line pulse"></div>
                    </div>
                  </h4>
                  <h6>0.00 TITANO</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="card nested">
            <div className="card-body">
              <div className="card-inner d-flex justify-content-between align-items-center">
                <div style={{ width: "100%" }}>
                  <h6>Next Rebase:</h6>
                  <h4>00:01:47</h4>
                  <h6>Interest Coming In Your Wallet</h6>
                </div>
                <div className="card-nested">
                  <h6>Your Earnings/Daily</h6>
                  <h4>
                    <div className="lines">
                      <div className="line pulse"></div>
                    </div>
                  </h4>
                  <h6>0.00 TITANO</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <div className="d-flex justify-content-between py-3">
                  <h6>Current TITANO Price</h6>
                  <h6 className="text-value">$0.1672 USD</h6>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h6>Next Reward Amount</h6>
                  <h6 className="text-value-2">TITANO</h6>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h6>Next Reward Amount USD</h6>
                  <h6 className="text-value">USD</h6>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h6>Next Reward Yield</h6>
                  <h6 className="text-value-2">0.03958%</h6>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h6>ROI (5-Day Rate)</h6>
                  <h6 className="text-value">9.87%</h6>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h6>ROI (5-Day Rate) USD</h6>
                  <h6 className="text-value">USD</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;