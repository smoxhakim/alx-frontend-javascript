export default function getListStudentIds(studentList, location) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.filter((student) => student.location === location);
}
