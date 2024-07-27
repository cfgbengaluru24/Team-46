import React from 'react';

const MaternitySchemeForm = () => {
    const handleNonNegativeInput = (event) => {
        const value = event.target.value;
        if (value < 0) {
          event.target.value = 0;
        }
      };
  return (
    
    <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Maternity Scheme Eligibility</h1>
      <form>
        <div className="form-control mb-6">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Name</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Age</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput} />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Contact Number</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Address</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
     
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Months Pregnant</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput} />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">How many children do you have currently</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Number of Family Members</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Are you a Below Poverty Line (BPL) cardholder?</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Are you from a rural or urban area?</span>
            <select className="select w-3/4 p-3 rounded-lg border border-black bg-white text-black" required>
              <option value="">Select an option</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
            </select>
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Are you a Scheduled Caste (SC) or Scheduled Tribe (ST)?</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Current Employment Status</span>
            <select className="select w-3/4 p-3 rounded-lg border border-black bg-white text-black" required>
              <option value="">Select an option</option>
              <option value="homemaker">Homemaker</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Annual Household Income</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput} />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Id Proof</span>
            <input type="file" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Address Proof</span>
            <input type="file" className="input  w-3/4 p-3 rounded-lg border border-black bg-white text-black"  />
          </label>
        </div>
        <div className="text-center mb-10">
          <button type="submit" className="btn btn-primary text-white hover:bg-white hover:text-black bg-black w-3/4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MaternitySchemeForm;
