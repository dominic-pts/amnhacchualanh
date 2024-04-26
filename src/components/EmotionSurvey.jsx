import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CProgress } from "@coreui/react";
import { CProgressBar } from "@coreui/react";

const questions = [
  {
    id: 1,
    question: "Tôi thấy khó mà thoải mái được",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 2,
    question: "Tôi bị khô miệng",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 3,
    question: "Tôi không thấy có chút cảm xúc tích cực nào",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 4,
    question:
      "Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 5,
    question: "Tôi thấy khó bắt tay vào công việc",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 6,
    question: "Tôi đã phản ứng thái quá khi có những sự việc xảy ra",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 7,
    question: "Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...)",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 8,
    question: "Tôi thấy mình đang suy nghĩ quá nhiều",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 9,
    question:
      "Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 10,
    question: "Tôi thấy mình chẳng có gì để mong đợi cả",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 11,
    question: "Tôi thấy bản thân dễ bị kích động",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 12,
    question: "Tôi thấy khó thư giãn được",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 13,
    question: "Tôi cảm thấy chán nản, thất vọng",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 14,
    question:
      "Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 15,
    question: "Tôi thấy mình gần như hoảng loạn",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 16,
    question: "Tôi không thấy hăng hái với bất kỳ việc gì nữa",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 17,
    question: "Tôi cảm thấy mình chẳng đáng làm người",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 18,
    question: "Tôi thấy mình khá dễ phật ý, tự ái",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 19,
    question:
      "Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 20,
    question: "Tôi hay sợ vô cớ",
    options: ["0", "1", "2", "3"],
  },
  {
    id: 21,
    question: "Tôi thấy cuộc sống vô nghĩa",
    options: ["0", "1", "2", "3"],
  },
];

export default function EmotionSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [answered, setAnswered] = useState(Array(questions.length).fill(false));
  const [emotionalState, setEmotionalState] = useState("");

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
  };
  // Hàm xử lý khi nhấn nút "Làm lại bài kiểm tra"
  const handleResetSurvey = () => {
    setCurrentQuestion(0); // Đặt lại câu hỏi hiện tại về 0
    setAnswers(Array(questions.length).fill(null)); // Đặt lại tất cả câu trả lời về null
    setAnswered(Array(questions.length).fill(false)); // Đặt lại tất cả trạng thái đã trả lời về false
    setEmotionalState("");
  };
  const handleNextQuestion = () => {
    if (!answered[currentQuestion]) {
      alert("Vui lòng chọn một câu trả lời trước khi tiếp tục!");
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion + 1);
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = useCallback(() => {
    let score = 0;
    answers.forEach((answer) => {
      score += parseInt(answer);
    });
    return score * 1;
  }, [answers]);

  useEffect(() => {
    if (answered.every((answer) => answer)) {
      const totalScore = calculateScore();

      console.log(totalScore);

      if (totalScore >= 51) {
        setEmotionalState(
          <div className="healdd">
            Rất nặng: Bạn đang trải qua mức độ cao nhất của lo âu, trầm cảm và
            stress. <br />
            Điều này có thể ảnh hưởng đến chất lượng cuộc sống và khả năng hoạt
            động hàng ngày. <br />
            Việc tìm kiếm sự giúp đỡ chuyên môn là quan trọng. <br />
            Gửi bạn một số cách để cải thiện sức khỏe tinh thần: <br />
            - Thử đến vùng đất mới để chữa lành bằng âm nhạc tại quán cafe của
            chúng tôi. <br />
            - Ngủ đủ giấc <br />
            - Tập thể dục thường xuyên: yoga, chạy bộ, các bài thể dục nhịp
            điệu,... <br />
            - Hoặc bạn có thể đến với Đà Lạt vốn là một mảnh đất bình yên có thể
            giúp bạn chữa lành.
            <br />
            - Hãy cố gắng duy trì thời gian tập luyện 30 phút/ngày, 5 ngày/tuần.
            <br />
            - Thực hiện chế độ ăn uống đa dạng và giàu dinh dưỡng <br />
            - Tìm những việc yêu thích để thực hiện <br />
            - Tìm kiếm những người bạn tích cực, đồng hành và lắng nghe <br />
            - Suy nghĩ tích cực: Tập trung vào những điều tốt đẹp trong cuộc
            sống và biết ơn những gì đang có <br />- Tránh sử dụng rượu và các
            chất kích thích
          </div>
        );
      } else if (totalScore >= 41 && totalScore < 50) {
        setEmotionalState(
          <div className="healdd">
            Nặng: Mức độ lo âu, trầm cảm và stress của bạn đang ở mức cao, có
            thể làm ảnh hưởng đến sức khỏe và cảm xúc hàng ngày.
            <br />
            Điều này có thể ảnh hưởng đến chất lượng cuộc sống và khả năng hoạt
            động hàng ngày. <br />
            Việc tìm kiếm sự giúp đỡ chuyên môn là quan trọng. <br />
            Gửi bạn một số cách để cải thiện sức khỏe tinh thần: <br />
            - Thử đến vùng đất mới để chữa lành bằng âm nhạc tại quán cafe của
            chúng tôi. <br />
            - Ngủ đủ giấc <br />
            - Tập thể dục thường xuyên: yoga, chạy bộ, các bài thể dục nhịp
            điệu,... <br />
            - Hoặc bạn có thể đến với Đà Lạt vốn là một mảnh đất bình yên có thể
            giúp bạn chữa lành.
            <br />
            - Hãy cố gắng duy trì thời gian tập luyện 30 phút/ngày, 5 ngày/tuần.
            <br />
            - Thực hiện chế độ ăn uống đa dạng và giàu dinh dưỡng <br />
            - Tìm những việc yêu thích để thực hiện <br />
            - Tìm kiếm những người bạn tích cực, đồng hành và lắng nghe <br />
            - Suy nghĩ tích cực: Tập trung vào những điều tốt đẹp trong cuộc
            sống và biết ơn những gì đang có <br />- Tránh sử dụng rượu và các
            chất kích thích
          </div>
        );
      } else if (totalScore >= 31 && totalScore < 40) {
        setEmotionalState(
          <div className="healdd">
            Vừa: Bạn đang trải qua một mức độ ổn định của lo âu, trầm cảm và
            stress.
            <br />
            Điều này có thể ảnh hưởng đến chất lượng cuộc sống và khả năng hoạt
            động hàng ngày. <br />
            Việc tìm kiếm sự giúp đỡ chuyên môn là quan trọng. <br />
            Gửi bạn một số cách để cải thiện sức khỏe tinh thần: <br />
            - Thử đến vùng đất mới để chữa lành bằng âm nhạc tại quán cafe của
            chúng tôi. <br />
            - Ngủ đủ giấc <br />
            - Tập thể dục thường xuyên: yoga, chạy bộ, các bài thể dục nhịp
            điệu,... <br />
            - Hoặc bạn có thể đến với Đà Lạt vốn là một mảnh đất bình yên có thể
            giúp bạn chữa lành.
            <br />
            - Hãy cố gắng duy trì thời gian tập luyện 30 phút/ngày, 5 ngày/tuần.
            <br />
            - Thực hiện chế độ ăn uống đa dạng và giàu dinh dưỡng <br />
            - Tìm những việc yêu thích để thực hiện <br />
            - Tìm kiếm những người bạn tích cực, đồng hành và lắng nghe <br />
            - Suy nghĩ tích cực: Tập trung vào những điều tốt đẹp trong cuộc
            sống và biết ơn những gì đang có <br />- Tránh sử dụng rượu và các
            chất kích thích
          </div>
        );
      } else if (totalScore >= 15 && totalScore < 30) {
        setEmotionalState(
          "Nhẹ: Mức độ lo âu, trầm cảm và stress của bạn ở mức độ nhẹ, đây có thể là dấu hiệu của sự căng thẳng trong cuộc sống hàng ngày. Cần thiết phải tự chăm sóc tâm trạng và tìm kiếm cách giảm stress."
        );
      } else {
        setEmotionalState(
          "Bình thường: Bạn đang ở mức độ bình thường về lo âu, trầm cảm và stress. Điều này cho thấy bạn đang ổn định và có khả năng đối mặt với những thách thức trong cuộc sống hàng ngày."
        );
      }
    }
  }, [answered, calculateScore]);

  return (
    <Container className="containers">
      <div>
        <h1> 😉😍😊Bài kiểm tra cảm xúc😣🥲😡</h1>
        <p>
          DASS 21 là thang đo (gồm 21 câu hỏi) giúp đánh giá mức độ rối loạn lo
          âu – trầm cảm - stress khá phổ biến hiện nay trong cộng đồng. <br />{" "}
          Bài kiểm tra này thường được sử dụng để đánh giá tình trạng tâm lý của
          những người gặp khó khăn trong cuộc sống,
          <br /> như mất việc làm, thất tình, chấn thương, hoặc đối mặt với các
          tình huống khó khăn.
        </p>
        <h4>Bài kiểm tra nhằm mục đích: </h4>
        <ul>
          <li>Tự đánh giá tình trạng Sức khoẻ tinh thần cá nhân.</li>
          <li>
            Dự đoán về Sức khoẻ tinh thần để giúp bạn tìm kiếm những bài nhạc
            chữa lành.
          </li>
          <li>
            Tổng hợp thông tin để thuận tiện cho việc nghiên cứu và đưa ra giải
            pháp.
          </li>
        </ul>
        <h4>Nguyên tắc thực hiện bài kiểm tra: </h4>
        <ul>
          <li>
            Hãy đọc mỗi câu hỏi sau và chọn đáp án gần giống nhất với tình trạng
            mà bạn cảm thấy trong suốt một tuần qua. <br /> Không có câu trả lời
            đúng hay sai.
            <br /> Và đừng dừng lại quá lâu ở bất kỳ câu nào.
          </li>
        </ul>
        <h4>Lưu ý: </h4>
        <ul>
          <li>
            Kết quả bài test này chỉ mang tính chất tham khảo.
            <br /> Không có giá trị thay thế chẩn đoán y khoa bởi bác sĩ/chuyên
            gia có chuyên môn.
          </li>
        </ul>
        <h4>Nguồn tham khảo: </h4>
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://bookingcare.vn/cam-nang/bai-test-danh-gia-lo-au--tram-cam--stress-dass-21-p177.html"
            >
              Một số nguyên tắc khi làm bài kiểm tra.
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://bookingcare.vn/bai-test">
              Một số bài kiểm tra khác.
            </Link>
          </li>
        </ul>
       
      </div>

      <div className="question">
        <CProgress
          color="info"
          variant="striped"
          animated
          height={50}
          value={((currentQuestion + 1) / 21) * 100}
        >
          <CProgressBar className="text-dark">
            {currentQuestion + 1}/21
          </CProgressBar>
        </CProgress>
        <h4 className="question__h4"> {questions[currentQuestion].question}</h4>
        <form>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name={`question${currentQuestion}`}
                value={option}
                onChange={handleAnswerChange}
                checked={answers[currentQuestion] === option}
              />
              <label htmlFor={`option${index}`}>
                {option === "0" && "Không đúng với tôi chút nào cả"}
                {option === "1" &&
                  "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng"}
                {option === "2" &&
                  "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng"}
                {option === "3" &&
                  "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng"}
              </label>
            </div>
          ))}
        </form>
        <div className="btn__custome">
          <button
            className="btn__primary"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Quay lại
          </button>
          <button
            className="btn__primary "
            onClick={handleNextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Câu tiếp theo
          </button>
          <button className="btn__primary" onClick={handleResetSurvey}>
            Làm lại
          </button>
        </div>

        {emotionalState && (
          <div className="result">
            <h2>Kết quả bài kiểm tra</h2>
            <p>{emotionalState}</p>
           <div className="table_head">
           <table>
             <thead>
               <tr>
                 <th>Mức độ</th>
                 <th>Lo âu</th>
                 <th>Trầm cảm</th>
                 <th>Stress</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>Bình thường</td>
                 <td>0 - 7</td>
                 <td>0 - 9</td>
                 <td>0 - 14</td>
               </tr>
               <tr>
                 <td>Nhẹ</td>
                 <td>8 - 9</td>
                 <td>10 - 13</td>
                 <td>15 - 18</td>
               </tr>
               <tr>
                 <td>Vừa</td>
                 <td>10 - 14</td>
                 <td>14 - 20</td>
                 <td>19 - 25</td>
               </tr>
               <tr>
                 <td>Nặng</td>
                 <td>15 - 19</td>
                 <td>21 - 27</td>
                 <td>26 - 33</td>
               </tr>
               <tr>
                 <td>Rất nặng</td>
                 <td>≥20</td>
                 <td>≥28</td>
                 <td>≥34</td>
               </tr>
             </tbody>
           </table>
         </div>
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  .healdd {
    text-align: left;
  }
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: var(--font-size-small);
    padding: 0 50px 50px;
  }
  a {
    margin-bottom: 100px;
    font-size: var(--font-size-small);
  }
  ul {
    margin-bottom: 50px;
    li {
      list-style: none;
      line-height: 2;
      font-size: var(--font-size-small);
    }
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    div {
      background-color: #f0f0f0;
      /* padding: 20px; */
      border-radius: 20px;
    }
  }
  h2,
  .question__h4 {
    margin: 50px;
    text-align: center;
  }
  input[type="radio"] {
    margin-left: 20px;
    cursor: pointer;
    transform: scale(1.5);
  }
  label {
    cursor: pointer;
    padding: 20px;
    width: 90%;
  }
  .btn__custome {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    button {
      width: 300px;
    }
  }
  .table_head {
  margin: 20px auto;
  font-family: Arial, sans-serif;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 5px;
    
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #4CAF50;
      color: white;
    }

    tbody tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tbody tr:hover {
      background-color: #ddd;
    }

    td:first-child {
      font-weight: bold;
    }
  }
}

  .result {
    margin: 20px 0;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 20px;
    p {
      font-size: var(--font-size-normal);
    }
    button {
      text-align: center;
      color: var(--primary-color);
      border: var(--primary-color) 1px solid;
      border-radius: 20px;
      padding: 10px 20px;
    }
  }

  //reponsive
  @media (max-width: 430px) {
    h1 {
      font-size: 21px;
    }
    p {
      padding: 0 10px 10px;
    }
    form {
      grid-template-columns: 1fr;
      div {
        padding: 10px;
      }
    }
  }
`;
