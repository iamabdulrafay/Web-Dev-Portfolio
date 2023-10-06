let loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

let img = document.querySelector(".right img");

img.addEventListener("mousemove", function (details) {
  // console.log(details.clientX);
  let imgLocation = img.getBoundingClientRect();
  let insideImg = details.clientX - imgLocation.left;
  if (insideImg < imgLocation.width / 2) {
    var mapper = gsap.utils.mapRange(
      0,
      imgLocation.width / 2,
      100,
      0,
      insideImg
    );

    gsap.to("img ", {
      scale: 1.3,
      skewX: `${mapper}deg`,
      ease: Power3.easeIn,
    });
  } else {
    var mapper = gsap.utils.mapRange(
      imgLocation.width / 2,
      imgLocation.width,
      0,
      50,
      insideImg
    );
    gsap.to("img ", {
      scale: 1.1,
      rotationX: `${mapper}deg`,
      ease: Power4.easeInOut,
    });
  }
});
img.addEventListener("mouseleave", function () {
  gsap.to("img", {
    scale: 1,
    skewX: 0,
  });
});
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
// .page 2 cliwnts counts
const myNum = document.querySelectorAll(".count");

let speed = 200;

myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let init_count = +myCount.innerText;
  // console.log(target_count)

  let new_increment_num = Math.floor(target_count / speed);

  const updateNumber = () => {
    init_count += new_increment_num;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      setTimeout(() => {
        updateNumber();
      }, 5);
    }
  };

  updateNumber();
});
// .box hover [page 3]

// console.log(hover);
let hover = document.querySelectorAll(".box");

hover.forEach((box) => {
  // console.log(box);
  box.addEventListener("mouseenter", function () {
    // Update styles for nested elements when hovered
    box.querySelectorAll(".box-padder.rotate").forEach((rotate) => {
      rotate.style.backgroundColor = "lightblue";
      rotate.style.transform = "rotate(-6deg)";
    });

    box.querySelectorAll(".box-padder.rotate3d").forEach((rotate3d) => {
      rotate3d.style.backgroundColor = "pink";
      rotate3d.style.transform = "rotate(15deg)";
    });
    box.querySelectorAll(".box-img img").forEach((img) => {
      img.style.filter = "grayScale(0%)";
    });
  });

  box.addEventListener("mouseleave", function () {
    // Restore styles for nested elements when not hovered
    box.querySelectorAll(".box-padder.rotate").forEach((rotate) => {
      rotate.style.backgroundColor = "rgb(82, 82, 87)";
      rotate.style.transform = "rotate(2deg)";
    });

    box.querySelectorAll(".box-padder.rotate3d").forEach((rotate3d) => {
      rotate3d.style.backgroundColor = "rgb(82, 82, 87)";
      rotate3d.style.transform = "rotate(0deg)";
    });

    box.querySelectorAll(".box-img img").forEach((img) => {
      img.style.filter = "grayScale(100%)";
    });
  });
});

// page 4 swiper jsssssssssssss
const page4 = () => {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
};

// page 5 swiper js
const page5 = () => {
  var swiper = new Swiper(".mySwiper2", {
    effect: "cards",
    grabCursor: true,
  });
};
page5();
page4();
// LinkedIn Icon
const LinkedIn = () => {
  const linkedinIcons = document.querySelectorAll(
    ".fa-brands.fa-linkedin-in.Link"
  );
  linkedinIcons.forEach((linkedinIcon) => {
    linkedinIcon.addEventListener("click", function () {
      const linkedinUrl =
        "https://www.linkedin.com/in/abdul-rafay-khan-8ab9b6259";
      window.open(linkedinUrl, "_blank");
    });
  });
};
LinkedIn();

// Instagram Icon
const Instagram = () => {
  const instagramIcons = document.querySelectorAll(
    ".fa-brands.fa-square-instagram.Insta"
  );
  instagramIcons.forEach((instagramIcon) => {
    instagramIcon.addEventListener("click", function () {
      const instagramUrl =
        "https://instagram.com/iam__abdul_rafay?utm_source=qr&igshid=YzU1NGVlODEzOA==";
      window.open(instagramUrl, "_blank");
    });
  });
};
Instagram();

// Gamil ICOn
const Gmail = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const gmailIcon = document.getElementById("gmail-icon");

    // Add a click event listener to the Gmail icon
    gmailIcon.addEventListener("click", function (event) {
      event.preventDefault();

      // Define the email address and subject
      const emailAddress = "upwork8000@gmail.com"; // Your Gmail address
      const subject = "Hello from Portfolio  Website";

      // Construct the Gmail URL
      const gmailURL = `https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(
        subject
      )}`;

      // Open Gmail in a new tab or window
      window.open(gmailURL, "_blank");
    });
  });
};
Gmail();

// GithUb
const Git = () => {
  let git = document.querySelector("#GitHub");
  git.addEventListener("click", function () {
    const url = "https://github.com/iamabdulrafay/ismabdulrafay.github.io";
    window.open(url, "_blank");
  });
};

Git();
