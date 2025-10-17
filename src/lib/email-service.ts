// Email service for sending notifications
// This is a placeholder implementation - integrate with your preferred email service

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // TODO: Integrate with your email service (SendGrid, AWS SES, etc.)
  // For now, we'll just log the email content
  
  console.log('📧 Email would be sent:');
  console.log('To:', options.to);
  console.log('Subject:', options.subject);
  console.log('Content:', options.html);
  
  // Example integration with SendGrid (uncomment and configure to use):
  /*
  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: options.to,
      from: process.env.FROM_EMAIL || 'noreply@nirmalapumps.com',
      subject: options.subject,
      html: options.html,
      text: options.text,
    };
    
    await sgMail.send(msg);
    console.log('✅ Email sent successfully via SendGrid');
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
  */
  
  // Return true to simulate successful sending
  return true;
}

export async function sendPasswordResetEmail(email: string, name: string, resetLink: string): Promise<boolean> {
  const emailOptions: EmailOptions = {
    to: email,
    subject: 'Welcome to Nirmala Pumps - Set Your Password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px;">
          <img src="https://www.nirmalapumps.com/wp-content/uploads/2020/03/Nirmala-logo.jpg" 
               alt="Nirmala Pumps" style="height: 60px; object-fit: contain;">
        </div>
        
        <h2 style="color: #333;">Welcome to Nirmala Pumps, ${name}!</h2>
        
        <p>You have been added as an employee to the Nirmala Pumps system. To get started, please set your password by clicking the link below:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" 
             style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Set Your Password
          </a>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          If the button doesn't work, copy and paste this link into your browser:<br>
          <a href="${resetLink}">${resetLink}</a>
        </p>
        
        <p style="color: #666; font-size: 14px;">
          This link will expire in 1 hour for security reasons.
        </p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          This email was sent by Nirmala Pumps Lead Management System.<br>
          If you didn't expect this email, please contact your administrator.
        </p>
      </div>
    `,
    text: `
      Welcome to Nirmala Pumps, ${name}!
      
      You have been added as an employee to the Nirmala Pumps system. 
      To get started, please set your password by visiting this link:
      
      ${resetLink}
      
      This link will expire in 1 hour for security reasons.
      
      If you didn't expect this email, please contact your administrator.
    `
  };

  return sendEmail(emailOptions);
}

export async function sendEmployeeWelcomeEmail(email: string, name: string, temporaryPassword: string): Promise<boolean> {
  const emailOptions: EmailOptions = {
    to: email,
    subject: 'Welcome to Nirmala Pumps - Your Account Details',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px;">
          <img src="https://www.nirmalapumps.com/wp-content/uploads/2020/03/Nirmala-logo.jpg" 
               alt="Nirmala Pumps" style="height: 60px; object-fit: contain;">
        </div>
        
        <h2 style="color: #333;">Welcome to Nirmala Pumps, ${name}!</h2>
        
        <p>You have been added as an employee to the Nirmala Pumps Lead Management System.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Login Details:</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Temporary Password:</strong> <code style="background-color: #e9ecef; padding: 2px 4px; border-radius: 3px;">${temporaryPassword}</code></p>
        </div>
        
        <p style="color: #dc3545; font-weight: bold;">⚠️ Please change your password immediately after your first login for security.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/login" 
             style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Login to Your Account
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          This email was sent by Nirmala Pumps Lead Management System.<br>
          If you didn't expect this email, please contact your administrator.
        </p>
      </div>
    `,
    text: `
      Welcome to Nirmala Pumps, ${name}!
      
      You have been added as an employee to the Nirmala Pumps Lead Management System.
      
      Your Login Details:
      Email: ${email}
      Temporary Password: ${temporaryPassword}
      
      ⚠️ Please change your password immediately after your first login for security.
      
      Login at: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/login
      
      If you didn't expect this email, please contact your administrator.
    `
  };

  return sendEmail(emailOptions);
}
