import React from 'react';

const QRCodeGenerator = ({ text }) => {
  const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(text)}`;

  return <img src={qrCodeUrl} alt="QR Code" />;
};

export default QRCodeGenerator;