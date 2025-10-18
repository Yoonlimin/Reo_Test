import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (to, link) => {
  const msg = {
    to,
    from: process.env.EMAIL_FROM,
    subject: 'Welcome to REO - Verify Your Email',
    text: `Welcome to REO! Click the link to verify your email: ${link}. This link expires in 15 minutes.`,
    html: `
      <h2>Welcome to REO!</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${link}">${link}</a>
      <p>This link expires in 15 minutes.</p>
      <br />
      <p style="font-size: 12px; color: #888;">
        REO Business Card • Bang Sao Thong, Thailand
      </p>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error.message);
  }
};

export default sendVerificationEmail;
