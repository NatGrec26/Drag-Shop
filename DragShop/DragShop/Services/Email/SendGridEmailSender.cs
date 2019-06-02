using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Services.Email
{
    public class SendGridEmailSender //: IEmailSender
    {
        // public SendGridEmailSender(IConfiguration configuration)
        // {
        //     Options = configuration.GetSection(SendGridSection).Get<SendGridSettings>();
        // }

        // public SendGridSettings Options { get; } //set only via Secret Manager

        // public Task SendEmailAsync(string email, string subject, string message)
        // {
        //    return Execute(Options.Key, subject, message, email);
        // }

        // public Task Execute(string apiKey, string subject, string message, string email)
        //{
        //     var client = new SendGridClient(apiKey);
        //     var msg = new SendGridMessage()
        //     //{
        //     //    From = new EmailAddress(Options.SendEmailFrom, Options.SendEmailName),
        //     //    Subject = subject,
        //     //    PlainTextContent = message,
        //     //    HtmlContent = message
        //     //};
        //     //msg.AddTo(new EmailAddress(email));

        //     // Disable click tracking.
        //     //// See https://sendgrid.com/docs/User_Guide/Settings/tracking.html
        //     //msg.SetClickTracking(false, false);

        //     return client.SendEmailAsync(msg);
        //}
    }
}
