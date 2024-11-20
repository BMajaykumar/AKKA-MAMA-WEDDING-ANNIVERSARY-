$(document).ready(function () {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");
  const popup = $("#popup");

  function open() {
    envelope.addClass("open").removeClass("close");
    setTimeout(() => {
      popup.removeClass("hidden");
      startFallingHearts();
    }, 600); // Show popup after envelope animation
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    popup.addClass("hidden");
  }

  $(document).ready(function () {
      const envelope = $("#envelope");
      const btn_open = $("#open");
      const btn_reset = $("#reset");
      const popup = $("#popup");
    
      function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(() => {
          popup.addClass("show");
          startFallingHearts();
        }, 600); // Show popup after envelope animation
      }
    
      function close() {
        envelope.addClass("close").removeClass("open");
        popup.removeClass("show");
      }
    
      function createFallingHeart() {
        const heart = $("<div></div>").addClass("falling-heart");
        heart.css({
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 3}s`,
        });
        $("body").append(heart);
        setTimeout(() => heart.remove(), 4000); // Remove heart after animation
      }
    
      function startFallingHearts() {
        setInterval(createFallingHeart, 500);
      }
    
      envelope.click(open);
      btn_open.click(open);
      btn_reset.click(close);
    });
    

  function createFallingHeart() {
    const heart = $("<div></div>").addClass("falling-heart");
    heart.css({
      left: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 3}s`,
    });
    $("body").append(heart);
    setTimeout(() => heart.remove(), 4000); // Remove heart after animation
  }

  function startFallingHearts() {
    setInterval(createFallingHeart, 500);
  }

  envelope.click(open);
  btn_open.click(open);
  btn_reset.click(close);
});

