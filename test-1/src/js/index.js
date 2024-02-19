document.getElementById('btn-1').addEventListener('click', () => {
    const header = document.getElementById('header');

    if (header.style.display == "none") {
        header.style.display = "block";
    } else {
        header.style.display = "none"
    }
});


document.getElementById('btn-2').addEventListener('click', () => {
    const blockOne = document.getElementById('block-1');
    const blockTwo = document.getElementById('block-2');

    if (blockTwo.nextSibling === blockOne) {
        blockTwo.parentNode.insertBefore(blockOne, blockTwo);
    } else {
        blockOne.parentNode.insertBefore(blockTwo, blockOne);
    }
});


$(document).ready(function () {
    $('#modalWindow').modal('show');
    });


