function dayOfTheWeek(day: number): string {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    return Days[day] ?? "error"
}

console.log(dayOfTheWeek(-1))