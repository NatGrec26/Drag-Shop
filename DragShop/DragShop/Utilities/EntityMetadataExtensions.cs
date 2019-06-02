using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DragShop.Utilities
{
    public static class EntityMetadataExtensions
    {
        public static string GetPrimaryKeyName(this Type entityType)
            => entityType != null ? $"PK_{Regex.Replace(entityType.Name, @"(?<!_)([A-Z])", "_$1")}" : null;

        public static string GetTableName(this Type entityType)
            => entityType?.Name;
    }
}
