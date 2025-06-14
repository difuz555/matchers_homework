import healthSort from "../healthsorting";

const dataList = [
    { name: 'ведьма', health: 150 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

test('check sorting characters by health', () => {
    const result = healthSort(dataList);
    expect(result).toEqual([
        { name: 'ведьма', health: 150 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
})