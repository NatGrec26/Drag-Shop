using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using DragShop.Secrets;
using DragShop.Constants;

namespace DragShop.Services.Email
{
    public class SendGridEmailSender : IEmailSender
    {
        private string sendGridKey = "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";
        public SendGridEmailSender(IOptions<AppSettingsConfigKeyConstants> optionsAccessor)
        {
            Options = optionsAccessor.Value;
        }

        public AppSettingsConfigKeyConstants Options { get; }

        public Task SendEmailAsync(string email, string subject, string message)
        {
            if (subject.Equals("Confirm your email"))
            {
                return Execute(this.sendGridKey, subject, message, email);
            }
            else
            {
                return ExecuteCustomer(this.sendGridKey, subject, message, email);
            }
        }

        public Task Execute(string apiKey, string subject, string message, string email)
        {
            var client = new SendGridClient(apiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("jhonnyrodriguez214@gmail.com", "Drag&Shop New Password"),
                Subject = subject,
                PlainTextContent = message,
                HtmlContent = message
            };
            msg.AddTo(new EmailAddress(email));

            // Disable click tracking.
            // See https://sendgrid.com/docs/User_Guide/Settings/tracking.html
            msg.SetClickTracking(false, false);

            return client.SendEmailAsync(msg);
        }


        public Task ExecuteCustomer(string apiKey, string subject, string message, string email)
        {
            var client = new SendGridClient(apiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(email, "Drag&Shop new email"),
                Subject = subject,
                PlainTextContent = message,
                HtmlContent = message
            };
            msg.AddTo(new EmailAddress("jhonnyrodriguez214@gmail.com"));

            // See https://sendgrid.com/docs/User_Guide/Settings/tracking.html
            msg.SetClickTracking(false, false);

            return client.SendEmailAsync(msg);
        }
    }
}
