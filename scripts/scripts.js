function showArtistForm() 
{
  
  var artistForm = document.getElementById("addArtistForm");
  if (artistForm.style.display === "none") 
  {
    artistForm.style.display = "block";
    var artistName = document.getElementById("artistName");
    document.getElementById("artistName").value = "";
    artistName.setAttribute("maxlength", "40");

    var aboutArtist = document.getElementById("aboutArtist");
    document.getElementById("aboutArtist").value = "";
    aboutArtist.setAttribute("maxlength", "40");

    document.getElementById("imageURL").value = "";
  } else 
  {
    artistForm.style.display = "none";
  }
}

function deleteArtist(deleteArtistButton) 
{
    deleteArtistButton.parentNode.parentNode.parentNode.removeChild(deleteArtistButton.parentNode.parentNode);
}

function addArtist() 
{
    var artistTable = document.getElementById("artistTable");
    var artistName = document.getElementById("artistName").value;
    var aboutArtist = document.getElementById("aboutArtist").value;
    var artistImageURL = document.getElementById("imageURL").value;
    var row = artistTable.insertRow(0);
    row.setAttribute("id", "artistTableRow");

    var artistImageCell = row.insertCell(0);
    var artistImage = document.createElement('img');
    if (artistImageURL)
    {
        artistImage.src = artistImageURL;
    } else 
    {
        artistImage.src = "https://randomuser.me/api/portraits/med/men/1.jpg"
    }
    artistImage.setAttribute("id", "artistImage");
    artistImageCell.appendChild(artistImage);

    var aboutArtistNameAndDescriptionCell = row.insertCell(1);
    aboutArtistNameAndDescriptionCell.setAttribute("id", "artistInfo");
 
    var artistNameP = document.createElement('p');
    var aboutArtistP = document.createElement('p');    
    aboutArtistP.class = "artistDescription";

    var artistNamePText = document.createTextNode(artistName);
    var aboutArtistPText = document.createTextNode(aboutArtist);
    artistNameP.appendChild(artistNamePText);
    aboutArtistP.appendChild(aboutArtistPText);
    artistNameP.setAttribute("id", "artistNameP" );

    aboutArtistNameAndDescriptionCell.appendChild(artistNameP);
    aboutArtistNameAndDescriptionCell.appendChild(aboutArtistP);

    var deleteArtistButton = document.createElement('button');
    deleteArtistButton.setAttribute("id", "deleteArtistButton");
    deleteArtistButton.setAttribute("onclick", "deleteArtist(this)");
    deleteArtistButton.innerText = "Delete";
    aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
}