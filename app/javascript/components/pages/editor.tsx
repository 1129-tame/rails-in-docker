import React from 'react'
import styled from 'styled-components'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import ReactMarkdown from 'react-markdown'
import { putMemo } from '../indexeddb/memos'
import { Button } from '../components/button'
import { SaveModal } from '../components/save_modal'
import { Link } from 'react-router-dom'
import { Header } from '../components/header'

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
  
`

// useState 関数を React から取り出す
const { useState } = React
// localStorage でデータの参照・保存に使うキー名を決める
// const StorageKey = 'pages/editor:text'

interface Props {
  text: string
  setText: (text: string) => void
}

// : const [値, 値をセットする関数] = useState<扱う状態の型>(初期値)
export const Editor: React.FC<Props> = (props) => {
  const { text, setText } = props

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <HeaderArea>
        <Header title="Markdown Editor">
          <Button onClick={() => setShowModal(true)}>
            保存する
          </Button>
          <Link to="/history">
            履歴を見る
          </Link>
        </Header>
      </HeaderArea>
      <Wrapper>
      <TextArea
            // テキストの内容が変更された時に実行される関数を渡す
            // onChange={(event) => {
            //   // setText(event.target.value)
            //   // テキストが変更されるたびに localStorage へ保存する処理
            //   const changedText = event.target.value
            //   localStorage.setItem(StorageKey, changedText)
            //   setText(changedText)
            // }}
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      </Wrapper>
      {showModal && (
          <SaveModal
            onSave={(title: string): void => {
              putMemo(title, text)
              setShowModal(false)
            }}
            onCancel={() => setShowModal(false)}
          />
      )}
    </>
  )
}