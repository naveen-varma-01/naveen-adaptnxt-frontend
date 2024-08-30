import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="active" onClick={() => handleNavigation('/')}>Dashboard</li>
        <li onClick={() => handleNavigation('/inventory')}>Inventory</li>
        <li onClick={() => handleNavigation('/order')}>Order</li>
        <li onClick={() => handleNavigation('/returns')}>Returns</li>
        <li onClick={() => handleNavigation('/customers')}>Customers</li>
        <li onClick={() => handleNavigation('/shipping')}>Shipping</li>
        <li onClick={() => handleNavigation('/channel')}>Channel</li>
        <li onClick={() => handleNavigation('/integrations')}>Integrations</li>
        <li>Calculators <i className="bi bi-chevron-down down1"></i></li>
        <li>Reports <i className="bi bi-chevron-down down"></i></li>
        <li>Account <i className="bi bi-chevron-down down"></i></li>
      </ul>
    </div>
  );
};

export default Sidebar;
