using dotnet_angular.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_angular.Service
{
    public interface IStudentService
    {
        bool CreateStudent(StudentEntity entity);
        List<StudentEntity> GeadAllStudents();
        StudentEntity GetStudentById(int id);
        bool UpdateStudent(StudentEntity entity);
        bool DeleteStudent(int id);
        List<StudentEntity> GetStudentByCondition(StudentModel post);
    }
}
