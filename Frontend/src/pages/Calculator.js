import React, { useState } from 'react';

const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card calculator-card">
            <div className="card-body">
              <div className="card-inner">
                <div className="calculator-card-header">
                  <p className="calculator-card-header-title text-white">Calculator</p>
                  <p className="calculator-card-header-subtitle text-white">Estimate your returns</p>
                </div>
                <div className="d-flex justify-content-around text-center">
                  <div>
                    <h5>TITANO Price</h5>
                    <h4 className="text-white">$0.166795</h4>
                  </div>
                  <div>
                    <h5>APY:</h5>
                    <h4 className="text-white">102,483.58%</h4>
                  </div>
                  <div>
                    <h5>Your TITANO Balance</h5>
                    <h4 className="text-white">0.00 TITANO</h4>
                  </div>
                </div>

                <div className="calculator-card-action-area mt-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="text-white">TITANO Amount</h6>
                      <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="0" aria-label="0"
                          aria-describedby="button-addon1" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Max</button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-white">APY (%)</h6>
                      <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="102483.58" aria-label="102483.58"
                          aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Current</button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-white">TITANO price at purchase ($)</h6>
                      <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="0.167036" aria-label="0.167036"
                          aria-describedby="button-addon3" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon3">Current</button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-white">Future TITANO price ($)</h6>
                      <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="0.167036" aria-label="0.167036"
                          aria-describedby="button-addon4" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon4">Current</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calculator-days-slider-wrap py-3">
                  <label htmlFor="daysSlider" className="form-label">
                    <h6 className="text-white" id="daysSliderValue">{rangeValue} days</h6>
                  </label>
                  <input type="range" value={rangeValue} onChange={(e) => { handleChange(e) }} min="1" max="365" className="form-range" id="daysSlider" />
                </div>
                <div className="calculator-user-data">
                  <div className="d-flex justify-content-between py-3">
                    <h6>Your initial investment</h6>
                    <h6 className="text-value-2">$0.00</h6>
                  </div>
                  <div className="d-flex justify-content-between py-3">
                    <h6>Current wealth</h6>
                    <h6 className="text-value-2">$0.00</h6>
                  </div>
                  <div className="d-flex justify-content-between py-3">
                    <h6>TITANO rewards estimation</h6>
                    <h6 className="text-value-2">$0.00 TITANO</h6>
                  </div>
                  <div className="d-flex justify-content-between py-3">
                    <h6>Potential return</h6>
                    <h6 className="text-value-2">$0.00</h6>
                  </div>
                  <div className="d-flex justify-content-between py-3">
                    <h6>Potential number of Space Travels</h6>
                    <h6 className="text-value-2">0</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;