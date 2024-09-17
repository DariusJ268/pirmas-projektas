import Hero from "./components/home/Hero"
import CategoryList from "./components/home/CategoryList"
import Topbar from "./components/layout/Topbar";

const App = () => {

  return (
    <>
      <div>
        <Topbar />
        <Hero />
        <CategoryList />
      </div>
    </>
  )
}

export default App
