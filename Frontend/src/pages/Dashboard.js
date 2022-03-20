import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <div className="card-inner">
                    <h6>Market Cap</h6>
                    <h5 className="mb-3">$150,288,518.28</h5>
                    <h6>Circulating Supply</h6>
                    <h5>909,202,939</h5>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="card-inner">
                    <h6>TITANO Price</h6>
                    <h5 className="mb-3">$0.1653</h5>
                    <h6>Backed Liquidity</h6>
                    <h5>167.05%</h5>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="card-inner">
                    <h6>Next Rebase</h6>
                    <h5 className="mb-3">00:12:30</h5>
                    <h6>Average TITANO Holding</h6>
                    <h5>$3,178.69</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <h6>TITANO Price</h6>
                <h4>$0.1652</h4>
                <div className="percent">
                  +0.27%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <h6>Market Value Of Treasury Assets</h6>
                <h4>$10,284,257.57</h4>
                <div className="percent">
                  +13.12%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <h6>BNB Liquidity Value</h6>
                <h4>$6,175,547.39</h4>
                <div className="percent">
                  +1.58%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="card-inner">
                <h6>Risk Free Value Market Value</h6>
                <h4>$5,632,322.92</h4>
                <div className="percent">
                  +10.28%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;