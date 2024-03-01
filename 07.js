// function generateOtp() {
//     const min = 1000;
//     const max = 9999;
//     const otp = Math.floor(Math.random() * (max - min + 1)) + min;
//     return otp.toString();
//   }
  
//   console.log(`Here is your otp: ${generateOtp()}`);
  

function generateOtp() {
    return parseInt(1000 + Math.random() * 9000);
  }
  
  console.log('Here is your otp: ' + generateOtp());
