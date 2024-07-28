import React from 'react';
import './SchemeList.css';

const schemes = [
  {
    name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    eligibilityCriteria: [
      "Pregnant women and lactating mothers.",
      "Age: 19 years and above.",
      "First living child of the family.",
      "Institutional delivery and child immunization must be ensured."
    ],
    documentRequirements: [
      "Identity Proof: Aadhaar card.",
      "Address Proof: Aadhaar card or any government-issued address proof (e.g., Voter ID, Ration Card)."
    ]
  },
  {
    name: "Indira Gandhi Matritva Sahyog Yojana (IGMSY)",
    eligibilityCriteria: [
      "Pregnant and lactating women.",
      "Age: 19 years and above.",
      "Two live births are supported under this scheme.",
      "The beneficiary should not be covered under any other similar scheme."
    ],
    documentRequirements: [
      "Identity Proof: Aadhaar card.",
      "Address Proof: Aadhaar card or any other valid address proof (e.g., Voter ID, Ration Card)."
    ]
  },
  {
    name: "Maternity Benefit (Amendment) Act, 2017",
    eligibilityCriteria: [
      "Women working in establishments with 10 or more employees.",
      "Should have worked for at least 80 days in the 12 months preceding the date of expected delivery.",
      "Applies to both private and public sector employees."
    ],
    documentRequirements: [
      "Identity Proof: Aadhaar card, Voter ID, or any government-issued ID.",
      "Address Proof: Aadhaar card, Voter ID, or utility bills."
    ]
  },
  {
    name: "Janani Suraksha Yojana (JSY)",
    eligibilityCriteria: [
      "Pregnant women below poverty line (BPL) and SC/ST categories.",
      "Should be registered for antenatal care.",
      "Institutional delivery is a must to avail the benefits.",
      "Must be 19 years or older."
    ],
    documentRequirements: [
      "Identity Proof: Aadhaar card, Voter ID, or any government-issued ID.",
      "Address Proof: Aadhaar card, Voter ID, or any other valid address proof (e.g., Ration Card)."
    ]
  },
  {
    name: "Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)",
    eligibilityCriteria: [
      "Pregnant women residing in Tamil Nadu.",
      "Should have completed 12 weeks of pregnancy.",
      "Should belong to economically weaker sections or BPL families.",
      "First two live births are considered under this scheme."
    ],
    documentRequirements: [
      "Identity Proof: Aadhaar card.",
      "Address Proof: Aadhaar card or any other valid address proof (e.g., Ration Card, Voter ID)."
    ]
  }
];

const SchemeList = () => {
  return (
    <div className="scheme-list">
      <h1>Maternity Schemes for Indians</h1>
      {schemes.map((scheme, index) => (
        <div key={index} className="scheme">
          <h2>{scheme.name}</h2>
          <h3>Eligibility Criteria:</h3>
          <ul>
            {scheme.eligibilityCriteria.map((criteria, idx) => (
              <li key={idx}>{criteria}</li>
            ))}
          </ul>
          <h3>Document Requirements:</h3>
          <ul>
            {scheme.documentRequirements.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>
        
      ))}
      <Link to='/maternity'>
       <button 
            className="register-button">Register New User</button>
            </Link>
    </div>
  );
};

export default SchemeList;
