import { useEffect, useRef } from "react";
import Card from "../components/Card";
import UserList from "../components/UserList";
import GreetingApp from "../features/Greeting/GreetingApp";
import FeedbackForm from "../features/Feedback/FeedbackForm";
import StatusBanner from "../components/StatusBanner";
import ToggleBio from "../features/Bio/ToggleBio";

function RefDemo() {
    const inputRef = useRef(null);
    const bottomRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behaviour: "smooth" });
    }



    return (
        <div className="container my-5">
            <h6 className="mb-4 text-decoration-line-through">UseRef Domo</h6>

            <input 
                ref={inputRef}
                type="text" 
                className="form-control"
                placeholder="I get focused on load"
            />

            <div className="text-center mt-4">
                <button
                    onClick={scrollToBottom}
                    className="btn btn-success">
                Scroll to Bottom
                </button>
            </div>

            <div style={{height: "1500px mb-2 mb-sm-4 mb-lg-5"}}>

                <div className="card border-primary p-4 shadow-sm text-center mt-5">
                    <div className="row justify-content-between my-3">
                        <div className="col-md-6">
                            <img className="card-img" src="https://picsum.photos/300/200?random=4" alt="" width={1000}/>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h4 className="fw-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem ipsam est blanditiis voluptas doloremque a nihil nesciunt libero earum quis nostrum corrupti placeat temporibus maxime labore, qui quas amet!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem ipsam est blanditiis voluptas doloremque a nihil nesciunt libero earum quis nostrum corrupti placeat temporibus maxime labore, qui quas amet!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem ipsam est blanditiis voluptas doloremque a nihil nesciunt libero earum quis nostrum corrupti placeat temporibus maxime labore, qui quas amet!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 mb-sm-5">
                            <div className="col-md-3">
                                <Card 
                                    title="React is Component-Based"
                                    description="Build UIs from small, reusable pieces"
                                    emoji="🙂"
                                    showExtra={true}
                                />
                            </div>
                            
                                <div className="col-md-6">
                                    <GreetingApp />
                                </div>
                            
                            <div className="col-md-3">
                                <Card
                                    title="Props Make Component Flexible"
                                    description="Send Dynamic data to customize each instance."
                                    emoji="😎"
                                    showExtra={false}
                                />
                            </div>
                        </div>
                        <div className="mb-sm-3 mt-sm-5">
                            < UserList /> 
                        </div>
                        
                        <hr className="text-success"/>
                        <div className="row justify-content-center mb-sm-3 my-3">
                            <div className="col-md-6">
                                <ToggleBio />
                            </div>
                        </div>
            </div>
            

            <div className="row justify-content-center my-5 mb-5 mb-sm-3">
                    <div className="col-md-6">
                        < FeedbackForm />
                    </div>
                    <div className="col-md-6">
                        <StatusBanner />
                    </div>
            </div>

            <div ref={bottomRef} className="alert alert-info text-center">
                You reached the bottom
            </div>
        </div>
    )
}


export default RefDemo