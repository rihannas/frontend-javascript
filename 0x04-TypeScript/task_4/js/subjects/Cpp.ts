import Subject from './Subject';

export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
}

export class Cpp extends Subject {
  teacher: Teacher | undefined;

  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (
      this.teacher?.experienceTeachingC &&
      this.teacher.experienceTeachingC > 0
    ) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
