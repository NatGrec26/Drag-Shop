using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragShop.Security
{
    public interface ISecurityHelper
    {
        bool CheckHashMatch(string value, string salt, string hash);
        string CreateSalt();
        string GenerateRandomToken();
        string HashContent(string value, string salt);
    }
}
