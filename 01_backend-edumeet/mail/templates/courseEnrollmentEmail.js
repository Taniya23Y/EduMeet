exports.courseEnrollmentEmail = (courseName, name) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Course Registration Confirmation</title>
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
      }

      .logo {
        max-width: 180px;
        margin-bottom: 20px;
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

      .highlight {
        font-weight: bold;
        color: #e84854;
      }

      .logoH {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }

      .h1Logo {
        padding-bottom: 16px;
        color: #ffb400;
      }

      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #c084fc;
        color: white;
        text-decoration: none;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
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
        src="./courseEnrollment1.png"
        alt="courseEnrollment"
        height="150px"
        width="190px"
      />
      <div class="message">Course Registration Confirmation</div>
      <div class="body">
        <p>Dear ${name}, 👋</p>
        <p>
          You have successfully registered for the course
          <span class="highlight">"${courseName}"</span>. We are excited to have
          you as a participant! ✨
        </p>
        <p>
          Please log in to your learning dashboard to access the course
          materials and start your learning journey🏇.
        </p>
        <a class="cta" href="https://edumeet-project.vercel.app/dashboard"
          >Go to Dashboard</a
        >
      </div>
      <div class="support">
        If you have any questions or need assistance, please feel free to reach
        out to us at
        <a href="mailto:info@edumeet.com">info@edumeet.com</a>. We are here to
        help!😊
      </div>
    </div>
  </body>
</html>`;
};
