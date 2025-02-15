exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Contact Form Confirmation</title>
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
        border-radius: 40px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        /* border: 2px solid #ffb400; */
      }

      .logoH {
        /* padding-top: 12px; */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }

      .h1Logo {
        color: #ffb400;
      }

      .message {
        font-size: 22px;
        font-weight: bold;
        color: #bfdc98;
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

      .highlight1 {
        font-weight: bold;
        color: #e84854;
      }

      .highlight {
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
      <div class="logoH">
        <a href="https://edumeet-project.vercel.app">
          <img
            class="logo"
            src="../edumeet-exact.png"
            alt="Edumeet - Learning Hub Logo"
            height="50px"
            width="52px"
          />
        </a>
        <h1 class="h1Logo">EduMeet</h1>
      </div>
      <img
        src="../confirmMail.png"
        alt="Outlook"
        height="120px"
        width="130px"
      />
      <div class="message">Contact Form Confirmation</div>
      <div class="body">
        <p>Dear ${firstname} ${lastname}, 👋</p>
        <p>
          Thank you for contacting us. We have received your message 📬 and will
          respond to you as soon as possible.
        </p>
        <p>Here are the details you provided:</p>
        <p>Name: <span class="highlight1">${firstname} ${lastname}</span></p>
        <p>Email: <span class="highlight">${email}</span></p>
        <p>Phone Number: <span class="highlight">${phoneNo}</span></p>
        <p>Message: <span class="highlight">${message}</span></p>
      </div>
      <div class="support">
        If you have any further questions or need immediate assistance, please
        feel free to reach out to us at
        <a href="mailto:info@edumeet.com">info@edumeet.com</a>. We are here to
        help!😊
      </div>
    </div>
  </body>
</html>
`;
};
