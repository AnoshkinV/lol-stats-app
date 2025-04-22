import { css } from '@emotion/css'
import './App.css'
import { Suspense } from 'react'
import Loading from './screens/loading-screen/loading'
import { screenComponents } from './stores/screen-components'
import { screenStore } from './stores/screen-store'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  const { screen } = screenStore;
  const ScreenComponent = screenComponents[screen.type]

  return (
    <div className={css({
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "black"
    })}>
      <Suspense fallback={<Loading />}>
        <ScreenComponent />
      </Suspense>

    </div>
  )
})

export default App
