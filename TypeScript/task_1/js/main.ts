interface Teacher {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
  [propName: string]: any
}

interface Directors extends Teacher {
  numberofReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}.${lastName} `
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

