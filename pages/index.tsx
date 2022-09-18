import type { NextPage } from 'next'
import BaseLayout from '../components/layout/BaseLayout'



const Home: NextPage = (props: any) => {
  return (
    <BaseLayout>
      <div>
        hello khoubaib
        {props.children}
      </div>
    </BaseLayout>
  )
}

export default Home
