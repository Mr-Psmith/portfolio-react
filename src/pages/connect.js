import classes from "./contact.module.css";

function Contact(props) {
   return (
      <>
         <div className={classes.contactMain}>
            <main className={classes.contactMain}>
               <div className={classes.contactUnvisibleblock1}>
                  <form method="get" encType="text/plain">
                     <div className={classes.contactUnvisibleblock1_1}>
                        <div>
                           <label className={classes.contactFormNameLabel} htmlFor="name">
                              Name:
                              <input type="text" name="name" />
                           </label>
                        </div>
                        <div>
                           <label className={classes.contactFormEmailLabel} htmlFor="email">
                              Email:
                              <input type="text" name="email" />
                           </label>
                        </div>
                     </div>
                     <div>
                        <label className={classes.contactMessageNamLabel}>Message:</label>
                        <textarea className={classes.formContactMessageTextarea} name="comments" rows="12" cols="30" defaultValue={"This is a work in progress, as I am mainly a front-end developer, and I am still just training in back-end. But my email is psancthus@gmail.com . Thank you"}>
                           
                        </textarea>
                     </div>
                     <div className={classes.contactFormButtons}>
                        <button onClick={props.contactButtonHandlerPr}>Send</button>
                     </div>
                  </form>
               </div>
               <div className={classes.contactUnvisibleblock2}>
                     <a href="https://www.facebook.com/messages/t/100000633126813" target="_blank" className={classes.contactFac}>
                        Or you can write to me on Fb
                     </a>
               </div>
            </main>
         </div>
      </>
   );
}

export default Contact;
