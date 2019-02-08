import React, { Component } from "react";
import "./style.css";

const Contact = () => {
  return (
    <div class="contact-form align-center">
    <section class="mb-4">
    <h4 class="h4-responsive  my-4">Send a message</h4>
    <div class="row">
   
        <div class="col-md-7 mb-md-0 mb-6">
        <form action="https://formkeep.com/f/a4b76bbbd4ee" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="label">Your name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="email" id="email" name="email" class="form-control"/>
                            <label for="email" class="label">Your email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message" class="label">Your message </label>
                        </div>
                    </div>
                </div>
            </form>
            <div class="text-center text-md-left">
                <a class="btn btn-secondary white-text btn-pad" >Send</a>
            </div>

        </div>
    
        <div class="col-md-4 mb-md-0 mb-6 twitter">
        <a class="twitter-follow-button"
        href="https://twitter.com/nylaninjarose">
       Follow Nyla</a>
        <a class="twitter-timeline" 
        data-width="300" 
        data-height="300"
        data-link-color="#f5a5b9" 
        data-tweet-limit="2"
        data-chrome=" nofooter noscrollbar noheader"
         href="https://twitter.com/nylaninjarose?ref_src=twsrc%5Etfw">Tweets by nylaninjarose</a> 
        </div>
    </div>
    
</section>



</div>
  );
};
export default Contact;
