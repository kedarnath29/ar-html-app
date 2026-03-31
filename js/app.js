window.onload = function () {
  if (document.getElementById("noteType")) {
    document.getElementById("noteType").value = localStorage.getItem("noteType");
    document.getElementById("noteSubject").value = localStorage.getItem("noteSubject");
    document.getElementById("comment").value = localStorage.getItem("comment");
  }
};
