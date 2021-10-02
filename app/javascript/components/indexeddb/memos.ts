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