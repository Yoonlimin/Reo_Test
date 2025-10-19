import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (to, link) => {
    const msg = {
        to,
        from: process.env.EMAIL_FROM, // Using an unauthenticated sender will likely result in spam folder delivery.
        subject: 'Verify your email - Please check SPAM/Junk folder if not found',
        html: `
        <h2>Welcome to REO!</h2>
        
        <p style="color: red; font-weight: bold; border: 1px solid #ffdddd; padding: 10px; background-color: #fffafa; border-radius: 5px;">
            ⚠️ If this email is not in your main inbox, please check your 
            <strong>SPAM or Junk folder</strong>.
        </p>

        <p>Click the link below to verify your email:</p>
        <a href="${link}">${link}</a>
        <p>This link expires in 15 minutes.</p>
    `,
    };

    // Recommended Best Practice: Always include a 'text' version for better deliverability
    if (!msg.text) {
        msg.text = `Welcome to REO!\n\nIf this email is not in your main inbox, please check your SPAM or Junk folder.\n\nClick the link below to verify your email: ${link}\n\nThis link expires in 15 minutes.`;
    }

    await sgMail.send(msg);
};

export default sendVerificationEmail;