DROP DATABASE IF EXISTS reservation;
CREATE DATABASE reservation;
USE reservation;

CREATE TABLE listing (
  id INT NOT NULL AUTO_INCREMENT,
  maxGuest INT NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  cleanFee DECIMAL(5, 2) NOT NULL,
  serviceFee DECIMAL(5, 2) NOT NULL,
  review DECIMAL(2, 1) NOT NULL,
  effectiveDate DATE NOT NULL,
  validDay VARCHAR(3) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE booking (
  listing_id INT NOT NULL,
  date DATE NOT NULL
)

-- SELECT effectiveDate <= tdy ORDER BY effectiveDate desc LIMIT 1;