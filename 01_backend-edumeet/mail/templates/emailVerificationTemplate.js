const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification Email</title>
    <style>
      body {
        background-color: #f8f9fa;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        max-width: 500px;
        width: 100%;
        background-color: #1d1d1d;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        border: 2px solid #ffb400;
      }

      .logo {
        max-width: 180px;
        margin-bottom: 20px;
      }

      .message {
        font-size: 22px;
        font-weight: bold;
        color: #ffb400;
        margin-bottom: 15px;
      }

      .body {
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 20px;
      }

      .body p {
        margin: 10px 0;
      }

      .highlight {
        font-size: 24px;
        font-weight: bold;
        color: #ffb400;
      }

      .support {
        font-size: 14px;
        color: #888;
        margin-top: 25px;
      }

      .support a {
        color: #a855f7;
        text-decoration: none;
      }

      .support a:hover {
        color: #d63384;
      }

      /* Responsive design */
      @media (max-width: 600px) {
        .container {
          padding: 20px;
        }

        .message {
          font-size: 20px;
        }

        .body {
          font-size: 15px;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <a href="https://edummet-edtech-project.vercel.app">
        <img class="logo" src="logo.png" alt="Edumeet - Learning Hub Logo" />
      </a>
      <div class="message">OTP Verification Email</div>
      <div class="body">
        <p>Dear User,</p>
        <p>
          Thank you for registering with Edumeet. To complete your registration,
          please use the following OTP (One-Time Password) to verify your
          account:
        </p>
        <h2 class="highlight">${otp}</h2>
        <p>
          This OTP is valid for 5 minutes. If you did not request this
          verification, please disregard this email. Once your account is
          verified, you will have access to our platform and its features.
        </p>
      </div>
      <div class="support">
        If you have any questions or need assistance, please feel free to reach
        out to us at
        <a href="mailto:info@edumeet.com">info@edumeet.com</a>. We are here to
        help!
      </div>
    </div>
  </body>
</html>`;
};
module.exports = otpTemplate;
