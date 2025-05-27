//Review Recipes

let contact_us = document.querySelector('div.contact-us');

let document_header = document.querySelector('head');

let fontawesome_link = `<!--Font Awesone Icons-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>`;

document_header.insertAdjacentHTML('beforeend', fontawesome_link);

var review_system = `<table width = "fit-content" style="margin-left: auto; margin-right: auto;">
<tr>
    <td>
        <div class="course_review">
            <h1>Rate Our course</h1>
            <div class="review">
                <div class="post">
                    <div class="text">Thanks for rating the course!</div>
                    <div class="edit">EDIT REVIEW</div>
                </div>
                <div class="star-widget">
                    <input type="radio" name="rate" id="rate-5">
                    <label for="rate-5" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-4">
                    <label for="rate-4" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-3">
                    <label for="rate-3" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2">
                    <label for="rate-2" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-1">
                    <label for="rate-1" class="fas fa-star"></label>
                    <form action="#">
                    <header></header>
                    <div class="textarea">
                        <textarea cols="30" placeholder="Describe your learning experience"></textarea>
                    </div>
                    <div class="btn">
                        <button type="submit">Share</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </td>
</tr>
</table>`

contact_us.insertAdjacentHTML('beforebegin', review_system);

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
            widget.style.display = "none";
            post.style.display = "block";
            editBtn.onclick = ()=>{
            widget.style.display = "block";
            post.style.display = "none";
}
    return false;
}
let course_card_outline = document.querySelector('.course_card_outline');

let name_of_course = course_card_outline.querySelector('h1').innerHTML;
let course_image = course_card_outline.querySelector('img');

course_card_outline.querySelector('a').insertAdjacentHTML('afterend', `<button class="btn-primary" type="button" onclick='print()' style="margin: 3px;">Print notes</button>`); 