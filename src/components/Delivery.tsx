import React from 'react';
import Checkout from '@/components/Checkout';
import yassirLogo from '@/assets/yassir-logo.png'; // Update the path to your logo
import weeWeeDeliveryLogo from '@/assets/weeweedelivery-logo.png'; 

const DeliveryOptions: React.FC = () => {
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Delivery Options</h1>
    <div className="flex flex-row justify-center items-center gap-3 mb-5">
      <Checkout logo={weeWeeDeliveryLogo} text="WeeWee" />
      <Checkout logo={yassirLogo} text="Yassir" />
    </div>
    </>
  );
};

export default DeliveryOptions;