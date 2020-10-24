$(document).ready(function()
{
	$("#submit-contact").click(function(event)
	{
		event.preventDefault();
		
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		if($.trim(name) == "")
		{
			$("#name").focus();
		}
		else if($.trim(email) == "")
		{
			$("#email").focus();
		}
		else if($.trim(message) == "")
		{
			$("#message").focus();
		}
		else
		{
			var l = Ladda.create(this);
			l.start();

			var settings = {
				"url": "https://personal-nodemailer.herokuapp.com/sendEmail",
				"method": "POST",
				"timeout": 0,
				"headers": {
					"Content-Type": "application/json"
				},
				"data": JSON.stringify({ 
					"name": name,
					"sender_mail": email,
					"subject": "CONTACT ME: freddythobhani.com",
					"message": message,
					"receiver": "thobhani.freddy@gmail.com" 
				}),
			};
			
			$.ajax(settings).done(function (response) {
				Ladda.stopAll();
					
				setTimeout(function()
				{
					$('#form-contact-container').fadeOut('slow', function()
					{
						$("#form-contact-container").html("").append("<h3>Thank You! I will get back to you as soon as possible. </h3>").fadeIn("fast");
					});
				}, 200);
			});
			
		}
	});
});