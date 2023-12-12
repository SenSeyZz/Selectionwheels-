// Add these imports at the beginning of your file
import 'animate.css/animate.min.css';
import { useEffect } from 'react';

export default function fadeIn() {
  useEffect(() => {
    // Hide the image containers initially
    document.querySelectorAll('.image-container, .weapon-container, .left-container, .right-container' ).forEach((element) => {
      element.style.visibility = 'hidden';
    });

    // Add a delay to give time for the page to load before triggering the animation
    const delay = 200; // milliseconds
    setTimeout(() => {
      // Add the 'animate__animated', 'animate__fadeIn', and 'animate__slower' classes
      // to trigger the fadeIn animation with slower duration
      document.querySelectorAll('.image-container, .weapon-container, .left-container, .right-container' ).forEach((element) => {
        element.style.visibility = 'visible';
        element.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower');
      });
    }, delay);
  }, []);

  return null; // You can return null or an empty element as this component doesn't render anything
}
