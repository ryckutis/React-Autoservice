import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { Wrapper, styledInput } from './LearnMoreBlock.styled';

export default function LearnMoreBlock() {
  return (
    <Wrapper>
      <div>
        <h2>We are taking car servicing seriously</h2>
        <div>
          <h3>Convenient service</h3>
          <p>
            <BsWrenchAdjustableCircle /> Through True Rich Attended does no end
            it his mother since real had half every him.
          </p>
        </div>
        <div>
          <h3>Expert mechanics</h3>
          <p>
            <BsPersonCircle /> Through True Rich Attended does no end it his
            mother since real had half every him.
          </p>
        </div>
        <div>
          <p>
            <h3>Transparent pricing</h3>
            <AiFillDollarCircle />
            Through True Rich Attended does no end it his mother since real had
            half every him.
          </p>
        </div>
        <a href='#'>Know more about us </a>
      </div>
      <form>
        <h2>Get a quote for the car service</h2>
        <input type='text' name='' id='' placeholder='Enter your location' />
        <br />
        <input type='text' name='' id='' placeholder='Enter your location' />
        <br />
        <input type='text' name='' id='' placeholder='Enter your location' />
        <br />
        <input type='text' name='' id='' placeholder='Your phone number' />
        <button>Get your quote</button>
      </form>
    </Wrapper>
  );
}

//how no make top section styled with styled-components?
