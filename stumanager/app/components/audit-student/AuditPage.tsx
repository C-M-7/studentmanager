import React from 'react'

function AuditPage() {
  return (
    <div className="overflow-x-auto">
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Log Table
      </h1>
      <table className="table table-xs bg-white">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AuditPage