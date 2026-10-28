import { STORAGE_KEYS, ROLES } from '../config/constants.js';
import { getAll, upsert } from '../storage/local-storage.js';
import { generateId } from '../utils/id-generator.js';

export const authService = {
  login(email, password) {
    const users = getAll(STORAGE_KEYS.USERS, []);
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) {
      throw new Error('Email немесе құпиясөз қате');
    }
    const { password: _pw, ...safeUser } = user;
    return safeUser;
  },

  register({ email, password, firstName, lastName, phone }) {
    const users = getAll(STORAGE_KEYS.USERS, []);

    // Email бар ма?
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      throw new Error('Бұл email тіркелген');
    }

    // Жаңа қолданушы
    const userId = generateId('user');
    const newUser = {
      id: userId,
      email: email.toLowerCase(),
      password: password,
      role: ROLES.STUDENT,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: (phone || '').trim(),
      avatar: null,
      createdAt: new Date().toISOString(),
    };

    // Users-ке сақтау
    const allUsers = [...users, newUser];
    localStorage.setItem(
      'dormsystem_users',
      JSON.stringify(allUsers)
    );

    // ✅ МАҢЫЗДЫ: Студент жазбасын да жасау!
    const students = getAll(STORAGE_KEYS.STUDENTS, []);
    const studentId = generateId('stud');
    const newStudent = {
      id: studentId,
      userId: userId,
      studentId: 'ST' + Date.now().toString().slice(-7),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase(),
      phone: (phone || '').trim(),
      faculty: '',
      group: '',
      course: 1,
      iin: '',
      dateOfBirth: '',
      gender: '',
      roomId: null,
      bedId: null,
      buildingId: null,
      status: 'active',
      checkInDate: null,
      address: '',
    };
    localStorage.setItem(
      'dormsystem_students',
      JSON.stringify([...students, newStudent])
    );

    // Жаңа юзерді қайтару (password-сыз)
    const { password: _pw, ...safeUser } = newUser;
    return safeUser;
  },

  findByEmail(email) {
    return getAll(STORAGE_KEYS.USERS, [])
      .find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },
};