import { useState } from 'react'

// カスタムフックの関数を定義
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  // useState の呼び出し
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  // localStorage への保存を組み合わせた値の更新関数
  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  // 値と更新関数の返却
  return [value, setValueWithStorage]
}