import Dexie from 'dexie'

export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

// Dexie のインスタンスを生成
const database = new Dexie('markdown-editor')
// .stores() で使用するテーブルとインデックスとなるデータ名を指定
database.version(1).stores({ memos: '&datetime' })
// データを扱うテーブルクラスを取得
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

// タイトルとテキストを引数として受け取る関数
export const putMemo = async (title: string, text: string): Promise<void> => {
    const datetime = new Date().toISOString()
    // この処理で IndexedDB 保存
    await memos.put({ datetime, title, text })
}

const NUM_PER_PAGE: number = 10
  
export const getMemoPageCount = async (): Promise<number> => {
  const totalCount = await memos.count() // テーブルから総件数を取得
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE)
  return pageCount > 0 ? pageCount : 1
}

export const getMemos = (page: number): Promise<MemoRecord[]> => {
  const offset = (page - 1) * NUM_PER_PAGE
  return memos.orderBy('datetime')
              .reverse()
              .offset(offset)
              .limit(NUM_PER_PAGE)
              .toArray()
}