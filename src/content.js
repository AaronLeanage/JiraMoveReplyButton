// content.js

function moveReplyButton() {
    const replyButtons = $('button:contains("Reply to customer")');
    replyButtons.each(function () {
        $(this).addClass('custom-reply-button');
    });

    const parentDiv = $(this).closest('div[class*="_o5721q9c"]');

    if (parentDiv.length) {
        // Remove all HTML content between the buttons
        const buttonSiblings = parentDiv.contents();
        const startRemoving = false;

        buttonSiblings.each(function () {
            if (this === $(this).prev()[0] && $(this).is('button')) {
                startRemoving = !startRemoving;
            }

            if (startRemoving) {
                $(this).remove();
            }
        });
    }
}

function observeDOM() {
    const targetNode = document.body;

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            moveReplyButton();
        });
    });

    // Define the type of mutations to observe (childList for added/removed nodes) then start observing the target node for configured mutations
    const config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
}

observeDOM();