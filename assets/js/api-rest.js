$(document).ready(function () {

    var estado = $('.estado');
    var mi_div = $('.datos');

    $('#btn-get').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json',
            success: function (data, status, xhr) {
                for (datos in data) {
                    var valor = data[datos];
                    mi_div.append('<div class="card border-danger  mt-4 mb-4"><div class="card-body"><h2>' + valor.id + ' ' + valor.title + '</h2>' + '<p>' + valor.body + '</p><br></div></div>');
                }

            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error: ' + errorMessage);
            }
        });

    });
    
    $('#btn-get2').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            dataType: 'json',
            success: function (data, status, xhr) {

                var valor = data;
                mi_div.append('<div class="card border-danger  mt-4 mb-4"><div class="card-body"><h2>' + valor.id + ' ' + valor.title + '</h2>' + '<p>' + valor.body + '</p><br></div></div>');


            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error: ' + errorMessage);
            }
        });

    });


    $('#btn-post').click(function () {
        $.ajax('https://jsonplaceholder.typicode.com/posts', {
            type: 'POST',
            data: {title: 'api-rest-full', body: 'probando api rest full ', userId: 10},  // data to submit
            success: function (data, status, xhr) {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO POST' + ' ' + status + '</div>');
            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error' + errorMessage);
            }
        });
    });

    $('#btn-patch').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'PATCH',
            data: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "Probando metdo PATCH"
            },  // data to submit
            success: function (data, status, xhr) {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO PATCH' + ' ' + status + '</div>');
            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error' + errorMessage);
            }
        });
    });

    $('#btn-put').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'PUT',
            data: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "Probando Metodo PUT"
            },  // data to submit
            success: function (data, status, xhr) {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO PUT' + ' ' + status + '</div>');
            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error' + errorMessage);
            }
        });
    });

    $('#btn-delete').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'DELETE',
            data: {
                userId: 1
            },  // data to submit
            success: function (data, status, xhr) {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO DELETE' + ' ' + status + '</div>');
            },
            error: function (jqXhr, textStatus, errorMessage) {
                estado.append('Error' + errorMessage);
            }
        });
    });
});