import { atom, selector } from 'recoil';
import { v1 } from 'uuid'; //atom key 오류 방지 위한 난수생성하는 uuid 모듈
import { serialize } from 'v8';

export const minuteState = atom({
  key: `minutesAtom/${v1()}`, //v1() 실행해야함
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
