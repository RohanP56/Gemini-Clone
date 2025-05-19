import "./main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_profile_image" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Rohan</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggests beautiful places in Bengaluru?</p>
                <img src={assets.compass_icon} alt="places" />
              </div>
              <div className="card">
                <p>Briefly summerize this topic: Global Warming</p>
                <img src={assets.bulb_icon} alt="places" />
              </div>
              <div className="card">
                <p>Suggest me some brainstorming games?</p>
                <img src={assets.message_icon} alt="places" />
              </div>
              <div className="card">
                <p>Fix this code issue.</p>
                <img src={assets.code_icon} alt="places" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini"
            />
            <div>
              <img src={assets.gallery_icon} alt="galary" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini can make mistakes, so double-check it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
