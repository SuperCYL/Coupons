$(document).ready(function () {
    $("#token-launch").on('click',function(){
        $('#terms-modal').addClass('whitepaper');
        modalOpen();
    })
    $('.btn-whitepaper').on('click', function (event) {
        $('#terms-modal').addClass('whitepaper');
        modalOpen();
    });
    $('#term-checkbox').change(function () {
        if (this.checked) {
            $('#term-agree-button').removeAttr("disabled");
        } else {
            $('#term-agree-button').attr("disabled", "disabled");
        }
    });
    $('#term-agree-button').click(function () {
        if ($('#terms-modal').hasClass('whitepaper')) {
            $('#term-checkbox').prop('checked', false);
            window.location.href = getWhitepaperPath();
        } else {
            modalClose();
        }
    });
    $('.modal-close').on('click', modalClose);

    function modalOpen() {
        if ($('#terms-modal').hasClass('whitepaper')) {
            $('#terms-modal .modal-close').show();
        } else {
            $('#terms-modal .modal-close').hide();
        }
        $('#terms-modal').height('100%');
    }

    function modalClose() {
        $('#terms-modal').height('0%');
        $('#term-checkbox').prop('checked', false);
        $('#term-agree-button').attr("disabled", "disabled");
    }

    function getWhitepaperPath() {
        return $(".btn-whitepaper").hasClass("en") ? "css/Bodhi_English_White_Paper.pdf" : "css/Bodhi_Chinese_White_Paper.pdf";
    }
});