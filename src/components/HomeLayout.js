import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h1>Rumah Makan - Nasi Padang</h1>
        </div>
      </div>

      <div className="row g-2">
        <div className="col-12">
          <h4>Cabang:</h4>
        </div>

        {children}
      </div>
    </>
  );
}
