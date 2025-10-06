import { useState } from "react";

function SelectAndRadioForm() {

    const [formData, setFormData] = useState({
        country: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Country: ${formData.country}\nGender: ${formData.gender}`);
        setFormData({ country: "", gender: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card border-info p-4 shadow-sm">
                <h5 className="mb-3">Select Dropdown & Radio Buttons</h5>

                <div className="mb-3">
                    <label className="form-label">Select Country</label>
                    <select 
                        name="country" 
                        className="form-select"
                        value={formData.country}
                        onChange={handleChange}
                        required>
                        <option value="">-- Choose a country --</option>
                        <option value="nigeria"> Nigeria </option>
                        <option value="USA"> USA </option>
                        <option value="Japan"> Japan </option>
                        <option value="Canada"> Canada </option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label d-block">Gender</label>


                    <div className="form-check form-check-inline">
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender"
                            value="male"
                            className="form-check-input"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                        />
                        <label htmlFor="male" className="form-check-label">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            type="radio" 
                            id="female" 
                            name="gender"
                            value="female"
                            className="form-check-input"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                        />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            type="radio" 
                            id="other" 
                            name="gender"
                            value="other"
                            className="form-check-input"
                            checked={formData.gender === "Other"}
                            onChange={handleChange}
                        />
                        <label htmlFor="other" className="form-check-label">Other</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 mt-3">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SelectAndRadioForm