// script.js - 新竹通平台 JavaScript 邏輯

// 階段一 MVP 階段，此文件為空，僅作為架構預留。
// 未來的動態功能（如：點數計算、數據可視化）將在此處實現.

document.addEventListener('DOMContentLoaded', () => {
    console.log("新竹通平台 MVP 前端已載入。等待 M2/M3 階段功能實裝...");

    // 範例：MVP 階段，阻止預設連結行為，提醒使用者。
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 找到實際的 <a> 元素（在事件冒泡時 target 可能是內部文字）
            const anchor = e.currentTarget;
            if (anchor.getAttribute('href') === '#') {
                e.preventDefault();
                alert('試點功能正在部署中，請聯繫專案團隊以取得登入權限。');
            }
        });
    });
});