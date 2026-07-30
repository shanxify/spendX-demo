import React from "react";

const UPITransactionStatement = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 border">
      <h2 className="text-xl font-bold text-gray-800">
        Upload UPI Transaction Statement
      </h2>

      <p className="text-gray-600 mt-2">
        Upload your PhonePe, Google Pay, Paytm or BHIM UPI transaction
        statement in PDF format.
      </p>

      <div className="mt-5 space-y-2">
        <div>✅ Supported Format : PDF PDF PDF </div>
        <div>✅ Maximum File Size : 10 MB</div>
        <div>✅ Auto Transaction Detection</div>
        <div>✅ Secure File Processing</div>
      </div>

      <button
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Select UPI Statement
      </button>
    </div>
  );
};

export default UPITransactionStatement;