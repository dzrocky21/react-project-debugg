import React, { useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function ToastAlert() {
    // useEffect(() => {
    //     const toastTrigger = document.getElementById('liveToastBtn')
    //     const toastLiveExample = document.getElementById('liveToast')
    //     if(toastTrigger) {
    //     toastTrigger,addEventListener('click', () => {
    //         const toast = new window.bootstrap.Toast(toastLiveExample)
    //         toast.show()
    //     })
    // }
    // }, []);

    useEffect(() => {
    const toastE1 = document.getElementById("myToast");
    if (toastE1) {
      const toast = new window.bootstrap.Toast(toastE1, { autohide: true });
      document.getElementById("toastBtn").addEventListener("click", () => toast.show());
    }
  }, []);


    return (
        // <div class="row justify-content-end mb-3">
        //     <div class="col-md-2">

        //         <button 
        //             type="button"
        //             class="btn btn-primary" 
        //             id="liveToastBtn">
        //             Show live toast
        //         </button>

        //     <div 
        //         class="toast position-fixed text-bg-primary top-0 end-0 me-3 mt-3"
        //         role="alert"
        //         aria-live="assertive"
        //         aria-atomic="true"
        //         id="liveToast">
        //             <div class="d-flex">
        //                 <div class="toast-body">
        //                     Hello, World! this is toast message
        //                 </div>
        //                 <button
        //                     type="button"
        //                     class="btn-close me-2 m-auto"
        //                     data-bs-dismiss="toast"
        //                     aria-label="Close">
        //                 </button>
        //             </div>
        //     </div>
        //     </div>
        // </div>
        <div class="row justify-content-end mb-3">
           <div class="col-md-2">
                    <button className="btn btn-primary" id="toastBtn">Show Live Toast</button>
                    {/* <button onClick={() => console.log("Other button clicked")}></button> */}

                    <div
                        className="toast-container position-fixed top-0 end-0 me-0 mt-5">
                        <div id="myToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Bootstrap</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div className="toast-body">Hello, world! This is a toast message.</div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default ToastAlert;