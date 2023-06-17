<!DOCTYPE html>
<html>
  <head>
    <title>Simple PHP Contact Form</title>
    <link rel="stylesheet" href="0-cosmetics.css">
    <!-- (A) GOOGLE RECAPTCHA API -->
    <script src="https://www.google.com/recaptcha/api.js"></script>

    <!-- (B) AJAX SUBMISSION -->
    <script>
    function doajax () {
      // (B1) GET FORM DATA - APPEND RECAPTCHA RESPONSE
      var data = new FormData(document.getElementById("cform"));
      data.append("g-recaptcha-response", grecaptcha.getResponse());

      // (B2) AJAX FETCH
      fetch("3-process.php", { method: "POST", body: data })
      .then(res => res.text())
      .then(txt => {
        // DO SOMETHING AFTER FORM SUBMISSION
        console.log(txt);
      });
      return false;
    }
    </script>
  </head>
  <body>
    <!-- (C) CONTACT FORM -->
	
<form id="cform" method="post" onsubmit="return doajax();">
      
      <input type="email" name="name" placeholder="Email" class="text-field w-input" required >

      <input type="text" name="email" placeholder="Subject" class="text-field w-input" required>

      <textarea name="message" placeholder="Message" class="text-field is--area w-input" required></textarea>

      <!-- (D) CAPTCHA - CHANGE SITE KEY! -->
      <div class="g-recaptcha" data-sitekey="6Le0HNElAAAAAJzVjk_BBZBD4Vk--w4hKDike20X"></div>

      <input type="submit" value="Submit" class="button is--submit w-button">
    </form>
	
	
  </body>
</html>