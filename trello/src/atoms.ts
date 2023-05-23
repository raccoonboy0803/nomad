import { atom, selector } from 'recoil';
import { v1 } from 'uuid'; // 난수 생성

export const minuteState = atom({
  key: `minutesAtom/${v1()}`,
  default: 0,
});

export const hourSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
