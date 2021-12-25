/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function compare(a, b) {
  if (a.session_id > b.session_id) {
    return 1
  } else if (a.session_id < b.session_id) {
    return -1
  }
  return 0
}

function result(sessions) {
  let res = []

  sessions = sessions.sort(compare);

  sessions.forEach(function (session, i) {

    // console.log(session)
    var sessionobj = res.find(obj => obj.session_id === session.session_id);

    if (sessionobj == undefined) {
      res.push({ session_id: session.session_id })
      sessionobj = res.find(sessionobj => sessionobj.session_id === session.session_id);

      sessionobj['time'] = session.time
      sessionobj['classes'] = []

    }

    var classobj = sessionobj.classes.find(classobj => classobj.class_id === session.class.class_id);

    if (classobj === undefined) {
      let temp = []
      sessionobj.classes.push({ class_id: session.class.class_id, name :  session.class.name, students: temp })
      classobj = sessionobj.classes.find(classobj => classobj.class_id === session.class.class_id);

      classobj.students.push({ student_id: session.student.student_id, name: session.student.name })

    } else {

      classobj.students.push({ student_id: session.student.student_id, name: session.student.name })
    }

  });


  return JSON.stringify(res, null, 2)

}

console.log(result(sessions));
