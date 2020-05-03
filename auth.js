const signUpUser = document.querySelector('#signUpUser');
signUpUser.addEventListener('submit',(e)=>{
    e.preventDefault();

    var actionCodeSettings = {
        url:alert('email gotten'),
        // This must be true.
        handleCodeInApp: true,
      };

    //get user info
    const email =signUpUser['updates'].value;
    
    auth.sendSignInLinkToEmail(email, actionCodeSettings).then(function(){
        alert('you passed'),
        window.localStorage.setItem('emailForSignIn', email);
    })

    
// Confirm the link is a sign-in with email link.
if (auth.isSignInWithEmailLink(window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    var email = window.localStorage.getItem(email);
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    auth.signInWithEmailLink(email, window.location.href)
      .then(function(result) {
        // Clear email from storage.
        window.localStorage.removeItem(email);
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
  }
})