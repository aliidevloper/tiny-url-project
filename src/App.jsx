import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!longUrl) return alert("Please paste a URL first");

    setLoading(true);
    try {
      const res = await fetch("https://tinyurl-backend-production-1ee7.up.railway.app/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl: longUrl }),
      });

      const data = await res.json();

      if (data.ok) {
        setShortUrl(data.shortURL);
      } else {
        alert("Something went wrong, try again");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="app-container">
        <section className="hero-section">
          {/* Lft Side*/}
          <div className="hero-left">
            <h1>
              URL Shortener, <br />
              Branded Short Links <br />& Analytics
            </h1>
            <p>
              Welcome to the original link shortener — simplifying the Internet
              through the power of the URL since 2002.
            </p>
            <p>
              You can use branded domains for fully custom links, track link
              analytics, and enjoy other powerful features with our paid plans.
            </p>
            <div className="hero-button">
              <a href="#" className="btn-primary">
                View Plans
              </a>
              <a href="#" className="btn-secondary">
                Create Free Account
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="form-card">
              <div className="form-tabs">
                <button className="tab-btn active">Shorten a Link</button>
                <button className="tab-btn">Generate QR Code</button>
              </div>

              <div className="form-content">
                <label>Long URL *</label>
                <input
                  type="text"
                  placeholder="Paste long URL here"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                />

                <div className="input-group-row">
                  <div className="input-field-half">
                    <label>Domain</label>
                    <select>
                      <option>tinyurl.com</option>
                      <option>Unlock Domain</option>
                    </select>
                  </div>
                  <div className="input-field-half">
                    <label>Alias (optional)</label>
                    <input type="text" placeholder="Add alias here" />
                    <small>Must be at least 5 characters</small>
                  </div>
                </div>
                <br />
                <br />

                <button className="btn-submit" onClick={handleShorten} disabled={loading}>
                  {loading ? "Shortening..." : "Shorten Link"}
                </button>

                {shortUrl && (
                  <div style={{ marginTop: "15px" }}>
                    <p>Your short URL:</p>
                    <a href={shortUrl} target="_blank" rel="noreferrer">
                      {shortUrl}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="plans-section">
        <h2>TinyURL Plans Include:</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Detailed Link Analytics</h3>
            <p>
              Stay on top of your links performance and get insights into the
              clicks you earn and people you reach.
            </p>
            <img src="feature-1.webp" alt="" />
          </div>
          <div className="card">
            <h3>Fully Branded Domains</h3>
            <p>
              Customize every part of your links with branded domains – say
              goodbye to default link shortening!
            </p>
            <img src="/feature-2.webp" alt="" />
          </div>
          <div className="card">
            <h3>Bulk Short URLs</h3>
            <p>
              Scale your communications with our API and create thousands of
              unique short links in the blink of an eye.
            </p>
            <img src="feature-3.webp" alt="" />
          </div>
          <div className="card">
            <h3>Link Management</h3>
            <p>
              Take full control of your links: search, edit, and manage
              thousands at a time from a convenient dashboard.
            </p>
            <img src="feature-4.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="video-section-container">
        <div className="video-box">
          <video autoPlay loop muted playsInline src="video-1.mp4"></video>
        </div>

        <div className="content-box">
          <h2>Link Shortening Done Quick and Easy</h2>

          <p>
            Our URL shortener is not only among the first-ever link shorteners on the
            Internet — it's the best out there.
            <br /><br />

            Shorten links for social media, blogs, SMS, emails, ads, and almost
            anything both off- and online.
            <br /><br />

            Wave goodbye to long, clunky links and give your audiences the
            experiences they deserve!
          </p>

          <div className="btn-group">
            <a href="#" className="btn-view">
              View Plans
            </a>

            <a href="#" className="btn-sales">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;