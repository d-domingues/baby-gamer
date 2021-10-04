import { animate, group, keyframes, query, style } from '@angular/animations';
import { Injectable } from '@angular/core';

type Position = 'top' | 'middle' | 'bottom';
type Direction = 'left' | 'right';

const right = keyframes(['50%', '60%', '68%', '72%', '75%', '72%', '68%', '60%', '50%'].map((left) => style({ left })));
const left = keyframes(['50%', '40%', '32%', '28%', '25%', '28%', '32%', '40%', '50%'].map((left) => style({ left })));
const center = keyframes([]);

const top = style({ top: '35%', zIndex: 1 });
const middle = style({ top: '55%', zIndex: 2 });
const bottom = style({ top: '75%', zIndex: 3 });

@Injectable({ providedIn: 'root' })
export class CupMovesService {
  randDirections = (len = 1): any => {
    const arr = [left, right, center];

    if (len === 1 || len === 2) {
      const removed = arr.splice(Math.floor(Math.random() * 3), 1);

      if (len === 1) {
        return removed[0];
      }
    }

    return arr.sort(() => Math.random() - 0.5);
  };

  move1 = (timings: string | number, { order, moves }) => {
    const sides = this.randDirections(2);

    return {
      order: [order[0], order[2], order[1]],
      moves: [
        ...moves,
        group([
          query(`.pos${order[0]}`, group([animate(timings, top), animate(timings, this.randDirections())])),
          query(`.pos${order[1]}`, group([animate(timings, bottom), animate(timings, sides[0])])),
          query(`.pos${order[2]}`, group([animate(timings, middle), animate(timings, sides[1])])),
        ]),
      ],
    };
  };

  move2 = (timings: string | number, { order, moves }) => {
    const sides = this.randDirections(2);

    return {
      order: [order[1], order[0], order[2]],
      moves: [
        ...moves,
        group([
          query(`.pos${order[0]}`, group([animate(timings, middle), animate(timings, sides[0])])),
          query(`.pos${order[1]}`, group([animate(timings, top), animate(timings, sides[1])])),
          query(`.pos${order[2]}`, group([animate(timings, bottom), animate(timings, this.randDirections())])),
        ]),
      ],
    };
  };

  move3 = (timings: string | number, { order, moves }) => {
    const sides = this.randDirections(3);

    return {
      order: [order[2], order[1], order[0]],
      moves: [
        ...moves,
        group([
          query(`.pos${order[0]}`, group([animate(timings, bottom), animate(timings, sides[0])])),
          query(`.pos${order[1]}`, group([animate(timings, middle), animate(timings, sides[1])])),
          query(`.pos${order[2]}`, group([animate(timings, top), animate(timings, sides[2])])),
        ]),
      ],
    };
  };

  move4 = (timings: string | number, { order, moves }) => {
    const sides = this.randDirections(3);

    return {
      order: [order[1], order[2], order[0]],
      moves: [
        ...moves,
        group([
          query(`.pos${order[0]}`, group([animate(timings, bottom), animate(timings, sides[2])])),
          query(`.pos${order[1]}`, group([animate(timings, top), animate(timings, sides[Math.floor(Math.random() * 2)])])),
          query(`.pos${order[2]}`, group([animate(timings, middle), animate(timings, sides[Math.floor(Math.random() * 2)])])),
        ]),
      ],
    };
  };

  move5 = (timings: string | number, { order, moves }) => {
    const sides = this.randDirections(3);

    return {
      order: [order[2], order[0], order[1]],
      moves: [
        ...moves,
        group([
          query(`.pos${order[0]}`, group([animate(timings, middle), animate(timings, sides[Math.floor(Math.random() * 2)])])),
          query(`.pos${order[1]}`, group([animate(timings, bottom), animate(timings, sides[Math.floor(Math.random() * 2)])])),
          query(`.pos${order[2]}`, group([animate(timings, top), animate(timings, sides[2])])),
        ]),
      ],
    };
  };

  generateMoves = (nMoves: number, timings: string | number) => {
    const moves = [this.move1, this.move2, this.move3, this.move4, this.move5];

    const initial = group([
      query('.cup.pos1', [
        style({ opacity: 0, transform: 'translate(-50%,-100%)' }),
        animate('1.5s', style({ opacity: 1, transform: 'translate(-50%,-50%)' })),
      ]),
      query('.cup.pos2', [
        style({ opacity: 0, transform: 'translate(-50%,-100%)' }),
        animate('1.5s', style({ opacity: 1, transform: 'translate(-50%,-50%)' })),
      ]),
      query('.cup.pos3', [
        style({ opacity: 0, transform: 'translate(-50%,-100%)' }),
        animate('1.5s', style({ opacity: 1, transform: 'translate(-50%,-50%)' })),
      ]),
    ]);

    return Array.from(Array(nMoves).keys()).reduce(
      (acc, idx) => moves[Math.floor(Math.random() * moves.length)](timings + (idx === 0 ? ' 0.3s' : ''), acc),
      { moves: [initial], order: [1, 2, 3] }
    );
  };
}
