document.addEventListener("DOMContentLoaded", () => {
    const classSelect = document.getElementById("class-select");
    const target = document.getElementById("target");
    const arrow = document.getElementById("arrow");
    const resultNumber = document.getElementById("result-number");
    const shootBtn = document.getElementById("shoot-btn");
    const announcement = document.getElementById("announcement");

    // 화살 쏘기 버튼 클릭 이벤트
    shootBtn.addEventListener("click", () => {
        // 1. 선택된 학반 정보 가져오기
        const selectedClass = classSelect.value;

        // 2. 1번부터 31번까지 랜덤 번호 생성
        const luckyNumber = Math.floor(Math.random() * 31) + 1;

        // 3. 애니메이션 초기화 및 재생을 위한 상태 세팅
        shootBtn.disabled = true; // 연타 방지 잠금
        resultNumber.classList.add("hidden");
        arrow.classList.remove("hidden", "shoot-animation");
        target.classList.remove("spin-animation");

        // 강제 리플로우(Reflow)를 발생시켜 애니메이션을 처음부터 깨끗하게 재생시킵니다.
        void arrow.offsetWidth; 

        // 4. 화살 비행 및 과녁 회전 애니메이션 시작
        arrow.classList.add("shoot-animation");
        target.classList.add("spin-animation");
        announcement.innerText = "🏹 조준 완료! 화살이 날아갑니다...!";

        // 5. 화살이 과녁에 도달하는 타이밍(0.6초 뒤)에 맞춰 결과 공개
        setTimeout(() => {
            // 과녁 회전 멈춤
            target.classList.remove("spin-animation");
            
            // 전광판에 최종 뽑힌 반과 번호 띄우기
            resultNumber.innerText = luckyNumber;
            resultNumber.classList.remove("hidden");
            
            announcement.innerHTML = `🎯 당첨! <span style="color:#ef4444; font-size:18px;">${selectedClass}반 ${luckyNumber}번</span> 학생, 발표 준비하세요!`;
            
            // 버튼 다시 활성화
            shootBtn.disabled = false;
        }, 600); // style.css의 fly-arrow 애니메이션 재생 시간인 0.6초(600ms)와 일치시킵니다.
    });
});
