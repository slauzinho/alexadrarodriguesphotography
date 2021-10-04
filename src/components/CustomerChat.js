import React, { useEffect } from "react"

const CustomerChat = () => {
  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat")
    chatbox.setAttribute("page_id", "111604183529367")
    chatbox.setAttribute("attribution", "biz_inbox")
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v11.0",
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/pt_PT/sdk/xfbml.customerchat.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  })
  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  )
}

export default CustomerChat
