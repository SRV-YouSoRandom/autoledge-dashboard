// src/pages/RaaSPage.jsx
import React, { useState } from 'react';
import CompanyCreationForm from '../components/CompanyCreationForm';
import CompanySummary from '../components/CompanySummary';

const RaaSPage = () => {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    companyId: '',
    tokenId: '',
    walletAddressPrefix: '0x',
    mailingName: '',
    address: '',
    state: 'Not Applicable',
    country: 'India',
    pincode: '',
    telephone: '',
    mobile: '+91 ',
    fax: '',
    email: '',
    website: '',
    financialYearBeginning: '1-Apr-25',
    booksBeginning: '1-Apr-25'
  });

  const handleCompanyDataChange = (newData) => {
    setCompanyData(newData);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md">
            <CompanyCreationForm 
              companyData={companyData}
              onDataChange={handleCompanyDataChange}
            />
          </div>
        </div>
        
        <div className="w-full lg:w-96">
          <CompanySummary companyData={companyData} />
        </div>
      </div>
    </div>
  );
};

export default RaaSPage;