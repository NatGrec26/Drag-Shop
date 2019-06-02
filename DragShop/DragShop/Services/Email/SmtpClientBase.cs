using DragShop.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace DragShop.Services.Email
{
    public abstract class SmtpClientBase<TClientSettings> : IEmailSender
        where TClientSettings : SmtpClientSettings
    {
        public SmtpClientBase(IConfiguration configuration)
        {
            Options = configuration.GetSection(this.ConfigSection).Get<TClientSettings>();
        }

        public abstract string ConfigSection { get; }

        public abstract bool EnableSsl { get; }

        public abstract bool IsBodyHtml { get; }

        public abstract string Host { get; }

        public virtual TClientSettings Options { get; } //set only via Secret Manager

        public abstract int Port { get; }

        public virtual async Task SendEmailAsync(string email, string subject, string message)
        {
            using (var client = new SmtpClient(this.Host))
            {
                client.Port = this.Port;
                client.UseDefaultCredentials = false;
                client.EnableSsl = this.EnableSsl;
                client.Credentials = new NetworkCredential(Options.SendEmailFrom, Options.Password);

                using (var mailMessage = new MailMessage())
                {
                    mailMessage.From = new MailAddress(Options.SendEmailFrom, Options.SendEmailName);
                    mailMessage.Body = message;
                    mailMessage.Subject = subject;
                    mailMessage.IsBodyHtml = this.IsBodyHtml;
                    mailMessage.To.Add(email);
                    await client.SendMailAsync(mailMessage);
                };
            }
        }
    }
}
