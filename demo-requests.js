export const demoRequests = [
  {
    id: 'req_1',
    studentId: 'stud_1',
    studentName: 'Айдос Серікұлы',
    category: 'repair',
    priority: 'high',
    subject: 'Шам жанбыршақ',
    description: 'Бөлмедегі шам жанып тұрмайды, ауыстыру қажет',
    status: 'in_progress',
    assignedTo: 'staff_1',
    createdAt: '2024-10-15T09:00:00Z',
    updatedAt: '2024-10-15T14:00:00Z',
    comments: [
      {
        author: 'staff_1',
        authorName: 'Мария Петрова',
        text: 'Электрик шақыртылды, ертең келеді',
        createdAt: '2024-10-15T14:00:00Z',
      },
    ],
  },
  {
    id: 'req_2',
    studentId: 'stud_2',
    studentName: 'Айгүл Нұрланова',
    category: 'cleaning',
    priority: 'medium',
    subject: 'Дәлізде тазалық жоқ',
    description: '2-ші қабаттағы дәліз бірнеше күннен бері тазаланбаған',
    status: 'resolved',
    assignedTo: 'staff_1',
    createdAt: '2024-10-10T11:00:00Z',
    updatedAt: '2024-10-11T09:00:00Z',
    comments: [
      {
        author: 'staff_1',
        authorName: 'Мария Петрова',
        text: 'Тазалау жұмыстары орындалды',
        createdAt: '2024-10-11T09:00:00Z',
      },
    ],
  },
];