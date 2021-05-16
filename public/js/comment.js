const commentFormHandler = async function(event) {
  event.preventDefault();

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const body = document.querySelector('textarea[name="comment-body"]').value;

 if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#new-comment-form').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
