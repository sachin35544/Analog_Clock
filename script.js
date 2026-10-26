* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    --primary_color: #1a2b38;
    --secondry_color: #dfeaf7;
    --clock_surface: rgba(255, 255, 255, 0.08);
    --shadow-dark: rgba(0, 0, 0, 0.45);
    --shadow-light: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.1);
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(255,255,255,0.24), transparent 28%), var(--primary_color);
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    transition: background 0.35s ease;
}

.maindiv {
    position: relative;
    display: grid;
    place-items: center;
    width: min(78vw, 600px);
    height: min(78vw, 600px);
}

.circle {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
    box-shadow:
        32px 32px 60px var(--shadow-dark),
        -18px -18px 30px var(--shadow-light),
        inset 18px 18px 32px rgba(255,255,255,0.04),
        inset -18px -18px 30px rgba(0,0,0,0.18);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(6px);
}

.circle::before {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.02);
    box-shadow: inset 14px 14px 28px rgba(0,0,0,0.18), inset -14px -14px 28px rgba(255,255,255,0.04);
}

.theme {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 5;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #f5f7fa;
    border: 1px solid rgba(255,255,255,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.theme:hover {
    transform: scale(1.04);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.28);
}

.theme i {
    font-size: 22px;
    text-align: center;
    color: #223442;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme #moon {
    font-size: 20px;
    color: #1b2630;
    display: none;
}

.secdot {
    position: absolute;
    inset: 10%;
    border-radius: 50%;
    z-index: 1;
}

.secdot span {
    position: absolute;
    transform: rotate(calc(var(--index) * 6deg));
    inset: 8px;
}

.secdot span p {
    display: inline-block;
    height: 12px;
    width: 2px;
    background: rgba(223, 234, 247, 0.8);
    border-radius: 2px;
}

.secdot span:nth-child(5n) p {
    width: 3px;
    height: 18px;
    transform: translateY(2px);
    background: var(--secondry_color);
}

.circle2 {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.circle2 span {
    position: absolute;
    transform: rotate(calc(var(--index) * 30deg));
    inset: 34px;
}

.circle2 span p {
    display: inline-block;
    font-size: clamp(1.2rem, 2vw, 2rem);
    font-weight: 700;
    color: var(--secondry_color);
    transform: rotate(calc(var(--index) * -30deg));
    text-shadow: 0 0 8px rgba(255,255,255,0.12);
}

.hendbox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.hend {
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform-origin: center;
    transition: transform 0.25s ease-out;
}

.hend i {
    display: inline-block;
    transform-origin: bottom center;
    border-radius: 999px;
    box-shadow: 0 0 10px rgba(255,255,255,0.12);
}

.hor {
    width: 300px;
    height: 300px;
}

.hor i {
    width: 10px;
    height: 120px;
    background: linear-gradient(to top, #f8d57e, #f6b73c);
    border-radius: 10px;
}

.min {
    width: 390px;
    height: 390px;
}

.min i {
    width: 8px;
    height: 168px;
    background: linear-gradient(to top, #84d8ff, #4bb7ff);
    border-radius: 12px;
}

.sec {
    width: 480px;
    height: 480px;
}

.sec i {
    width: 4px;
    height: 220px;
    background: linear-gradient(to top, #ffd4d4, #ff6b6b);
    border-radius: 12px;
}

@media screen and (max-width: 750px) {
    .maindiv {
        width: min(82vw, 420px);
        height: min(82vw, 420px);
    }

    .theme {
        top: 18px;
        right: 18px;
    }

    .circle::before {
        inset: 14px;
    }
}
