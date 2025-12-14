// =========================================================
//                  I. NGÂN HÀNG CÂU HỎI LỊCH SỬ - ĐỊA LÍ (19 CÂU)
// =========================================================

const questionBank = [
    // ------------------------------------------------------------------------------------------------
    // 16 CÂU CHỌN 1 ĐÁP ÁN (C1)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 1, 
        type: 'C1', 
        text: 'Lãnh thổ Việt Nam bao gồm những thành phần nào?', 
        options: [
            'Vùng đất và vùng biển.', 
            'Vùng đất, vùng biển và vùng trời.', 
            'Vùng đất và vùng trời.', 
            'Vùng biển và vùng trời.'
        ], 
        correctAnswer: 'Vùng đất, vùng biển và vùng trời.' 
    },
    { 
        id: 2, 
        type: 'C1', 
        text: 'Biểu tượng của đất nước, con người Việt Nam là:', 
        options: ['Quốc huy', 'Quốc ca', 'Quốc kì', 'Cả 3 ý A, B, C đều đúng'], 
        correctAnswer: 'Cả 3 ý A, B, C đều đúng'
    },
    { 
        id: 3, 
        type: 'C1', 
        text: 'Đặc điểm khí hậu ở nước ta?', 
        options: [
            'Khí hậu nóng ẩm.', 
            'Khí hậu nhiệt đới ẩm gió mùa .', 
            'Khí hậu ẩm ướt.', 
            'Khí hậu ôn đới mùa hạ.'
        ], 
        correctAnswer: 'Khí hậu nhiệt đới ẩm gió mùa .'
    },
    { 
        id: 4, 
        type: 'C1', 
        text: 'Vùng biển Việt Nam thuộc biển nào?', 
        options: ['Biển Đông.', 'Biển Nha Trang.', 'Biển Thái Bình.', 'Biển Thiên Cầm.'], 
        correctAnswer: 'Biển Đông.'
    },
    { 
        id: 5, 
        type: 'C1', 
        text: 'Dấu tích khảo cổ nào dưới đây là bằng chứng về sự ra đời và tồn tại của nước Âu Lạc?', 
        options: [
            'Mũi tên đồng.', 
            'Nhẫn vàng có hình bò Nan-di.', 
            'Tượng thần Vit-xnu.', 
            'Dấu tích Đền thần Mặt Trời.'
        ], 
        correctAnswer: 'Mũi tên đồng.'
    },
    { 
        id: 6, 
        type: 'C1', 
        text: 'Khu đền tháp Mỹ Sơn (Quảng Nam) được UNESCO ghi danh là:', 
        options: [
            'Di sản thiên nhiên thế giới.', 
            'Di sản văn hóa phi vật thể.', 
            'Di sản văn hóa thế giới.', 
            'Di sản tư liệu thế giới.'
        ], 
        correctAnswer: 'Di sản văn hóa thế giới.'
    },
    { 
        id: 7, 
        type: 'C1', 
        text: 'Thục Phán đã lập ra nước Âu Lạc sau cuộc kháng chiến chống quân nào?', 
        options: ['Quân Thanh', 'Quân Mông-Nguyên', 'Quân Minh', 'Quân Tần'], 
        correctAnswer: 'Quân Tần'
    },
    { 
        id: 8, 
        type: 'C1', 
        text: 'Vương quốc Chăm-pa nằm ở khu vực nào nước ta ngày nay?', 
        options: ['Miền Trung.', 'Duyên hải Nam Trung Bộ.', 'Đông Nam Bộ.', 'Miền Nam.'], 
        correctAnswer: 'Duyên hải Nam Trung Bộ.'
    },
    { 
        id: 9, 
        type: 'C1', 
        text: 'Cuộc khởi nghĩa nào dưới đây không diễn ra trong thời kì Bắc thuộc?', 
        options: [
            'Khởi nghĩa Lam Sơn.', 
            'Khởi nghĩa Lí Bí.', 
            'Khởi nghĩa Mai Thúc Loan.', 
            'Khởi nghĩa Hai Bà Trưng.'
        ], 
        correctAnswer: 'Khởi nghĩa Lam Sơn.'
    },
    { 
        id: 10, 
        type: 'C1', 
        text: 'Nội dung nào dưới đây là hoạt động giáo dục dưới thời Trần?', 
        options: [
            'Xây dựng Văn Miếu, lập Quốc Tử Giám.', 
            'Thi cử đặt lệ lấy đỗ Tam Khôi.', 
            'Xây dựng lại Quốc Tử Giám, mở thêm trường và khoa thi.', 
            'Tổ chức khoa thi đầu tiên.'
        ], 
        correctAnswer: 'Xây dựng lại Quốc Tử Giám, mở thêm trường và khoa thi.'
    },
    { 
        id: 11, 
        type: 'C1', 
        text: 'Ai là người chỉ huy trận thủy chiến trên sông Bạch Đằng năm 1288 của quân dân nhà Trần?', 
        options: [
            'Trần Thủ Độ', 
            'Trần Quang Khải', 
            'Trần Quốc Tuấn', 
            'Trần Khánh Dư'
        ], 
        correctAnswer: 'Trần Quốc Tuấn'
    },
    { 
        id: 12, 
        type: 'C1', 
        text: 'Vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về thành Đại La năm nào?', 
        options: ['1010', '1009', '2010', '938'], 
        correctAnswer: '1010'
    },
    { 
        id: 13, 
        type: 'C1', 
        text: 'Thắng cảnh thác Đắk Mai nằm ở xã nào của tỉnh Đồng Nai?', 
        options: ['Đa Kia', 'Bù Đăng', 'Bù Gia Mập', 'Nghĩa Trung'], 
        correctAnswer: 'Nghĩa Trung'
    },
    { 
        id: 14, 
        type: 'C1', 
        text: 'Từ ngày 1/7/2025, tỉnh Đồng Nai có bao nhiêu xã (phường) sau sắp xếp sáp nhập các đơn vị hành chính?', 
        options: ['94', '95', '96', '97'], 
        correctAnswer: '96'
    },
    { 
        id: 15, 
        type: 'C1', 
        text: 'Tượng đài chiến thắng Đồng Xoài nằm ở tỉnh nào (theo các lựa chọn)?', 
        options: ['Đồng Xoài (phường)', 'Bình Phước', 'Trấn Biên (phường)', 'Chơn Thành'], 
        correctAnswer: 'Bình Phước'
    },
    { 
        id: 16, 
        type: 'C1', 
        text: 'Từ ngày 1/7/2025, tỉnh Đồng Nai có diện tích đứng thứ mấy so với cả nước?', 
        options: ['6', '7', '8', '9'], 
        correctAnswer: '8'
    },

    // ------------------------------------------------------------------------------------------------
    // 3 CÂU DẠNG NỐI/ĐIỀN TỪ (N) - Đã điều chỉnh đầy đủ ngữ cảnh
    // ------------------------------------------------------------------------------------------------
    { 
        id: 17, 
        type: 'N', 
        text: 'Em hãy nối các từ/cụm từ còn thiếu (cột bên phải) để hoàn thiện các câu sau về Chủ quyền biển đảo Việt Nam:', 
        pairs: [
            // Từ cần điền: chủ quyền, cột mốc, Hoàng Sa, Trường Sa (Thứ tự điền trong đề cương gốc: [cite: 45])
            { left: '1. Các thế hệ người Việt Nam đã giành nhiều công sức để bảo vệ ... biển, đảo. [cite: 39, 40]', right: 'chủ quyền' }, 
            { left: '2. Các đội Hoàng Sa, Bắc Hải cắm ... trên quần đảo Hoàng Sa, Trường Sa. [cite: 42]', right: 'cột mốc' }, 
            { left: '3. Huyện đảo ... được thành lập năm 1982 (thuộc thành phố Đà Nẵng). [cite: 43]', right: 'Hoàng Sa' }, 
            { left: '4. Huyện đảo ... (thuộc tỉnh Khánh Hòa) được thành lập năm 1982. [cite: 43, 44]', right: 'Trường Sa' } 
        ]
    },
    { 
        id: 18, 
        type: 'N', 
        text: 'Em hãy nối các từ còn thiếu (cột bên phải) để hoàn thiện đoạn văn về Đặc điểm đất đai Việt Nam:', 
        pairs: [
            // Từ cần điền: hai nhóm, đồi núi, đồng bằng, màu mỡ (Thứ tự điền trong đề cương gốc: [cite: 50])
            { left: '1. Việt Nam có ... đất chính là đất phù sa và đất phe-ra-lít. [cite: 47]', right: 'hai nhóm' }, 
            { left: '2. Đất phe-ra-lít phân bố chủ yếu ở vùng ... [cite: 48]', right: 'đồi núi' }, 
            { left: '3. Đất phù sa phân bố chủ yếu ở vùng ... [cite: 49]', right: 'đồng bằng' }, 
            { left: '4. Đất phù sa khá ... [cite: 49]', right: 'màu mỡ' } 
        ]
    },
    { 
        id: 19, 
        type: 'N', 
        text: 'Em hãy nối thông tin ở cột A với thông tin ở cột B cho phù hợp.', 
        pairs: [
            { left: 'a. Nhà nước Văn Lang.', right: '2. Ra đời vào khoảng thế kỉ VII trước Công nguyên, là nhà nước đầu tiên của nước ta. [cite: 52]' }, 
            { left: 'b. Vương quốc Phù Nam.', right: '4. Ra đời vào thế kỉ I, gắn với truyền thuyết về cuộc hôn nhân giữa Hồn Điền và Liễu Diệp. [cite: 52]' }, 
            { left: 'c. Vương quốc Chăm-pa.', right: '1. Ra đời vào thế kỉ II, xây dựng đền tháp để làm nơi thờ cúng thần linh và sinh hoạt cộng đồng. [cite: 52]' },
            { left: 'd. Nước Âu Lạc.', right: '3. Do Thục Phán (An Dương Vương) lập ra sau kháng chiến chống Tần thắng lợi (năm 208 trước Công nguyên) [cite: 52]' }
        ]
    },
];

// =========================================================
//                  II. CẤU HÌNH VÀ BIẾN TOÀN CỤC
// =========================================================

const EXAM_CONFIG = {
    C1: 7, // Chọn 1 đáp án: 7 câu ngẫu nhiên
    N: 3,  // Dạng Nối / Điền từ: Cố định 3 câu (17, 18, 19)
};
const TOTAL_QUESTIONS = 10;
let currentExam = []; 
let currentQuestionIndex = 0; 
let userAnswers = []; 
let isExamSubmitted = false; 
let currentExamId = 1; 

// Lấy các phần tử DOM quan trọng
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionHeaderEl = document.getElementById('question-header');
const progressContainerEl = document.getElementById('progress-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-exam-btn');
const resultBoxEl = document.getElementById('result-box');
const currentQuestionInfoEl = document.getElementById('current-question-info');
const examTabsContainer = document.getElementById('exam-selection-tabs');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctAnswerTextEl = document.getElementById('correct-answer-text');


// =========================================================
//                  III. HÀM TIỆN ÍCH VÀ RÚT ĐỀ
// =========================================================

/** Hàm xáo trộn mảng (Fisher-Yates) */
function shuffleArray(array) {
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** HÀM RÚT ĐỀ THI 10 CÂU NGẪU NHIÊN THEO CẤU HÌNH */
function generateExam() {
    let exam = [];
    let remainingQuestions = [...questionBank]; 
    
    // 1. CHỌN CÁC CÂU NỐI/ĐIỀN TỪ (N - Cố định 3 câu: 17, 18, 19)
    // Lọc ra các câu Nối/Điền từ và chọn tất cả
    const N_questions = remainingQuestions.filter(q => q.type === 'N');
    exam.push(...shuffleArray(N_questions)); // Đưa vào đề, xáo trộn vị trí của chúng
    
    // 2. CHỌN CÁC CÂU CHỌN 1 (C1 - Ngẫu nhiên 7 câu)
    const C1_questions = remainingQuestions.filter(q => q.type === 'C1');
    const shuffledC1 = shuffleArray(C1_questions);
    const selectedC1 = shuffledC1.slice(0, EXAM_CONFIG.C1);
    exam.push(...selectedC1);
    
    // 3. XÁO TRỘN VỊ TRÍ CUỐI CÙNG VÀ ĐẢM BẢO CHỈ 10 CÂU
    return shuffleArray(exam).slice(0, TOTAL_QUESTIONS);
}

// =========================================================
//                  IV. HÀM HIỂN THỊ (RENDER)
// =========================================================

/** Tạo các nút 1-10 và gắn sự kiện */
function setupProgressBar() {
    progressContainerEl.innerHTML = ''; 
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const button = document.createElement('button');
        button.className = 'q-number';
        button.textContent = i + 1;
        button.dataset.index = i; 
        
        button.disabled = false; 
        
        button.addEventListener('click', () => {
            if (!isExamSubmitted) { 
                saveUserAnswer(currentQuestionIndex);
            }
            renderQuestion(i);
        });
        
        progressContainerEl.appendChild(button);
    }
}

/** Cập nhật trạng thái và màu sắc của Progress Bar */
function updateProgressBar(index) {
    const progressButtons = document.querySelectorAll('.q-number');
    progressButtons.forEach((btn, i) => {
        btn.classList.remove('active');
        
        if (!isExamSubmitted) {
            btn.classList.remove('correct', 'incorrect');
            if (userAnswers[i] !== null) {
                btn.classList.add('answered');
            } else {
                btn.classList.remove('answered');
            }
        } 
    });
    
    if(progressButtons[index]) {
        progressButtons[index].classList.add('active');
    }
    
    currentQuestionInfoEl.textContent = `Câu hỏi | Đề số: ${index + 1}/10`;
}

/** Hiển thị câu trả lời đã lưu khi chuyển lại câu cũ */
function loadUserAnswer(question) {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (savedAnswer === null) return;
    
    if (question.type === 'C1') {
        const radio = document.querySelector(`input[name="q${question.id}"][value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    } else if (question.type === 'N') { // Áp dụng cho cả Nối và Điền từ đã chuyển đổi
        for (const leftItem in savedAnswer) {
            const select = document.querySelector(`select[data-left-item="${leftItem}"]`);
            if (select) select.value = savedAnswer[leftItem];
        }
    }
}

/** HÀM QUAN TRỌNG: Hiển thị câu hỏi và các tùy chọn trả lời */
function renderQuestion(index) {
    if (index < 0 || index >= currentExam.length) return;

    const question = currentExam[index];
    currentQuestionIndex = index;
    const disabledAttr = isExamSubmitted ? 'disabled' : ''; 

    questionHeaderEl.textContent = `Câu hỏi ${index + 1}:`;
    questionTextEl.textContent = question.text;
    answerOptionsEl.innerHTML = ''; 
    correctAnswerDisplayEl.classList.add('hidden'); 

    let htmlContent = '';

    switch (question.type) {
        case 'C1':
            question.options.forEach((option) => {
                htmlContent += `
                    <label class="option-item">
                        <input type="radio" name="q${question.id}" value="${option}" ${disabledAttr}>
                        ${option}
                    </label>
                `;
            });
            break;

        case 'N':
            htmlContent += '<div class="matching-container">';
            // Vẫn xáo trộn các lựa chọn bên phải (các từ cần điền)
            const rightOptions = shuffleArray(question.pairs.map(p => p.right));
            
            question.pairs.forEach((pair) => {
                htmlContent += `
                    <div class="match-row">
                        <span class="left-item">${pair.left}</span>
                        <select class="match-select" data-left-item="${pair.left}" ${disabledAttr}>
                            <option value="">-- Chọn đáp án --</option>
                            ${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                        </select>
                    </div>
                `;
            });
            htmlContent += '</div>';
            break;
    }
    
    answerOptionsEl.innerHTML = htmlContent;
    loadUserAnswer(question);
    updateNavigationButtons();
    updateProgressBar(index);
    
    // HIỂN THỊ ĐÁP ÁN ĐÚNG KHI XEM LẠI
    if (isExamSubmitted) {
        showCorrectAnswer(question);
    }
}

/** Hiển thị đáp án đúng */
function showCorrectAnswer(question) {
    let answerText = '';
    if (question.type === 'C1') {
        answerText = question.correctAnswer;
    } else if (question.type === 'N') {
        // Hiển thị từng cặp Nối/Điền từ
        answerText = question.pairs.map((p, index) => `${index + 1}. ${p.left} -> ${p.right}`).join('; ');
    }
    correctAnswerTextEl.textContent = answerText;
    correctAnswerDisplayEl.classList.remove('hidden');
}


// =========================================================
//                  V. LOGIC LƯU VÀ ĐIỀU HƯỚNG
// =========================================================

/** Lưu câu trả lời hiện tại của người dùng vào mảng userAnswers */
function saveUserAnswer(index) {
    if (isExamSubmitted) return; 

    const question = currentExam[index];
    let answer = null;
    
    if (question.type === 'C1') {
        const selectedRadio = document.querySelector(`input[name="q${question.id}"]:checked`);
        if (selectedRadio) {
            answer = selectedRadio.value;
        }
    } else if (question.type === 'N') {
        const matchingPairs = {};
        const selects = document.querySelectorAll('.match-select');
        
        selects.forEach(select => {
            if (select.value) {
                matchingPairs[select.dataset.leftItem] = select.value;
            }
        });
        
        // Chỉ lưu nếu có ít nhất 1 lựa chọn
        if (Object.keys(matchingPairs).length > 0) { 
             answer = matchingPairs; 
        } else {
             answer = null; 
        }
    }
    
    if (answer !== null) {
        userAnswers[index] = answer;
    } else if (userAnswers[index] !== undefined) {
        userAnswers[index] = null; 
    }
    
    updateProgressBar(currentQuestionIndex);
}

/** Cập nhật trạng thái enabled/disabled của nút điều hướng */
function updateNavigationButtons() {
    
    if (isExamSubmitted) {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        submitBtn.style.display = 'none'; 
        return;
    }
    
    submitBtn.style.display = 'block';
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentExam.length - 1;
}

// =========================================================
//                  VI. LOGIC CHẤM ĐIỂM
// =========================================================

/** Kiểm tra đáp án của 1 câu hỏi */
function checkAnswer(question, userAnswer) {
    if (userAnswer === null) return false;

    if (question.type === 'C1') {
        return userAnswer === question.correctAnswer;
    }
    
    if (question.type === 'N') {
        let isCorrect = true;
        
        // Câu trả lời Nối/Điền từ được coi là đúng nếu TẤT CẢ các cặp đều khớp.
        if (Object.keys(userAnswer).length !== question.pairs.length) {
            return false;
        }

        for (const userLeft in userAnswer) {
            const userRight = userAnswer[userLeft];
            const correctPair = question.pairs.find(p => p.left === userLeft);
            
            if (!correctPair || correctPair.right !== userRight) {
                isCorrect = false;
                break;
            }
        }
        return isCorrect;
    }
    
    return false;
}

/** HÀM CHẤM ĐIỂM TOÀN BỘ BÀI THI */
function checkExam() {
    let correctCount = 0;
    
    isExamSubmitted = true;
    submitBtn.disabled = true;
    
    for (let i = 0; i < currentExam.length; i++) {
        const question = currentExam[i];
        const userAnswer = userAnswers[i];
        
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correctCount++;
        }
        
        const progressButton = document.querySelector(`.q-number[data-index="${i}"]`);
        progressButton.classList.remove('answered', 'active');
        if (isCorrect) {
            progressButton.classList.add('correct'); 
        } else {
            progressButton.classList.add('incorrect'); 
        }
        progressButton.disabled = false;
    }
    
    const totalScore = correctCount;
    // Điều kiện đậu: Đạt tối thiểu 8/10 câu
    const isPassed = totalScore >= 8; 

    // 2. Cập nhật Hộp Kết Quả 
    document.getElementById('correct-count').textContent = totalScore;
    document.getElementById('incorrect-count').textContent = TOTAL_QUESTIONS - totalScore;
    resultBoxEl.classList.remove('hidden');

    let statusMessage = document.getElementById('exam-status');
    
    if (isPassed) {
        statusMessage.textContent = "CHÚC MỪNG, ĐẠT YÊU CẦU!";
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = "CHƯA ĐẠT (Cần ôn tập thêm)";
        statusMessage.style.color = 'orange';
    }
    
    // 3. Hiển thị lại câu hiện tại (để disable input và show đáp án đúng)
    renderQuestion(currentQuestionIndex);
}

// =========================================================
//                  VII. KHỞI TẠO VÀ SỰ KIỆN
// =========================================================

/** HÀM KHỞI TẠO BÀI THI */
function initExam(examId = 1) {
    currentExamId = examId;
    isExamSubmitted = false; 
    
    currentExam = generateExam(); 
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    
    // Reset giao diện và các nút
    resultBoxEl.classList.add('hidden');
    submitBtn.disabled = false;
    correctAnswerDisplayEl.classList.add('hidden');

    // Cập nhật tab active
    document.querySelectorAll('.exam-tab').forEach(tab => {
        if (parseInt(tab.dataset.examId) === examId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    setupProgressBar(); 
    renderQuestion(currentQuestionIndex); 
}

// 1. Gắn sự kiện cho nút điều hướng
nextBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex < currentExam.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
    }
});

prevBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
    }
});

// 2. Gắn sự kiện cho nút Nộp bài
submitBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    checkExam();
});

// 3. Gắn sự kiện cho nút Làm Đề Mới (trong Result Box)
document.getElementById('select-new-exam-btn').addEventListener('click', () => {
    initExam(currentExamId); 
});

// 4. Gắn sự kiện cho các Tab chọn đề (Đề 1 - Đề 5)
examTabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('exam-tab')) {
        const newExamId = parseInt(e.target.dataset.examId);
        initExam(newExamId);
    }
});


// KHỞI ĐỘNG ỨNG DỤNG LẦN ĐẦU
initExam(1);