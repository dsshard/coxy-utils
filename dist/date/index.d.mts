declare function dateFormat(template: string, date?: Date | number): string;
declare const dateAddDays: (date: number | Date, days: number) => Date;

export { dateAddDays, dateFormat };
