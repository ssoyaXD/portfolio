$(document).ready(function () {
    const canvas = document.getElementById('jsCanvas');
    const ctx = canvas.getContext('2d');
    const colors = document.getElementsByClassName('jsColor');

    canvas.width = 500;
    canvas.height = 500;

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 8;

    let painting = false;

    function stopPainting() {
        painting = false;
    }

    function startPainting() {
        painting = true;
    }

    function onMouseMove(event) {
        const x = event.offsetX;
        const y = event.offsetY;

        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }

    // 컬러 변경
    // strokeStyle에 컬러값 대입
    function handleColorClick(event) {
        const color = event.target.style.backgroundColor;
        ctx.strokeStyle = color;
    }


    // forEach() = 주어진 함수를 배열 요소 각각에 대해 실행.
    // 모든 컬러 호출
    Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));



    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
    }
})