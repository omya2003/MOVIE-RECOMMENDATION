document.addEventListener("DOMContentLoaded", function () {
    const embeddedSection = document.getElementById("embeddedSection");
    const iframe = document.createElement("iframe");
    console.log('movie.html',imdb_id);

    // Set the source URL of the external page you want to display
    imdb_id = movid
    iframe.src = "https://vidsrc.to/embed/movie/" + imdb_id; // Replace with your desired URL
    
    // Set the attributes for the iframe
    iframe.width = "100%";
    iframe.height = "400px"; // Adjust the height as needed

    label.textContent = "new";

    // Append the iframe to the embedded section
    embeddedSection.appendChild(iframe);
   
});
window.onload = function () {
    console.log('movie.html',imdb_id);
    // Get the label by their IDs
    const label = document.getElementById("lid");

    // Change the label text to the input value
    label.textContent =  "new";
};
   