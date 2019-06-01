import React, { Component } from 'react';
import Avatar from '../atoms/Avatar'
import TestimonialHeader from './TestimonialHeader';
import TestimonialText from './TestimonialText';
import TestimonialButtons from './TestimonialButtons';

class Testimonial extends Component {

  render() {
    return (
      <article class="center h-auto bg-near-white mw5 mw6-ns br3 hidden ba b--black-10 mv4 o-90">
       <div className="flex">
         <div class="pa4 flex flex-column items-center">
           <Avatar avatar="http://tachyons.io/img/logo.jpg"/>
           <TestimonialButtons />
         </div>
         <TestimonialText text="THIS MADE ME BIG AND STRONK LMAO" name="Derrick Gill"/>
       </div>
     </article>
    );
  }

}

export default Testimonial;
