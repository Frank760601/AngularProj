using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using dotnet_angular.Entity;
using dotnet_angular.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace dotnet_angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private IStudentService studentService;
        

        public StudentController(IStudentService service)
        {
            this.studentService = service;
        }

        [Route("create-student")]
        public bool CreateStudent(StudentEntity student)
        {
            return studentService.CreateStudent(student);
        }

        [Route("get-student-byCondition")]
        public List<StudentEntity> GetStudentsByCondition([FromBody] StudentModel post)
        {
            Thread.Sleep(10000);
            return studentService.GetStudentByCondition(post);
        }

        [Route("get-student-byId")]
        public StudentEntity GetStudentsById([FromQuery(Name = "id")] int id)
        {
            Thread.Sleep(10000);
            return studentService.GetStudentById(id);
        }

        [Route("get-all-students")]
        public List<StudentEntity> GetAllStudents()
        {
            Thread.Sleep(10000);
            return studentService.GeadAllStudents();
        }

        [Route("update-student")]
        public bool UpdateStudent([FromBody] StudentEntity student)
        {
            return studentService.UpdateStudent(student);
        }

        [Route("delete-student")]
        public bool DeleteStudent([FromQuery(Name = "id")] int id)
        {
            return studentService.DeleteStudent(id);
        }
        [Route("get-sex")]
        public List<SelectListItem> GetSummaries()
        {
            
            List<SelectListItem> Summaries = new List<SelectListItem>();
            Summaries.Add(new SelectListItem { Value = "1", Text = "男" });
            Summaries.Add(new SelectListItem { Value = "2", Text = "女" });
            return Summaries;
        }
    }
}
