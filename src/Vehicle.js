export default function Vehicle({ vehicles }) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {vehicles === 'car' && <span>🚗</span>}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {vehicles === 'truck' && <span>🚚</span>}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {vehicles === 'bus' && <span>🚌</span>}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {vehicles === 'motorcycle' && <span>🏍️</span>}
  </div>;
}