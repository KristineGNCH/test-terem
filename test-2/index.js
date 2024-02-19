$(document).ready(() => {

    function submit() {
        const json = JSON.stringify($('form').serializeArray()).slice(1, -1);
        postJson(json);
        return json;
    }

    function postJson(json) {
        const p = document.createElement('p');
        p.textContent = json;
        $('.container').append(p);
    };

    $('form').on('submit', (event) => {
        event.preventDefault();
        $.ajax({
            url: '',
            method: 'get',
            dataType: 'json',
            data: submit(),
            success: function (data) {
                alert(data);
            }
        });
    });
})