import React from 'react';
import '../App.scss';

function CardComponent() {
  let img1 = 'https://redsvn.net/wp-content/uploads/2020/09/Tom_and_Jerry_.0.0.jpg';

  return (
    <div>
      <div className="card">
        <img src={img1} alt="" />
        <div className="card_content">
          <h2 className="card_title">PHẠM HUỲNH TUYẾT NHI</h2>
          <p className="card_description">👨‍🎓 Software Engineering Student @ FPT University 📚<br></br>
            🌟 My Interests:<br></br>
            - 🌐 Web Development<br></br>
            - 💻 Software Engineering<br></br>
            My journey in the world of technology is just beginning, and I'm here to share my coding adventures and projects with the GitHub community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
