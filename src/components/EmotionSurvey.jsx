import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoodTestAPI from "../services/moodTest/moodTestAPI";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: 'Tôi thấy khó mà thoải mái được',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 2,
    question: 'Tôi bị khô miệng',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 3,
    question: 'Tôi không thấy có chút cảm xúc tích cực nào',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 4,
    question: 'Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 5,
    question: 'Tôi thấy khó bắt tay vào công việc',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 6,
    question: 'Tôi đã phản ứng thái quá khi có những sự việc xảy ra',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 7,
    question: 'Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...)',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 8,
    question: 'Tôi thấy mình đang suy nghĩ quá nhiều',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 9,
    question: 'Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 10,
    question: 'Tôi thấy mình chẳng có gì để mong đợi cả',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 11,
    question: 'Tôi thấy bản thân dễ bị kích động',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 12,
    question: 'Tôi thấy khó thư giãn được',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 13,
    question: 'Tôi cảm thấy chán nản, thất vọng',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 14,
    question: 'Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 15,
    question: 'Tôi thấy mình gần như hoảng loạn',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 16,
    question: 'Tôi không thấy hăng hái với bất kỳ việc gì nữa',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 17,
    question: 'Tôi cảm thấy mình chẳng đáng làm người',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 18,
    question: 'Tôi thấy mình khá dễ phật ý, tự ái',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 19,
    question: 'Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 20,
    question: 'Tôi hay sợ vô cớ',
    options: ['0', '1', '2', '3'],
  },
  {
    id: 21,
    question: 'Tôi thấy cuộc sống vô nghĩa',
    options: ['0', '1', '2', '3'],
  },
];

export default function EmotionSurvey() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [emotionalState, setEmotionalState] = useState("");
  const [question, setQuestions] = useState([]);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const api = new MoodTestAPI();
        const response = await api.getMoodTest();
        setQuestions(response.data); // Lưu trữ dữ liệu câu hỏi từ API vào state
      } catch (error) {
        console.error("Error fetching mood test questions:", error);
      }
    };

    fetchQuestions(); // Gọi hàm để lấy dữ liệu khi component được render
  }, []);

  const handleAnswerSelect = (questionId, optionId) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));

    // Kiểm tra nếu đã trả lời hết tất cả các câu hỏi
    if (Object.keys(selectedAnswers).length + 1 === question.length) {
      calculateEmotionalState(); // Nếu đã trả lời hết, tính toán kết quả cảm xúc
    }
  };
  const calculateEmotionalState = () => {
    const totalScore = Object.values(selectedAnswers).reduce((acc, answer) => {
      const answerScore = { a: 0, b: 1, c: 2, d: 3 };
      return acc + answerScore[answer];
    }, 0);
    console.log(totalScore);

    if (totalScore >= 19) {
      setEmotionalState(
        "Tâm trạng tích cực và tự tin 😍: Bạn thường cảm thấy tự tin và sẵn lòng đối mặt với thách thức, tận dụng cơ hội để phát triển bản thân và thể hiện sự quyết tâm. Nhưng sau trong thâm tâm ban có thực sự như thế không"
      );
    } else if (totalScore >= 15 && totalScore < 19) {
      setEmotionalState(
        "Tâm trạng ổn định và bình tĩnh 😊: Bạn có khả năng duy trì tình trạng bình tĩnh và cân nhắc trong các tình huống khó khăn, không bị chi phối bởi cảm xúc tiêu cực. Dù muốn duy trì tâm trạng tích cực và tự tin, nhưng đôi khi khó khăn vẫn luôn đeo bám và khiến tâm hồn mệt mỏi."
      );
    } else if (totalScore >= 11 && totalScore < 15) {
      setEmotionalState(
        "Tâm trạng lo lắng và phản ứng tiêu cực 😣: Bạn có xu hướng lo lắng, căng thẳng và phản ứng tiêu cực đối với các tình huống áp đặt hoặc không công bằng. Dù đang trải qua tâm trạng lo lắng và phản ứng tiêu cực, nhưng tôi tin rằng có thể tìm ra cách để vượt qua và học hỏi từ những trải nghiệm này"
      );
    } else if (totalScore >= 6 && totalScore < 11) {
      setEmotionalState(
        "Tâm trạng chán nản và mất niềm tin 🥲: Bạn thường cảm thấy chán nản và mất niềm tin khi gặp phải khó khăn, có thể cảm thấy mất hứng thú và muốn từ bỏ, và có khả năng bị. Mặc dù đang trải qua tâm trạng chán nản và mất niềm tin, nhưng tôi vẫn tin rằng mọi khó khăn đều có thể được vượt qua và sẽ tìm thấy nguồn động viên để tiếp tục tiến lên. "
      );
    } else {
      setEmotionalState(
        "Tâm trạng khó chịu và tức giận 😡: Bạn có thể trải qua cảm xúc tức giận, ghen tức hoặc khó chịu khi đối mặt với các tình huống không mong muốn hoặc bất công. Nhưng cố lên tôi tin bạn sẽ là người vượt qua tất cả"
      );
    }
  };
  const handleReset = () => {
    setSelectedAnswers({});
    setEmotionalState("");
  };

  return (
    <Container className="containers">
      <h1> 😉😍😊Bài kiểm tra cảm xúc😣🥲😡</h1>
      <p>
        DASS 21 là thang đo (gồm 21 câu hỏi) giúp đánh giá mức độ rối loạn lo âu
        – trầm cảm - stress khá phổ biến hiện nay trong cộng đồng. <br/> Bài kiểm tra này
        thường được sử dụng để đánh giá tình trạng tâm lý của những người gặp
        khó khăn trong cuộc sống,<br/> như mất việc làm, thất tình, chấn thương, hoặc đối mặt
        với các tình huống khó khăn.
      </p>
      <h4>Bài kiểm tra nhằm mục đích: </h4>
      <ul>
        <li>Tự đánh giá tình trạng Sức khoẻ tinh thần cá nhân.</li>
        <li>
          Dự đoán về Sức khoẻ tinh thần để giúp bạn tìm kiếm những bài nhạc chữa
          lành.
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
          đúng hay sai.<br/> Và đừng dừng lại quá lâu ở bất kỳ câu nào.
        </li>
      </ul>
      <h4>Lưu ý: </h4>
      <ul>
        <li>
          Kết quả bài test này chỉ mang tính chất tham khảo.<br/> Không có giá trị
          thay thế chẩn đoán y khoa bởi bác sĩ/chuyên gia có chuyên môn.
        </li>
      </ul>
      <h4>Nguồn tham khảo: </h4>
      <ul>
        <li>
          <Link target="_blank" to="https://psy-edu.net/2021/06/23/thang-danh-gia-tram-cam-lo-au-stress-dass-21/#:~:text=DASS%2D21%20(Depression%20Anxiety%20and,New%20South%20Wales)%2C%20Australia.">
            Thang đánh giá Trầm cảm – Lo âu – Stress (DASS-21)
          </Link>
        </li>
        <li>
          <Link target="_blank" to="https://bookingcare.vn/cam-nang/bai-test-danh-gia-lo-au--tram-cam--stress-dass-21-p177.html">
            Một số nguyên tắc khi làm bài kiểm tra.
          </Link>
        </li>
        <li>
          <Link target="_blank" to="https://bookingcare.vn/bai-test">
            Một số bài kiểm tra khác.
          </Link>
        </li>
      </ul>

      <form>
        {question.map((question) => (
          <div key={question.id}>
            {question.attributes?.name && (
              <>
                <h3>{question.attributes.name.question}</h3>
                {question.attributes.name.options.map((option) => (
                  <div className="radio-container" key={option.id}>
                    <input
                      type="radio"
                      id={`${question.id}-${option.id}`}
                      name={question.id}
                      value={option.id}
                      checked={selectedAnswers[question.id] === option.id}
                      onChange={() =>
                        handleAnswerSelect(question.id, option.id)
                      }
                    />
                    <label htmlFor={`${question.id}-${option.id}`}>
                      {option.text}
                    </label>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </form>
      {emotionalState && (
        <div className="result">
          <h2>
            Theo như nghiên cứu các câu trả lời của bạn chúng tôi đưa ra kết của
            sau
          </h2>
          <p>{emotionalState}</p>
          <button onClick={handleReset}>Làm lại bài test</button>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
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
      padding: 20px;
      border-radius: 20px;
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
  .radio-container {
    display: inline-block; /* Hiển thị theo chiều ngang */
    margin-right: 10px; /* Khoảng cách giữa các nút */
    width: 100%;
    label {
      cursor: pointer;
    }
  }

  .radio-container input[type="radio"] {
    appearance: none; /* Loại bỏ giao diện mặc định của input radio */
    width: 20px; /* Độ rộng */
    height: 20px; /* Độ cao */
    border-radius: 50%; /* Bo tròn */
    border: 2px solid #999; /* Viền */
    outline: none; /* Loại bỏ viền khi được focus */
    cursor: pointer; /* Con trỏ chuột */
    margin-right: 5px; /* Khoảng cách giữa nút và nhãn */
  }

  .radio-container input[type="radio"]:checked {
    background-color: var(--primary-color); /* Màu nền khi được chọn */
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
