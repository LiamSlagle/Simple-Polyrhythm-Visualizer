var qKeyframes = {
      top: ["0%", "50%"]
    },
    eKeyframes = {
      top: ["25%", "50%"]
    },
    tKeyframes = {
      top: ["33.33%", "50%"]
    },
    sKeyframes = {
      top: ["37.5%", "50%"]
    },

    qBall = document.getElementById("qBall"),
    eBall = document.getElementById("eBall"),
    tBall = document.getElementById("tBall"),
    sBall = document.getElementById("sBall");

function ballOptions(x, y) {
  return {
    duration: x,
    delay: y,
    easing: "cubic-bezier(0.6, 0.15, 0.85, 0.6)",
    direction: "alternate",
    iterations: Infinity
  };
}

function animateBalls() {
  qBall.animate(qKeyframes, ballOptions(960, 0));
  eBall.animate(eKeyframes, ballOptions(480, 480));
  tBall.animate(tKeyframes, ballOptions(320, 640));
  sBall.animate(sKeyframes, ballOptions(240, 720));
};

animateBalls();