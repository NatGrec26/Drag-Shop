using System;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text;

namespace DragShop.Dtos.Course
{
    [DataContract]
    public class CreateCourseRequest
    {
        /// <summary>
        /// The course name.
        /// </summary>
        [DataMember]
        [MaxLength(100)]
        public string CourseName { get; set; }
    }
}
