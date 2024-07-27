import React, { useState } from 'react';

const EducationSchemeForm = () => {
  const [isScholarship, setIsScholarship] = useState(false);

  const handleScholarshipChange = (e) => {
    setIsScholarship(e.target.checked);
  };
  const handleNonNegativeInput = (event) => {
    const value = event.target.value;
    if (value < 0) {
      event.target.value = 0;
    }
  };
  return (
    <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Education Scheme Eligibility</h1>
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
              onInput={handleNonNegativeInput}  />
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
            <span className="label-text text-lg font-semibold m-4 text-black">Level of Education</span>
            <select className="select w-3/4 p-3 rounded-lg border border-black bg-white text-black" required>
              <option value="">Select an option</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="higher_secondary">Higher Secondary</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">School/College Name</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Current Grade/Year</span>
            <input type="text" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Parental/Guardian Income</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required min="0" 
              onInput={handleNonNegativeInput} />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Number of Siblings</span>
            <input type="number" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-2">
            <span className="label-text text-lg font-semibold m-4 text-black">Do you have access to a computer/internet at home?</span>
            <input type="checkbox" className="checkbox checkbox-primary" required />
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
            <span className="label-text text-lg font-semibold m-4 text-black">Upload Documents (e.g., report cards, admission letter)</span>
            <input type="file" className="input w-3/4 p-3 rounded-lg border border-black bg-white text-black" required />
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary text-white hover:bg-white hover:text-black bg-black w-3/4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EducationSchemeForm;
