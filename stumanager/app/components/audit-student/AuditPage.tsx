import React from 'react'

interface Attributes{
  sid:number;
  operation : string;
  attribute : string;
  from : string;
  to : string;
  updateat : string;
}

var entry:Attributes = {
  sid:21104077,
  operation : 'update',
  attribute : 'name',
  from : 'Chirag',
  to : 'Chiranjeev',
  updateat : '20/11/22',
}



function AuditPage() {
  return (
    <div>
      <div className="App">
      <h1>Audit Tables</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>SID</th>
              <th>Operation</th>
              <th>Attribute</th>
              <th>From</th>
              <th>To</th>
              <th>Update At</th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{entry.sid}</td>
  <td>{entry.operation}</td>
  <td>{entry.attribute}</td>
<td>{entry.from}</td>
  <td>{entry.to}</td>
  <td>{entry.updateat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default AuditPage
