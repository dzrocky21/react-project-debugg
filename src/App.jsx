import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import icon from "./assets/icon.png"
// import brightSun from "./assets/brightSun.png";

// Components
import AppHeader from "./components/AppHeader"
import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import Button from "./components/Button";
import UserCard from "./components/UserCard";  
import StatusBanner from "./components/StatusBanner";
import ToggleCard from "./components/ToggleCard";
import PasswordInput from "./components/PasswordInput";
import UserList from "./components/UserList";
import ToastAlert from "./components/ToastAlert";


// import { useFormState } from "react-dom";




// Features
import BasicForm from "./features/Forms/BasicForm";
import MultipleFieldForm from "./features/Forms/MultipleFieldForm";
import ValidatedForm from "./features/Forms/ValidatedForm";
import SelectAndRadioForm from "./features/Forms/SelectAndRadioForm";
import FeedbackForm from "./features/Feedback/FeedbackForm";
import DigitalClock from "./features/Clock/DigitalClock";
import ThemeToggle from "./features/Theme/ThemeToggle";
import RefDemo from "./pages/RefDemo";
import LikeCard from "./features/Like/LikeCard";
import ToggleBio from "./features/Bio/ToggleBio";
import CounterApp from "./features/Counter/CounterApp";
import GreetingApp from "./features/Greeting/GreetingApp";
import NameContainer from "./features/Greeting/NameContainer";

// Products
import ProductCard from "./products/ProductCard";
import TabbedContent from "./pages/TabbedContent";




const username = "Rocky ACee";
const day = new Date().toLocaleDateString();



function App() {

  // useEffect(() => {
  //   const toastE1 = document.getElementById("myToast");
  //   if (toastE1) {
  //     const toast = new window.bootstrap.Toast(toastE1, { autohide: true });
  //     document.getElementById("toastBtn").addEventListener("click", () => toast.show());
  //   }
  // }, []);

  const footer = (
    <footer>
      <p>Made with React.</p>
    </footer>
  )

  // const users= [
  //   {
  //     name: "Ayesha Signh",
  //     age: 24,
  //     image: "https://randomuser.me/api/portraits/women/44.jpg"
  //   },
  //   {
  //     name: "Dev Patel",
  //     age: 31,
  //     image: "https://randomuser.me/api/portraits/men/45.jpg"
  //   },
  //   {
  //     name: "Maya Rao",
  //     age: 29,
  //     image: "https://randomuser.me/api/portraits/women/65.jpg"
  //   }
  // ]


  // const products = [
  //   {
  //     id: 1,
  //     title: "Wireless Headphones",
  //     price: 1999,
  //     status: "active",
  //     image: "https://picsum.photos/300/200?random=1"
  //   },
  //   {
  //     id: 2,
  //     title: "Smart Watch",
  //     price: 2499,
  //     status: "soldout",
  //     image: "https://picsum.photos/300/200?random=2"
  //   },
  //   {
  //     id: 3,
  //     title: "Gaming Mouse",
  //     price: 999,
  //     status: "active",
  //     image: "https://picsum.photos/300/200?random=3"
  //   }
  // ];

  // const [selectedId, setSelectedId] = useState(null);

  // const [filter, setFilter] =useState("all");
  // const filteredProducts = 
  //     filter === "all"
  //      ? products
  //      : products.filter((product) => product.status === filter);

  return (
    <>
      <Navbar />
      <AppHeader />
      <div className="col">
          < DigitalClock />
      </div>
    {/* <div class="row justify-content-center">
      <div class="col-md-1">
        <img src={brightSun} alt="My Assets" className="rotate" width= {150} height= {100} />
      </div>
    </div> */}
      <div className="container my-3">
        <div className="row justify-content-center my-3 mt-3">
            <div className="col"> 
              < TabbedContent />
            </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-md-4">
              <Card 
                title="React is Component-Based"
                description="Build UIs from small, reusable pieces"
                emoji="🙂"
                showExtra={true}
              />
          </div>
          <div className="col-md-4">
              <Card
                title="Props Make Component Flexible"
                description="Send Dynamic data to customize each instance."
                emoji="😎"
                showExtra={false}
              />
          </div>
        </div> */}
        {/* <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <Button text="Learn More" variant="primary" />
            <Button text="Delete" variant="danger" />
            <Button text="Submit" variant="success" />
          </div>
        </div> */}
        {/* <div className="row justify-content-center my-3 mt-5">
          {users.map((user, index) => {
            return (
              <div className="col-md-3" key={index}>
                <UserCard 
                  name={user.name}
                  age={user.age}
                  image={user.image}
                />
              </div>
            )
          })}
        </div> */}
        {/* <div className="row justify-content-center">
          <div className="col-md-6">
            <LikeCard />
          </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
          <div className="col-md-6">
            <ToggleBio />
          </div>
        </div> */}
        
        <div className="row justify-content-center">
          <div className="col-md-4">
            <CounterApp />
          </div>
        </div>
        {/* <div className="row justify-content-center my-3">
          <div className="col-md-6">
            <GreetingApp />
          </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
          <div className="col-md-6">
            < NameContainer />
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <div className="col-md-6">
            <h4 className="text-centermb-4">Featured Products</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          {products.map(product => {
            return (
              <div className="col-md-4" key={product.id}>
                < ProductCard 
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  active={selectedId === product.id}
                  onClick={() => setSelectedId(product.id)}
                />
              </div>
            )
          })}
        </div>
        <div className="row justify-content-center">
          <div className="col text-center mt-3">
            <button className="btn btn-secondary" onClick={() => setSelectedId(null)}>
              Reset Selection
            </button>
          </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
          <div className="col-md-6">
            <StatusBanner />
          </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
          <div className="col text-center">
            <h4 className="text-center mb-4">Filter Products</h4>
          </div>
          <div className="row justify-content-center my-3">
          <div className="col">
            <div className="text-center mb-3">
              <button className={`btn btn-outline-dark mx-1 ${
                filter === "all" ? "active" : ""
              }`}
              onClick={() => {setFilter("all")}}>
                All
              </button>
              <button className={`btn btn-outline-success mx-1 ${
                filter === "active" ? "active" : ""
              }`}
              onClick={() => {setFilter("active")}}>
                Available
              </button>
              <button className={`btn btn-outline-danger mx-1 ${
                filter === "soldout" ? "active" : ""
              }`}
              onClick={() => {setFilter("soldout")}}>
                Sold Out
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-3">
          {filteredProducts.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                < ProductCard 
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  status={product.status}
                />
            </div>
            )
          })}
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < ToggleCard />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < PasswordInput />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < BasicForm />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < MultipleFieldForm />
            </div>
        </div>
        <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < ValidatedForm />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < SelectAndRadioForm />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col-md-6">
              < FeedbackForm />
            </div>
        </div> */}
        {/* < UserList /> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col">
              < DigitalClock />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col">
              < ThemeToggle />
            </div>
        </div> */}
        {/* <div className="row justify-content-center my-3">
            <div className="col">
              < RefDemo />
            </div>
        </div> */}
        {/* </div> */}
      </div>
      <p>Hello, {username}</p>
      <p>Today is {day}</p>
      {footer}
    </>
  );
}

export default App