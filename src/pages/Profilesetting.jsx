import { useState } from "react";
import "./profilesetting.css";

const defaultProfile = {
  fullName: "",
  email: "",
  storeName: "",
};

function Profilesetting() {
  const [profile, setProfile] = useState(() => {
    const savedProfile = window.localStorage.getItem("shopbyte-profile");
    return savedProfile
      ? { ...defaultProfile, ...JSON.parse(savedProfile) }
      : defaultProfile;
  });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setProfile((currentProfile) => ({ ...currentProfile, [name]: value }));
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      window.localStorage.setItem("shopbyte-profile", JSON.stringify(profile));
      setMessage("Your profile settings have been saved in this browser.");
    } catch (error) {
      console.error("Unable to save profile settings.", error);
      setMessage("Could not save your settings in this browser.");
    }
  }

  return (
    <div className="page profile-settings-page">
      <div className="page-title">
        <div>
          <h1>Profile settings</h1>
          <p>Manage your personal and store information.</p>
        </div>
      </div>

      <section className="profile-settings-card">
        <div className="profile-settings-heading">
          <div className="profile-avatar" aria-hidden="true">S</div>
          <div>
            <h2>Personal information</h2>
            <p>Update the details associated with your account.</p>
          </div>
        </div>

        <form className="profile-settings-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              name="fullName"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              value={profile.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Store name
            <input
              name="storeName"
              type="text"
              placeholder="Enter your store name"
              autoComplete="organization"
              value={profile.storeName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Role
            <input name="role" type="text" value="Store administrator" readOnly />
          </label>
          <div className="profile-settings-actions">
            <button className="profile-save-button" type="submit">Save changes</button>
          </div>
          {message && <p className="profile-settings-message" role="status">{message}</p>}
        </form>
      </section>
    </div>
  );
}

export default Profilesetting;