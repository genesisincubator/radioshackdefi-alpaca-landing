import React from 'react'
import { Svg, SvgProps } from '@radioshack-libs/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4887 19.4725V14.0234H17.9535C19.5789 14.0234 21.1638 14.8715 21.1638 16.7412C21.1638 18.611 19.5586 19.4725 17.9535 19.4725H13.4887ZM20.2331 36.2538C18.0617 36.2606 15.9106 35.8396 13.9052 35.0153C11.8997 34.191 10.08 32.9799 8.55185 31.4524H13.4887V24.5142H16.3011L20.9615 31.4524H28.3803L22.9308 23.606C25.6286 22.4908 27.6991 20.3072 27.6991 16.7613C27.6991 10.6912 23.1804 8.5409 17.94 8.5409H8.55185C10.4554 6.645 12.8018 5.24324 15.3833 4.45984C17.9647 3.67644 20.7015 3.53558 23.351 4.04974C26.0006 4.5639 28.4812 5.71721 30.573 7.40748C32.6648 9.09775 34.3032 11.2728 35.3431 13.7399C36.383 16.207 36.7923 18.8899 36.5346 21.5511C36.277 24.2122 35.3604 26.7693 33.8661 28.9959C32.3717 31.2224 30.3458 33.0497 27.9678 34.3157C25.5897 35.5817 22.933 36.2474 20.2331 36.2538ZM3.78359 20.0334C3.77081 16.4966 4.92928 13.0531 7.08158 10.2304V29.7696C4.94323 26.9651 3.78552 23.5474 3.78359 20.0334ZM20.2331 0C16.2314 0 12.3195 1.17494 8.99219 3.37624C5.66488 5.57753 3.07155 8.70632 1.54016 12.3669C0.00876671 16.0276 -0.391916 20.0556 0.388782 23.9417C1.16948 27.8278 3.09649 31.3974 5.92614 34.1991C8.75578 37.0009 12.361 38.9089 16.2858 39.6818C20.2106 40.4548 24.2788 40.0581 27.9759 38.5418C31.673 37.0256 34.833 34.4578 37.0563 31.1633C39.2795 27.8689 40.4661 23.9956 40.4661 20.0334C40.4661 14.7202 38.3345 9.62463 34.54 5.86764C30.7456 2.11065 25.5992 0 20.2331 0V0Z"
        fill="#ED1C24"
      />
    </Svg>
  )
}

export default Icon