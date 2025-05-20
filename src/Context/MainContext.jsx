import "./styleMain.css";
function MainContext() {
  function HireMe() {
    let myEmail = "quachhoangbo2113@gmail.com";
    let text = "Đã copy Email: quachhoangbo2113@gmail.com";

    if (confirm(text) == true) {
      navigator.clipboard.writeText(myEmail);
      window.open(
        "https://mail.google.com/mail/u/0/#inbox?compose=new",
        "_blank"
      );
    } else {
      console.log("Cancel");
    }
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#page1">
                Home
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li>
              <a href="#page2">
                About Me
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li>
              <a href="#page3">
                SKill
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li>
              <a href="#page4">
                Project
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </a>
            </li>
            <li className="btn_login">
              <a>
                <button onClick={HireMe}>Hire Me!</button>
              </a>
            </li>
            <li className="btn_signup">
              <a href="https://github.com/QuachHoangBo" target="_blank">
                <button>
                  My github
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section
          className="page1"
          style={{ height: "fit-content", width: "100%" }}
          id="page1"
        >
          <div className="headingPage1">
            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "60%",
              }}
            >
              <p
                style={{
                  color: "whitesmoke",
                  margin: "0",
                  border: "2px solid #ffe492",
                  width: "fit-content",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Chào bạn!
              </p>
              <h1
                style={{
                  fontWeight: "bold",
                  color: "white",
                  margin: "0",
                }}
              >
                Tôi tên là
                <h1
                  style={{
                    color: "#ffe492",
                    textDecoration: "underline",
                    fontStyle: "italic",
                    margin: "0",
                  }}
                >
                  Quách Hoàng Bo ,
                </h1>
                thực tập sinh lập trình website ReactJS.
              </h1>
              <p
                style={{
                  color: "whitesmoke",
                  margin: "0",
                  textAlign: "justify",
                  lineHeight: "2",
                  paddingBottom: "10px",
                }}
              >
                Tôi là một chuyên viên lập trình website ReactJS, vừa mới ra
                trường sau khi trang bị cho bản thân đầy đủ các kiến thức cơ bản
                về lập trình web và đã sãng sàng chứng minh bản thân là một
                người có giá trị trong xã hội.
              </p>
              <a href="#page2" style={{ textDecoration: "none" }}>
                <button>
                  Tìm hiểu nhiều hơn về tôi
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </button>
              </a>
            </div>

            <img
              src="/img/me.jpg"
              alt=""
              style={{ height: "500px", margin: "20px" }}
            />
          </div>
        </section>
        <section
          id="page2"
          className="page2"
          style={{
            height: "fit-content",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="headingPage2">
            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "fit-content",
                padding: "0 20px 20px 0",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  marginBottom: "0",
                  position: "relative",
                  zIndex: "0",
                }}
              >
                <p
                  style={{
                    color: "#4f9cf9",
                    margin: "0",
                    fontSize: "large",
                    fontStyle: "italic",
                    textDecoration: "underline",
                  }}
                >
                  - Tiểu sử
                </p>
                <h1 style={{ color: "#4f9cf9", margin: "0" }}>
                  Quách Hoàng Bo
                </h1>
                là ai ?
                <img
                  src="/img/botlinePg2.png"
                  alt=""
                  style={{
                    width: "50%",
                    height: "36.75px",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    zIndex: "-1",
                  }}
                />
              </h1>

              <p style={{ color: "rgb(0, 0, 0)", textHeight: "3px" }}>
                Em sinh ra và lớn lên tại Đắk Lắk, nơi nuôi dưỡng niềm đam mê
                công nghệ từ nhỏ. Từ những ngày đầu tiếp xúc với lập trình, em
                đã bị cuốn hút bởi cách code có thể biến ý tưởng thành hiện
                thực. Hiện tại, em đã học xong các khóa học tại trường, tập
                trung vào lập trình mobile và web với React.
              </p>
              <a
                href="https://www.youtube.com/watch?v=UQqJpiDZr38"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button>
                  Tìm hiểu hơn về đắk lắk
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </button>
              </a>
            </div>

            <img
              src="/img/daklak1.png"
              alt=""
              style={{
                height: "35vw",
                border: "3px solid #4f9cf9",
                margin: "20px",
              }}
            />
          </div>
          <div className="headingPage2" id="page3">
            <img
              src="/img/work-together.png"
              alt=""
              style={{ height: "400px", margin: "20px" }}
            />
            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "fit-content",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  margin: "0",
                  position: "relative",
                  zIndex: "0",
                }}
              >
                Kỹ năng
                <img
                  src="/img/botlinePg2.png"
                  alt=""
                  style={{
                    width: "fit-content",
                    height: "36.75px",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    zIndex: "-1",
                  }}
                />
              </h1>

              <p style={{ color: "rgb(0, 0, 0)" }}>
                Những kỹ năng mà em đã tiếp thu được sau khi trãi qua khóa huấn
                luyện từ những bậc thầy cô tận tâm truyền đạt, và giờ em sẽ dùng
                những kiến thức ấy để mang lại giá trị thiết thực cho công ty và
                cho xã hội.
              </p>
              <hr />
              <p>- Một số kỹ nẵng mềm khác:</p>
              <ul>
                <li>photoshop cơ bản</li>
                <li>phần mềm văn phòng cơ bản</li>
                <li>Trình độ tiếng anh cơ bản "đọc ,nghe, nói, viết"</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className="page3"
          style={{
            height: "fit-content",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="headingPage3">
            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "fit-content",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  color: "rgb(255, 255, 255)",
                  marginBottom: "0",
                  position: "relative",
                  zIndex: "0",
                  width: "auto",
                }}
              >
                Trình độ học vấn
                <img
                  src="/img/botlinePg2.png"
                  alt=""
                  style={{
                    width: "50%",
                    height: "16.75px",
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    zIndex: "-1",
                    display: "none",
                  }}
                />
              </h1>

              <p
                style={{
                  color: "rgb(255, 255, 255)",
                  textAlign: "justify",
                  textHeight: "10px",
                }}
              >
                Cao đẳng FPT Polytechnic – ngôi trường hiện đại và sáng tạo! Môi
                trường học tập năng động, thầy cô tận tâm, cơ sở vật chất tiên
                tiến, giúp sinh viên như em phát triển kỹ năng Lập trình Mobile
                và chuẩn bị cho hành trình chinh phục ReactJS!
              </p>
              <a
                href="https://caodang.fpt.edu.vn/lien-he/co-so-tai-da-nang"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button>
                  Tìm hiểu hơn về trường FPT
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </button>
              </a>
            </div>

            <img
              src="/img/logotruong.png
            "
              style={{ height: "25vw", margin: "20px" }}
            />
          </div>
        </section>
        <section
          id="page4"
          className="page2"
          style={{
            height: "fit-content",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="headingPage2">
            <div
              style={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                backgroundColor: "#ffe492",
              }}
            >
              <img
                src="/img/loadingIMG.jpg"
                alt=""
                style={{
                  width: "25vw",
                  border: "3px solid #043873",

                  margin: "20px",
                }}
              />
              <p
                style={{
                  width: "200px",
                  fontSize: "30px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, 50%)",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 1px #000",
                  margin: "0",
                }}
              >
                Tiến độ: 50%
              </p>
            </div>

            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "fit-content",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  marginBottom: "0",
                  position: "relative",
                  zIndex: "0",
                }}
              >
                DỰ ÁN CÁ NHÂN
                <img
                  src="/img/botlinePg2.png"
                  alt=""
                  style={{
                    width: "300.61px",
                    height: "36.75px",
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    zIndex: "-1",
                  }}
                />
              </h1>

              <p style={{ color: "rgb(0, 0, 0)" }}>
                Dự án cá nhân là cách em ghi lại hành trình học tập và phát
                triển bản thân trong ngành lập trình. Mỗi dòng code là kết quả
                arrecife của sự nỗ lực, tìm tòi và mong muốn tạo ra điều gì đó
                có ích – đó cũng chính là cách em rèn luyện kỹ năng và chuẩn bị
                cho môi trường làm việc thực tế.
              </p>
              <a
                href="https://github.com/QuachHoangBo"
                style={{ textDecoration: "none" }}
              >
                <button>
                  My github
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>
        <section
          id="page5"
          className="page4"
          style={{
            display: "flex",
            height: "fit-content",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "rgb(255, 255, 255)",
            alignItems: "center",
            padding: "3% 3%",
            boxSizing: "border-box",
            gap: "20px",
          }}
        >
          <div className="headingPage4">
            <div
              className="heading"
              style={{
                height: "fit-content",
                width: "100%",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  marginBottom: "0",
                  position: "relative",
                  zIndex: "0",
                }}
              >
                MY PLANT FOR THE FUTURE
                <img
                  src="/img/botlinePg2.png"
                  alt=""
                  style={{
                    width: "400.61px",
                    height: "30.75px",
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    zIndex: "-1",
                  }}
                />
              </h1>

              <p style={{ color: "rgb(0, 0, 0)" }}>
                lên kế hoạch cho tương lai, để có cái nhìn rõ hơn trên con đường
                trở nên thành công và góp ích cho xã hội
              </p>
            </div>
          </div>
          <div
            className="card-aim"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="card text-white bg-light"
              style={{
                height: "auto",
                width: "calc(90% / 3)",
                backgroundColor: "#fff",
                border: "2px solid #ffe492",
                borderRadius: "10px",
              }}
            >
              <div
                className="card-body"
                style={{
                  padding: "5%",
                  boxSizing: "border-box",
                  height: "100%",
                }}
              >
                <h3 className="card-title">6 THÁNG TỚI</h3>
                <h2 className="card-title">Củng cố nền móng</h2>
                <h4 className="card-title">Focus vào học tập & thực chiến</h4>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Nắm vững kiến
                  thức ReactJS, JavaScript
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Làm 2-3 dự án
                  cá nhân thực tế
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Tìm hiểu căn
                  bản về Redux, Next.js
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Tham gia các
                  cuộc thi, event IT
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Rèn luyện kỹ
                  năng teamwork và UI/UX
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Đăng ký thực
                  tập ReactJS
                </p>
              </div>
            </div>
            <div
              className="card text-white bg-light"
              style={{
                height: "auto",
                width: "calc(90% / 3)",
                backgroundColor: "#4f9cf9",
                border: "2px solid #ffe492",
                borderRadius: "10px",
              }}
            >
              <div
                className="card-body"
                style={{
                  padding: "5%",
                  boxSizing: "border-box",
                  height: "100%",
                  color: "white",
                }}
              >
                <h3 className="card-title">1 NĂM TỚI</h3>
                <h2 className="card-title">Dev chính thức</h2>
                <h4 className="card-title">Học nâng cao & đi làm chính thức</h4>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Làm việc tại
                  công ty chuyên về ReactJS
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Thành thạo
                  NextJS, TailwindCSS
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Học thêm về
                  backend: NodeJS, Express
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Xây dựng
                  fullstack project thực tế
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Tham gia open
                  source/community
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Chứng chỉ quốc
                  tế nếu cần
                </p>
              </div>
            </div>
            <div
              className="card text-white bg-light"
              style={{
                height: "auto",
                width: "calc(90% / 3)",
                backgroundColor: "#043873",
                border: "2px solid #ffe492",
                borderRadius: "10px",
              }}
            >
              <div
                className="card-body"
                style={{
                  padding: "5%",
                  boxSizing: "border-box",
                  height: "100%",
                  color: "white",
                }}
              >
                <h3 className="card-title">5 NĂM TỚI</h3>
                <h2 className="card-title">Senior Dev / Leader</h2>
                <h4 className="card-title">Tự tin dẫn dắt và chia sẻ</h4>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Trở thành
                  Senior React Developer
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Mentor cho các
                  bạn sinh viên khác
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Có sản phẩm
                  startup riêng
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Mở workshop
                  chia sẻ kiến thức
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Cống hiến cho
                  cộng đồng Dev Việt
                </p>
                <p className="card-text">
                  <i className="fa-regular fa-circle-check"></i> Định hướng trở
                  thành Tech Lead
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="page6"
          className="page5"
          style={{
            display: "flex",
            height: "fit-content",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#043873",
            alignItems: "center",
            padding: "3% 3%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="avatar"
              src="/img/me.jpg"
              alt=""
              style={{
                height: "100px",
                width: "100px",
                border: "3px dashed #043873",
                borderRadius: "50%",
              }}
            />
            <p style={{ textAlign: "justify", color: "white" }}>
              "Tôi xin đảm bảo sẽ hoàn thành tốt các nhiệm vụ được giao, và với
              sự nhiệt huyết của tuổi trẻ, tôi luôn sẵn sàng học hỏi, sáng tạo
              để đáp ứng mọi thử thách từ công ty. Tôi cam kết cống hiến hết
              mình, đồng hành cùng đội ngũ để tạo ra những kết quả thiết thực có
              thể góp ích cho công ty và cho xã hội.
              <br />
              Nếu trong quá hình học tập và làm việc còn nhiều thiếu xót mong
              quý anh chị có thể giơ cao đánh khẽ chiếu cố nhiều hơn ạ"
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="btm">
          <p>
            Cảm ơn bạn đã quan tâm, nếu có điều gì còn thiếu trong cv mong nhận
            được phản hồi trong gmail, chúc anh chị có một ngày tốt lành
          </p>
          <div className="social-icon">
            <img src="/img/iconfb.png" className="iconfacebook" />
          </div>
        </div>
      </footer>
    </>
  );
}
export default MainContext;
