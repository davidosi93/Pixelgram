let posts = [
    {
        'profilepicture': 'img/ich.jpg',
        'author': 'David Osipov',
        'picture': 'img/img17.jpg',
        'likes': 'Gefällt 100 mal',
        'description': `Was für ein actionbepacktes Rennen. Dagegen sieht die Königsklasse, F1, <span
                        onclick="showText()" id="dots" class= "pointerMore"> mehr...</span> <span id="more">wie ein 
                        Haufen Amateure aus. 40 Fahrer gingen an den Start und nichtmal die letzten haben einen Meter
                        Strecke geschenkt.</span></p >`,
        'comments': []
    },

    {
        'profilepicture': 'img/profile1.jpg',
        'author': 'Max Mustermann',
        'picture': 'img/img16.jpg',
        'likes': 'Gefällt 68 mal',
        'description': 'Impressionen aus der Hauptstadt Aserbaidschans, Baku.',
        'comments': []
    },

    {
        'profilepicture': 'img/profile2.jpg',
        'author': 'Ulrike Musterfrau',
        'picture': 'img/img12.jpg',
        'likes': 'Gefällt 75 mal',
        'description': 'Roadtrip mit einem herlichen Ausblick.',
        'comments': []
    }
];

function showPost() {
    let content = document.getElementById('post');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += templatePost(post, i);

        let postContent = document.getElementById(`commentPosition${i}`);

        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            postContent.innerHTML += `<div class="position">
                                        <p class="commentAuthor">${post['author']}:</p><p>${comment}</p>
                                        <p class="delete" onclick="deleteComment(${i})">Löschen</p>
                                      </div>`;
        }
    }
}

function deleteComment(i) {
    posts[i]['comments'].splice(i, 1);
    showPost();
}

function practiceNotice() {
    alert('Thank you for clicking. This site is just for practice.');
}

function showText() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}

function postComment(index) {
    let comment = document.getElementById(`input${index}`);
    posts[index]['comments'].push(comment.value);
    comment.value = '';
    showPost();
}

function likePost(i) {
    document.getElementById(`noFilledHeart${i}`).classList.add('d-none');
    document.getElementById(`filledHeart${i}`).classList.remove('d-none');
}

function removeLike(i) {
    document.getElementById(`noFilledHeart${i}`).classList.remove('d-none');
    document.getElementById(`filledHeart${i}`).classList.add('d-none');
}

function templatePost(post, i) {
    return `
    <div class="post">
        <div class="postHeader">
            <div class="postHeaderLeft">
                <img src="${post['profilepicture']}">
                <p>${post['author']}</p>
            </div>
            <div class="postHeaderRight">
                <img src="img/list.png">
            </div>
        </div>
        <div class="imagePart">
            <img src="${post['picture']}">
        </div>
        <div class="likeSection">
            <div class="likeSectionImages">
                <img id="noFilledHeart${i}" onclick="likePost(${i})" src="img/love.png">
                <img id="filledHeart${i}" onclick="removeLike(${i})" class="d-none" src="img/heart.png">
                <img src="img/conversation.png">
                <img src="img/send.png">
            </div>
            <div class="likeSectionImages">
                <img src="img/mark.png">
            </div>
        </div>
        <div class="likeAmount">
            <p>${post['likes']}</p>
        </div>
        <div class="descriptionSection">
            <div class="descriptionAuthor">
                <p>${post['author']}</p>
            </div>
            <div class="descriptionPosition">
                <div class="description">
                    <p>${post['description']}</p>
                </div>
           </div>   
        </div>
    <div id="commentPosition${i}" class="description commentPosition">
                    
    </div>
        <div class="commentSection">
            <div class="commentSmiley">
                <img src="img/happy.png">
            </div>
            <div class="commentInput">
                <input id="input${i}" type="text" placeholder="Kommentieren...">
            </div>
            <div class="postComment">
                <p onclick="postComment(${i})">Posten</p>
            </div>
        </div>
        </div>
    </div>
    `;
}