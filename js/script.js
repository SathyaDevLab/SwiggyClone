// Index page
function showRightsidebar() {
  let RS = document.getElementById("comeoutRight");
  RS.classList.add("activeRightSideBar");
}

function hideRightsidebar() {
  let RS = document.getElementById("comeoutRight");
  RS.classList.remove("activeRightSideBar");
}

function ShowLeftSidebar() {
  let LS = document.getElementById("comeoutLeft");
  LS.classList.add("activeLeftSideBar");
}
function hideLeftSidebar() {
  let LS = document.getElementById("comeoutLeft");
  LS.classList.remove("activeLeftSideBar");
}

// Help page
function heading1() {
  let head1 = document.getElementById("tap1");
  head1.classList.add("heading-active");
  let head2 = document.getElementById("tap2");
  head2.classList.remove("heading-active");
  let head3 = document.getElementById("tap3");
  head3.classList.remove("heading-active");
  let page1 = document.getElementById("page1");
  page1.classList.add("display-page");
  let page2 = document.getElementById("page2");
  page2.classList.remove("display-page");
  let page3 = document.getElementById("page3");
  page3.classList.remove("display-page");
}
function heading2() {
  let head1 = document.getElementById("tap1");
  head1.classList.remove("heading-active");
  let head2 = document.getElementById("tap2");
  head2.classList.add("heading-active");
  let head3 = document.getElementById("tap3");
  head3.classList.remove("heading-active");
  let page1 = document.getElementById("page1");
  page1.classList.remove("display-page");
  let page2 = document.getElementById("page2");
  page2.classList.add("display-page");
  let page3 = document.getElementById("page3");
  page3.classList.remove("display-page");
}
function heading3() {
  let head1 = document.getElementById("tap1");
  head1.classList.remove("heading-active");
  let head2 = document.getElementById("tap2");
  head2.classList.remove("heading-active");
  let head3 = document.getElementById("tap3");
  head3.classList.add("heading-active");
  let page1 = document.getElementById("page1");
  page1.classList.remove("display-page");
  let page2 = document.getElementById("page2");
  page2.classList.remove("display-page");
  let page3 = document.getElementById("page3");
  page3.classList.add("display-page");
}
