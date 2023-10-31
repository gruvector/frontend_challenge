// This is test task.

const addDays = (date, days) => {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + days);
  return _date;
}

const today = new Date();

module.exports = {
  users: Array.from({ length: 2 }, (_, i) => ({
    id: i + 1,
    name: `user_${i + 1}`,
  })),
  schedules: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    user_id: i < 5 ? 1 : 2,
    date: addDays(today, i),
  })),
};


