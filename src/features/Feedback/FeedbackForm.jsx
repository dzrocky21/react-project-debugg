import { useState } from "react";


function FeedbackForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        rating: ""
    });

    const [showModal, setShowModal] = useState(false);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: false
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors= {
            name: formData.name.trim() === "",
            email: formData.email.trim() === "",
            messages: formData.message.trim() === "",
            rating: formData.rating === ""
        };
        setErrors(newErrors);

        if(Object.values(newErrors).some(Boolean)) return;

        setShowModal(true);
        setFormData({
            name: "",
            email: "",
            message: "",
            rating: ""
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card border-success p-4 shadow-sm">
                    <h5 className="mb-3">Feedback From</h5>

                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input 
                            type="text" 
                            name="name"
                            className={`form-control ${errors.name ? "is-valid" : ""}`}
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                    />
                    {errors.name && (
                        <div className="invalid-feedback">Name is required</div>
                    )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            className={`form-control ${errors.email ? "is-valid" : ""}`}
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">Email is required</div>
                    )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Messages</label>
                        <textarea
                            rows="3"
                            name="message"
                            className={`form-control ${errors.message ? "is-valid" : ""}`}
                            placeholder="Your feedback.."
                            value={formData.message}
                            onChange={handleChange}
                    />
                    {errors.message && (
                        <div className="invalid-feedback">Message is required</div>
                    )}
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Rating</label>
                        <select 
                            name="rating" 
                            className={`form-control ${errors.rating ? "is-invalid" : ""}`}
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            <option value="">-- Choose Rating --</option>
                            <option value="5">⭐ ⭐ ⭐ ⭐ ⭐ Excellent</option>
                            <option value="4">⭐ ⭐ ⭐ ⭐ Good</option>
                            <option value="3">⭐ ⭐ ⭐ Average</option>
                            <option value="2">⭐ ⭐ ⭐ Poor</option>
                            <option value="1">⭐ Terrible</option>
                        </select>
                        {errors.rating && (
                            <div className="invalid-feedback">Rating is required</div>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="btn btn-success w-100"
                        >
                        Submit Feedback
                    </button>
                </div>
            </form>

            {showModal && (
                <div 
                    className="modal show fade d-block"
                    tabIndex= "-1"
                    role="dialog"
                    style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Thank you!</h5>
                                    <button 
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Your feedback has been received.</p>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => setShowModal(false)}>
                                            Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </>
    )
}

export default FeedbackForm