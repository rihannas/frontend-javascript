// Import the Teacher interface or type from its module, or define it here if not available
import { Teacher } from './Teacher';

export class Subject {
  teacher: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
