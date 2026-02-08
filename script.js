function publishVideo() {
  const title = document.getElementById("title").value;
  const fileInput = document.getElementById("videoFile");
  const videoList = document.getElementById("videoList");

  if (title === "" || fileInput.files.length === 0) {
    alert("Remplis le titre et choisis une vidéo !");
    return;
  }

  const videoURL = URL.createObjectURL(fileInput.files[0]);

  const videoDiv = document.createElement("div");
  videoDiv.className = "video";

  videoDiv.innerHTML = `
    <h3>${title}</h3>
    <video controls width="300">
      <source src="${videoURL}">
    </video><br>
    <button onclick="alert('Abonné !')">S'abonner</button>
  `;

  videoList.appendChild(videoDiv);

  document.getElementById("title").value = "";
  fileInput.value = "";
}
