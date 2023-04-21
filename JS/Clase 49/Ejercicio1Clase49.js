const now = new Date();
const before = new Date("October 8 2019 16:30:00");
const diff = now.getTime() - before.getTime();
console.log(diff);

const minutes = Math.round(diff / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);

console.log(minutes, hours, days);
console.log(`This post was written ${days} ago`)