import "./Signin.css";
import shopbyteLogo from "../assets/shopbytelogo.svg";

function Signin() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="signin-page">
      <section className="signin-card" aria-labelledby="signin-title">
        <div className="signin-welcome">
          <a className="signin-brand" href="/" aria-label="Shopbyte home">
            <img src={shopbyteLogo} alt="Shopbyte" />
          </a>

          <div className="signin-welcome-copy">
            <span className="signin-eyebrow">Your seller workspace</span>
            <h1>Good to have you back.</h1>
            <p>
              Pick up where you left off and keep your store moving forward.
            </p>
          </div>

          <div className="signin-note">
            <span className="signin-note-dot" />
            <span>Your business, all in one place.</span>
          </div>
        </div>

        <div className="signin-form-wrap">
          <div className="signin-form-heading">
            <span className="signin-eyebrow">Welcome back</span>
            <h2 id="signin-title">Sign in to your account</h2>
            <p>Enter your details below to access your dashboard.</p>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            <label htmlFor="signin-email">Email address</label>
            <input
              id="signin-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />

            <div className="signin-password-label">
              <label htmlFor="signin-password">Password</label>
              <button type="button" className="signin-text-button">
                Forgot password?
              </button>
            </div>
            <input
              id="signin-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <label className="signin-remember">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <button className="signin-submit" type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="signin-signup">
            New to Shopbyte?{" "}
            <button type="button" className="signin-text-button">
              Create an account
            </button>
          </p>
          <p className="signin-terms">
            By continuing, you agree to Shopbyte&apos;s terms and privacy policy.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signin;
