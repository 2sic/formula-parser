export const SYMBOL = '=';

export default function func(exp1, exp2) {
  return exp1 === exp2 ? 1 : 0;
}

func.SYMBOL = SYMBOL;
