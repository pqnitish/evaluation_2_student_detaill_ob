function Student(name, roll_no, className, section, marks_of_5_subjects) {
  this.name = name;
  this.roll_no = roll_no;
  this.class = className;
  this.section = section;
  this.marks_of_5_subjects = marks_of_5_subjects;

  this.printTop3Subjects = function () {
    const subjects = [];
    for (let subject in this.marks_of_5_subjects) {
      subjects.push({
        name: subject,
        marks: this.marks_of_5_subjects[subject],
      });
    }

    const topThreeSubjects = [];
    for (let i = 0; i < 3 && subjects.length > 0; i++) {
      let maxSubjectIndex = 0;
      for (let j = 1; j < subjects.length; j++) {
        if (subjects[j].marks > subjects[maxSubjectIndex].marks) {
          maxSubjectIndex = j;
        }
      }
      topThreeSubjects.push(subjects[maxSubjectIndex].name);
      subjects.splice(maxSubjectIndex, 1);
    }
    console.log("Top 3 Subjects:");
    for (let i = 0; i < topThreeSubjects.length; i++) {
      console.log(`${i + 1}. ${topThreeSubjects[i]}`);
    }
  };

  this.printReportCard = function () {
    // Calculate percentage
    let totalMarks = 0;
    for (let subject in this.marks_of_5_subjects) {
      totalMarks += this.marks_of_5_subjects[subject];
    }
    const percentage =
      (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
    console.log("+--------------------+");
    console.log("|     REPORT CARD    |");
    console.log("+--------------------+");
    console.log(`| Name     - ${this.name}   |`);
    console.log(`| Roll no. - ${this.roll_no}      |`);
    console.log(`| Class    - ${this.class}        |`);
    console.log(`| Section  - ${this.section}        |`);

    for (let subject in this.marks_of_5_subjects) {
      console.log(
        `| ${subject}  - ${this.marks_of_5_subjects[subject]}      |`
      );
    }

    console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
    console.log("+--------------------+");
  };
}

const nitish = new Student("Nitish", 13, "X", "A", {
  science: 73,
  maths: 75,
  social_science: 79,
  english: 80,
  hindi: 67,
});

const rahul = new Student("Rahul", 10, "X", "B", {
  science: 80,
  maths: 78,
  social_science: 60,
  english: 97,
  hindi: 77,
});
nitish.printTop3Subjects();
nitish.printReportCard();
rahul.printTop3Subjects();
rahul.printReportCard();
