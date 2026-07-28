import office from "./office.jpg";

function App() {

  const heading = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad"
    },
    {
      Name: "WeWork",
      Rent: 85000,
      Address: "Bangalore"
    }
  ];

  return (
    <div style={{ marginLeft: "60px" }}>
      <h1>{heading}, at Affordable Range</h1>

      {officeList.map((officeItem, index) => (

        <div key={index} style={{ marginBottom: "40px" }}>

          <img
            src={office}
            alt="Office Space"
            width="300"
            height="220"
          />

          <h2>Name: {officeItem.Name}</h2>

          <h3
            style={{
              color: officeItem.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {officeItem.Rent}
          </h3>

          <h3>Address: {officeItem.Address}</h3>

        </div>

      ))}
    </div>
  );
}

export default App;
