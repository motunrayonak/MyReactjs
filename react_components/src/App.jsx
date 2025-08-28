
    import Header from "./components/Header"
    import Dashbord from  "./components/Dashboard"
    import Home from "./components/Home"
    import List from "./components/List"
    import Footer from "./components/Footer"

    export default function app (){
  return(
    
   <div className="h-screen h-[60px] flex flex-col">
    {/* header */}
    <Header/>


    {/* middle container */}
    <div className="flex flex-1 ">

      {/* Dashbord */}
      <Dashbord/>

      {/* Home */}
      <div className="flex flex-1 flex-col  ">
        <Home/>

      {/* List */}
      <div className="flex-1  p-[6]  pl-14 bg-green-100 ">
        <List/>

        </div>


      </div>


    </div>
    {/* Footer */}
    <div className="font-bold  bg-orange-200 ">
      <Footer/>
    
    </div>



   </div> 
  )
}
