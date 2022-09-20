import '../index.css';

const Presentation = (bar) => {
    console.log(bar)
    let h2Style = "mt-4 tracking-widest text-xl title-font font-medium text-gray-200 mb-1"
    //True = Sidebar, False = BottomBar
    if(bar) {
        h2Style = "mt-4 tracking-widest text-xl title-font font-medium text-gray-200 mb-1"
    }
    return (
        <div className="flex flex-col items-center justify-center mt-5 p-1">
            <img alt="Profile" src="https://dummyimage.com/180x180" className="roundpic"/>
            <h2 class={h2Style}>
                Name Surname1 Surname2
            </h2>
        </div>
    );
}
  
export default Presentation;