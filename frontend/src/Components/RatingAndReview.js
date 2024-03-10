import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const RatingAndReview = () => {
    const [reviews, setReviews] = useState({
      5: 30,
      4: 25,
      3: 10,
      2: 5,
      1: 2,
    });
  
    const updateValues = () => {
      let newReviews = { ...reviews };
  
      newReviews = Object.keys(newReviews).reduce((acc, value) => {
        const progressValue = Math.round((newReviews[value] / getTotal(newReviews)) * 100);
        acc[value] = progressValue;
        return acc;
      }, {});
  
      setReviews(newReviews);
      finalRating();
    };
  
    const finalRating = () => {
      let final = Object.entries(reviews).reduce((acc, [key, value]) => acc + key * value, 0);
      let ratingValue = parseFloat(final / getTotal(reviews)).toFixed(1);
      ratingValue = isNaN(ratingValue) ? '0.0' : ratingValue;
      return ratingValue;
    };
  
    const getTotal = (reviews) => {
      return Object.values(reviews).reduce((a, b) => a + b);
    };
  
    const nFormat = (number) => {
      if (number >= 1000 && number < 1000000) {
        return `${number.toString().slice(0, -3)}k`;
      } else if (number >= 1000000 && number < 1000000000) {
        return `${number.toString().slice(0, -6)}m`;
      } else if (number >= 1000000000) {
        return `${number.toString().slice(0, -9)}md`;
      } else {
        return number;
      }
    };
  
    return (
      <div className="container ">

        <div className="chart">
          {Object.keys(reviews)
            .reverse() // Reverse the order of keys
            .map((value) => (
              <div className="rate-box" key={value}>
                <span className="value">
                  {value}
                </span>
                <div className="progress-bar">
                  <span className="progress" style={{ width: `${reviews[value]}%` }}></span>
                </div>
                <span className="count">{nFormat(reviews[value])}</span>
              </div>
            ))}
        </div>

        <div className="global">
          <span className="global-value">{finalRating()}</span>
          <div className="rating-icons">
            <span className="one">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <FontAwesomeIcon key={star} icon={faStar} style={{ color: index < finalRating() ? '#ffc107' : '#cfd8dc' }} />
              ))}
            </span>
            <span className="two" style={{ background: `linear-gradient(to right, #66bb6a ${finalRating()}%, transparent 0%)` }}></span>
          </div>
          <span className="total-reviews">{getTotal(reviews)}</span>
        </div>
      </div>
    );
  };

export default RatingAndReview;
