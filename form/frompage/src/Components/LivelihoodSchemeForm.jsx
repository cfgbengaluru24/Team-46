import React, { useState } from 'react';

const LivelihoodSchemeForm = () => {
  const [hasAdditionalIncome, setHasAdditionalIncome] = useState(false);
  const [lookingForTraining, setLookingForTraining] = useState(false);

  const handleAdditionalIncomeChange = (e) => {
    setHasAdditionalIncome(e.target.checked);
  };

  const handleTrainingChange = (e) => {
    setLookingForTraining(e.target.checked);
  };
  const handleNonNegativeInput = (event) => {
    const value = event.target.value;
    if (value < 0) {
      event.target.value = 0;
    }
  };
  return (
    <div className=" w-3/4  mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Livelihood Scheme Eligibility</h1>
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
              onInput={handleNonNegativeInput}/>
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
            <span className="label-text text-lg font-semibold m-4 text-black">Current Occupation</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Monthly Income</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput}  />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Years of Experience in Current Occupation</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput} />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Do you have any additional sources of income?</span>
            <input type="checkbox" className="checkbox checkbox-primary" onChange={handleAdditionalIncomeChange} />
          </label>
        </div>
        {hasAdditionalIncome && (
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="label-text text-lg font-semibold m-4 text-black">Additional Income Details</span>
              <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
            </label>
          </div>
        )}
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Are you looking for training in any specific skills?</span>
            <input type="checkbox" className="checkbox checkbox-primary" onChange={handleTrainingChange} />
          </label>
        </div>
        {lookingForTraining && (
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="label-text text-lg font-semibold m-4 text-black">Training Details</span>
              <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
            </label>
          </div>
        )}
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Educational Qualification</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Number of Dependents</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput}  />
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
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Upload Documents (e.g., ID proof, income proof)</span>
            <input type="file" className="input w-full p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary text-white hover:bg-white hover:text-black bg-black w-3/4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LivelihoodSchemeForm;
