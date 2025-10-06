import { useState } from "react";
import RefDemo from "../features/Refdemo/RefDemo";
import BasicForm from "../features/Forms/BasicForm";
import SelectAndRadioForm from "../features/Forms/SelectAndRadioForm"
import UserCard from "../components/UserCard";
import Button from "../components/Button";
import ToggleCard from "../components/ToggleCard";
import ProductCard from "../products/ProductCard";
import ToastAlert from "../components/ToastAlert";








function TabbedContent() {

    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    
    const users= [
    {
      name: "Ayesha Signh",
      age: 24,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Dev Patel",
      age: 31,
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Maya Rao",
      age: 29,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ]

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      status: "active",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 2499,
      status: "soldout",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: 999,
      status: "active",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];

  const [selectedId, setSelectedId] = useState(null);

    const [filter, setFilter] =useState("all");
      const filteredProducts = 
          filter === "all"
           ? products
           : products.filter((product) => product.status === filter);

    return (
        <div className="my-4">
            <ul className="nav nav-pills  mb-3 mb-sm-3 me-sm-3">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                        onClick={() => handleTabClick("home")}>
                        Home
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                        onClick={() => handleTabClick("profile")}>
                        Profile
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "activity" ? "active" : ""}`}
                        onClick={() => handleTabClick("activity")}>
                        Activity
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
                        onClick={() => handleTabClick("settings")}>
                        Settings
                    </button>
                </li>
                <li class="col">
                    <ToastAlert />
                </li>

            </ul>
                            
            <div className="card p-4 shadow-sm text-center">
                {activeTab === "home" && (
                    <div>
                        <h5 className="fw-bold text-warning text-decoration-underline font-monospace">Welcome to the Home Tab!</h5>
                        <p></p>
                    
                        <div className="row justify-content-center my-3">
                                <div className="col">
                                    < RefDemo />
                                </div>
                        </div>
                        
                    </div>
                )}
                {activeTab === "profile" && (
                    <div>
                        <h5 className="fw-bold">Your Profile</h5>
                        <p className="text-info text-decoration-underline">Here you can update your name and picture</p>
                        <div className="row justify-content-center my-3 mt-4">
                            <div className="col-md-6">
                                <BasicForm />
                            </div>
                            <div className="col-md-6">
                                <SelectAndRadioForm />
                            </div>
                        </div>
                        <div className="row justify-content-center my-3 mt-4">
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
                        </div>
                    </div>
                )}
                {activeTab === "activity" && (
                    <div>
                        <h5 className="fw-bold">Activity</h5>
                        <hr className="text-primary"/>
                    
                        <div className="col text-center">
                            <h4 className="text-center mb-4">Filter Products</h4>
                        </div>
                        <div className="row justify-content-center my-3">
                            <div className="col">
                                <div className="text-center mb-3">
                                    <button className={`btn btn-outline-secondary mx-1 ${
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
                        </div>
                        <hr />
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
                    </div>
                )}
                {activeTab === "settings" && (
                    <div>
                        <h5>Settings</h5>
                        <p>Configure your app prefences here.</p>
                        <div className="row justify-content-center">

                            <div className="col-md-6">
                                <ToggleCard />
                            </div>
                        </div>
                        <div className="row justify-content-center m-4">
                                <div className="col-md-8 text-center">
                                    <Button text="Learn More" variant="primary" />
                                    <Button text="Delete" variant="danger" />
                                    <Button text="Submit" variant="success" />
                                </div>
                        </div>
                        
                    </div>
                )}

            </div>
        </div>
    )
}





export default TabbedContent