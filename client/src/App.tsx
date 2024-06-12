import React, { useState } from 'react';
import './App.css';
import { Customer } from './components/component/customer';
import { Orders } from './components/component/orders';
import { Button } from "@/components/ui/button";

function App() {
  const [showCustomer, setShowCustomer] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const handleShowCustomer = () => {
    setShowCustomer(true);
    setShowOrders(false); // Hide Orders component when showing Customer
  };

  const handleShowOrders = () => {
    setShowOrders(true);
    setShowCustomer(false); // Hide Customer component when showing Orders
  };

  return (
    <div>
      <div  style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }} className="space-x-2">
        <Button onClick={handleShowCustomer}>Customer</Button>
        <Button onClick={handleShowOrders}>Orders</Button>
      </div>
      <div>
        {showCustomer && <Customer />}
      </div>
      <div>
        {showOrders && <Orders />}
      </div>
    </div>
  );
}

export default App;
