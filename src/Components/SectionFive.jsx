import React from "react";
import Card from "./Card";

export default function SectionFive() {
  return (
    <div>
      <div className="content3 w-3/4 mx-auto py-12 md:px-7">
        <div>
          <div className="text-2xl font-bold">Partners</div>
        
        </div>
        <div>
          <div className="grid grid-cols-2 mx-auto md:grid-cols-4 gap-14 py-14">
            <Card
              subtitle=""
              logoPath="M39.405 11.7874V34.5148L59.1078 23.1276V0.399902L39.405 11.7874Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M56.2904 52.3506C55.8381 55.7125 53.5756 58.6215 50.4083 59.9144C48.8567 60.5601 47.1763 60.7546 45.4953 60.5601C43.8796 60.3665 42.2633 59.8492 40.5828 58.8805C38.2555 57.5863 35.9284 55.5833 33.2136 52.6096C37.4802 47.3736 40.0651 42.5901 41.0352 38.3244C41.4878 36.3203 41.5522 34.5102 41.3586 32.8293C41.1003 31.2135 40.5184 29.7262 39.613 28.4336C37.6091 25.525 34.2481 23.844 30.4989 23.844C26.7496 23.844 23.3884 25.5897 21.3845 28.4336C20.4791 29.7264 19.8981 31.2135 19.6391 32.8293C19.3808 34.5102 19.4453 36.3847 19.9625 38.3247C20.9319 42.5898 23.582 47.4383 27.7841 52.6733C25.1338 55.6478 22.742 57.6515 20.4146 58.9445C18.7342 59.9144 17.1179 60.4316 15.5021 60.6247C13.8364 60.8108 12.1505 60.5892 10.5894 59.979C7.42182 58.6862 5.15987 55.7762 4.70706 52.4151C4.51346 50.7995 4.6426 49.1837 5.28901 47.3736C5.4826 46.7268 5.80628 46.0815 6.12901 45.3053C6.58182 44.2715 7.09909 43.1718 7.61565 42.0726L7.68081 41.9441C12.1405 32.312 16.9243 22.4868 21.9017 12.9203L22.0956 12.5317C22.6128 11.563 23.1294 10.5292 23.6471 9.55912C24.1639 8.52459 24.7456 7.55475 25.4565 6.71381C26.814 5.16225 28.6241 4.32201 30.628 4.32201C32.6319 4.32201 34.4417 5.16225 35.7992 6.71404C36.5103 7.55475 37.0921 8.52459 37.6093 9.55935C38.1266 10.5292 38.6431 11.563 39.1604 12.5317L39.3549 12.9203C44.2672 22.5512 49.051 32.3765 53.5112 42.0086V42.0726C54.0285 43.1071 54.4806 44.2715 54.9978 45.3053C55.3213 46.0815 55.6442 46.7265 55.8378 47.3736C56.3551 49.0541 56.5489 50.6708 56.2906 52.3506H56.2904ZM30.4989 49.3122C27.0085 44.9172 24.7456 40.7797 23.9701 37.2901C23.6474 35.803 23.582 34.5102 23.7765 33.3465C23.9054 32.312 24.2938 31.4066 24.8101 30.6304C26.0385 28.8866 28.1068 27.7858 30.4989 27.7858C32.8906 27.7858 35.0237 28.821 36.1871 30.6304C36.7039 31.4066 37.0921 32.312 37.2212 33.3465C37.415 34.5102 37.3503 35.8675 37.0274 37.2901C36.2518 40.7158 33.9892 44.8527 30.4989 49.3122ZM59.6518 45.9512C59.3288 45.1754 59.0054 44.3354 58.6824 43.6244C58.1652 42.4614 57.6479 41.3617 57.1953 40.3272L57.1306 40.2632C52.671 30.5664 47.8871 20.7411 42.845 11.0465L42.6514 10.6574C42.1342 9.68779 41.6169 8.65326 41.1003 7.6192C40.4535 6.45506 39.8068 5.22811 38.773 4.06373C36.7037 1.47811 33.7309 0.0561523 30.5631 0.0561523C27.331 0.0561523 24.4224 1.47811 22.2889 3.93506C21.3198 5.09826 20.6087 6.32639 19.9623 7.49076C19.445 8.52459 18.9278 9.55912 18.4107 10.5292L18.2169 10.9159C13.2399 20.612 8.39167 30.4379 3.93128 40.134L3.86682 40.2632C3.41401 41.297 2.89674 42.3955 2.37948 43.5599C2.03367 44.326 1.71048 45.1021 1.41034 45.8872C0.569635 48.2783 0.311354 50.5412 0.634323 52.8679C1.34589 57.7161 4.57792 61.7891 9.03807 63.5985C10.7183 64.3101 12.4637 64.633 14.274 64.633C14.791 64.633 15.4374 64.5683 15.9547 64.5032C18.0875 64.2442 20.2853 63.5345 22.4181 62.3057C25.0689 60.819 27.59 58.6862 30.4339 55.5833C33.2778 58.6862 35.8637 60.8193 38.4493 62.3057C40.5828 63.5345 42.7803 64.2442 44.9134 64.5032C45.4306 64.5683 46.0771 64.633 46.5941 64.633C48.4042 64.633 50.2138 64.3101 51.83 63.5985C56.3549 61.7891 59.5222 57.6517 60.2333 52.8679C60.7506 50.605 60.4916 48.3437 59.6516 45.951L59.6518 45.9512Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M0.5 0.581543V3.15406H18.797V0.581543H0.5ZM21.3893 0.581543V3.15406H47.4633C47.4633 3.15406 44.7999 0.581543 41.2725 0.581543H21.3893ZM52.5782 0.581543V3.15406H68.3526L67.4163 0.581543H52.5782ZM79.6619 0.581543L78.7256 3.15406H94.3568V0.581543H79.6619ZM0.5 5.58447V8.15699H18.797V5.58447H0.5ZM21.3893 5.58814V8.15699H50.4889C50.4889 8.15699 50.1491 6.17711 49.5563 5.58814H21.3893ZM52.5782 5.58814V8.15699H70.082L69.2155 5.58814H52.5782ZM77.7893 5.58814L76.9227 8.15699H94.3568V5.58814H77.7893ZM5.75812 10.5874V13.1632H13.682V10.5874H5.75812ZM26.6474 10.5874V13.1632H34.5713V10.5874H26.6474ZM42.2786 10.5874V13.1632H50.2025C50.2025 13.1632 50.7055 11.8028 50.7055 10.5872H42.2786V10.5874ZM57.8363 10.5874V13.1632H71.8849L70.9486 10.5872H57.8363V10.5874ZM76.0635 10.5874L75.1235 13.1634H89.2419V10.5874H76.0635ZM5.75812 15.594V18.1662H13.682V15.594H5.75812ZM26.6474 15.594V18.1662H46.8868C46.8868 18.1662 48.5799 16.8461 49.1193 15.5936H26.6474V15.594ZM57.8363 15.594V18.1662H65.7602V16.7341L66.2633 18.1662H80.7782L81.318 16.7341V18.1662H89.2419V15.594H74.3671L73.5777 17.7731L72.7845 15.594H57.8363ZM5.75812 20.5966V23.1691H13.682V20.5966H5.75812ZM26.6474 20.5966V23.1691H49.1193C48.5797 21.9206 46.8868 20.5966 46.8868 20.5966H26.6474ZM57.8363 20.5966V23.1691H65.7602V20.5966H57.8363ZM67.1996 20.5966L68.158 23.1691H79.0414L79.952 20.5966H67.1996ZM81.318 20.5966V23.1691H89.2419V20.5966H81.318ZM5.75812 25.5995V28.172H13.682V25.5995H5.75812ZM26.6474 25.5995V28.172H34.5713V25.5995H26.6474ZM42.2786 25.5995V28.172H50.7055C50.7055 26.9579 50.2025 25.5995 50.2025 25.5995H42.2786ZM57.8363 25.5995V28.172H65.7602V25.5995H57.8363ZM68.9988 25.5995L69.9278 28.172H77.2238L78.1602 25.5995H68.9988ZM81.318 25.5995V28.172H89.2419V25.5995H81.318ZM0.643203 30.6026V33.1786H18.9402V30.6024H0.643203V30.6026ZM21.3893 30.6026V33.1786H49.5563C50.1491 32.5887 50.4889 30.6024 50.4889 30.6024H21.3893V30.6026ZM52.7214 30.6026V33.1786H65.7602V30.6024H52.7214V30.6026ZM70.8017 30.6026L71.7564 33.1786H75.4687L76.3646 30.6024H70.8017V30.6026ZM81.318 30.6026V33.1786H94.5V30.6024H81.318V30.6026ZM0.643203 35.609V38.1815H18.9402V35.609H0.643203ZM21.3893 35.609V38.1777H41.2725C44.7999 38.1777 47.4633 35.6088 47.4633 35.6088H21.3893V35.609ZM52.7214 35.609V38.1815H65.7602V35.609H52.7214ZM72.612 35.609L73.5299 38.174L73.6878 38.1777L74.6205 35.6088H72.612V35.609ZM81.318 35.609V38.1815H94.5V35.609H81.318Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M37.0846 0.399902C17.7494 0.399902 2.60121 24.9999 1.16797 45.7774C7.23557 56.3078 21.8674 60.2661 37.0852 60.2661C52.3018 60.2661 66.9344 56.3078 72.9989 45.7771C71.5654 24.9999 56.4192 0.399902 37.0849 0.399902"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
              <Card
              subtitle=""
              logoPath="M39.405 11.7874V34.5148L59.1078 23.1276V0.399902L39.405 11.7874Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M56.2904 52.3506C55.8381 55.7125 53.5756 58.6215 50.4083 59.9144C48.8567 60.5601 47.1763 60.7546 45.4953 60.5601C43.8796 60.3665 42.2633 59.8492 40.5828 58.8805C38.2555 57.5863 35.9284 55.5833 33.2136 52.6096C37.4802 47.3736 40.0651 42.5901 41.0352 38.3244C41.4878 36.3203 41.5522 34.5102 41.3586 32.8293C41.1003 31.2135 40.5184 29.7262 39.613 28.4336C37.6091 25.525 34.2481 23.844 30.4989 23.844C26.7496 23.844 23.3884 25.5897 21.3845 28.4336C20.4791 29.7264 19.8981 31.2135 19.6391 32.8293C19.3808 34.5102 19.4453 36.3847 19.9625 38.3247C20.9319 42.5898 23.582 47.4383 27.7841 52.6733C25.1338 55.6478 22.742 57.6515 20.4146 58.9445C18.7342 59.9144 17.1179 60.4316 15.5021 60.6247C13.8364 60.8108 12.1505 60.5892 10.5894 59.979C7.42182 58.6862 5.15987 55.7762 4.70706 52.4151C4.51346 50.7995 4.6426 49.1837 5.28901 47.3736C5.4826 46.7268 5.80628 46.0815 6.12901 45.3053C6.58182 44.2715 7.09909 43.1718 7.61565 42.0726L7.68081 41.9441C12.1405 32.312 16.9243 22.4868 21.9017 12.9203L22.0956 12.5317C22.6128 11.563 23.1294 10.5292 23.6471 9.55912C24.1639 8.52459 24.7456 7.55475 25.4565 6.71381C26.814 5.16225 28.6241 4.32201 30.628 4.32201C32.6319 4.32201 34.4417 5.16225 35.7992 6.71404C36.5103 7.55475 37.0921 8.52459 37.6093 9.55935C38.1266 10.5292 38.6431 11.563 39.1604 12.5317L39.3549 12.9203C44.2672 22.5512 49.051 32.3765 53.5112 42.0086V42.0726C54.0285 43.1071 54.4806 44.2715 54.9978 45.3053C55.3213 46.0815 55.6442 46.7265 55.8378 47.3736C56.3551 49.0541 56.5489 50.6708 56.2906 52.3506H56.2904ZM30.4989 49.3122C27.0085 44.9172 24.7456 40.7797 23.9701 37.2901C23.6474 35.803 23.582 34.5102 23.7765 33.3465C23.9054 32.312 24.2938 31.4066 24.8101 30.6304C26.0385 28.8866 28.1068 27.7858 30.4989 27.7858C32.8906 27.7858 35.0237 28.821 36.1871 30.6304C36.7039 31.4066 37.0921 32.312 37.2212 33.3465C37.415 34.5102 37.3503 35.8675 37.0274 37.2901C36.2518 40.7158 33.9892 44.8527 30.4989 49.3122ZM59.6518 45.9512C59.3288 45.1754 59.0054 44.3354 58.6824 43.6244C58.1652 42.4614 57.6479 41.3617 57.1953 40.3272L57.1306 40.2632C52.671 30.5664 47.8871 20.7411 42.845 11.0465L42.6514 10.6574C42.1342 9.68779 41.6169 8.65326 41.1003 7.6192C40.4535 6.45506 39.8068 5.22811 38.773 4.06373C36.7037 1.47811 33.7309 0.0561523 30.5631 0.0561523C27.331 0.0561523 24.4224 1.47811 22.2889 3.93506C21.3198 5.09826 20.6087 6.32639 19.9623 7.49076C19.445 8.52459 18.9278 9.55912 18.4107 10.5292L18.2169 10.9159C13.2399 20.612 8.39167 30.4379 3.93128 40.134L3.86682 40.2632C3.41401 41.297 2.89674 42.3955 2.37948 43.5599C2.03367 44.326 1.71048 45.1021 1.41034 45.8872C0.569635 48.2783 0.311354 50.5412 0.634323 52.8679C1.34589 57.7161 4.57792 61.7891 9.03807 63.5985C10.7183 64.3101 12.4637 64.633 14.274 64.633C14.791 64.633 15.4374 64.5683 15.9547 64.5032C18.0875 64.2442 20.2853 63.5345 22.4181 62.3057C25.0689 60.819 27.59 58.6862 30.4339 55.5833C33.2778 58.6862 35.8637 60.8193 38.4493 62.3057C40.5828 63.5345 42.7803 64.2442 44.9134 64.5032C45.4306 64.5683 46.0771 64.633 46.5941 64.633C48.4042 64.633 50.2138 64.3101 51.83 63.5985C56.3549 61.7891 59.5222 57.6517 60.2333 52.8679C60.7506 50.605 60.4916 48.3437 59.6516 45.951L59.6518 45.9512Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M0.5 0.581543V3.15406H18.797V0.581543H0.5ZM21.3893 0.581543V3.15406H47.4633C47.4633 3.15406 44.7999 0.581543 41.2725 0.581543H21.3893ZM52.5782 0.581543V3.15406H68.3526L67.4163 0.581543H52.5782ZM79.6619 0.581543L78.7256 3.15406H94.3568V0.581543H79.6619ZM0.5 5.58447V8.15699H18.797V5.58447H0.5ZM21.3893 5.58814V8.15699H50.4889C50.4889 8.15699 50.1491 6.17711 49.5563 5.58814H21.3893ZM52.5782 5.58814V8.15699H70.082L69.2155 5.58814H52.5782ZM77.7893 5.58814L76.9227 8.15699H94.3568V5.58814H77.7893ZM5.75812 10.5874V13.1632H13.682V10.5874H5.75812ZM26.6474 10.5874V13.1632H34.5713V10.5874H26.6474ZM42.2786 10.5874V13.1632H50.2025C50.2025 13.1632 50.7055 11.8028 50.7055 10.5872H42.2786V10.5874ZM57.8363 10.5874V13.1632H71.8849L70.9486 10.5872H57.8363V10.5874ZM76.0635 10.5874L75.1235 13.1634H89.2419V10.5874H76.0635ZM5.75812 15.594V18.1662H13.682V15.594H5.75812ZM26.6474 15.594V18.1662H46.8868C46.8868 18.1662 48.5799 16.8461 49.1193 15.5936H26.6474V15.594ZM57.8363 15.594V18.1662H65.7602V16.7341L66.2633 18.1662H80.7782L81.318 16.7341V18.1662H89.2419V15.594H74.3671L73.5777 17.7731L72.7845 15.594H57.8363ZM5.75812 20.5966V23.1691H13.682V20.5966H5.75812ZM26.6474 20.5966V23.1691H49.1193C48.5797 21.9206 46.8868 20.5966 46.8868 20.5966H26.6474ZM57.8363 20.5966V23.1691H65.7602V20.5966H57.8363ZM67.1996 20.5966L68.158 23.1691H79.0414L79.952 20.5966H67.1996ZM81.318 20.5966V23.1691H89.2419V20.5966H81.318ZM5.75812 25.5995V28.172H13.682V25.5995H5.75812ZM26.6474 25.5995V28.172H34.5713V25.5995H26.6474ZM42.2786 25.5995V28.172H50.7055C50.7055 26.9579 50.2025 25.5995 50.2025 25.5995H42.2786ZM57.8363 25.5995V28.172H65.7602V25.5995H57.8363ZM68.9988 25.5995L69.9278 28.172H77.2238L78.1602 25.5995H68.9988ZM81.318 25.5995V28.172H89.2419V25.5995H81.318ZM0.643203 30.6026V33.1786H18.9402V30.6024H0.643203V30.6026ZM21.3893 30.6026V33.1786H49.5563C50.1491 32.5887 50.4889 30.6024 50.4889 30.6024H21.3893V30.6026ZM52.7214 30.6026V33.1786H65.7602V30.6024H52.7214V30.6026ZM70.8017 30.6026L71.7564 33.1786H75.4687L76.3646 30.6024H70.8017V30.6026ZM81.318 30.6026V33.1786H94.5V30.6024H81.318V30.6026ZM0.643203 35.609V38.1815H18.9402V35.609H0.643203ZM21.3893 35.609V38.1777H41.2725C44.7999 38.1777 47.4633 35.6088 47.4633 35.6088H21.3893V35.609ZM52.7214 35.609V38.1815H65.7602V35.609H52.7214ZM72.612 35.609L73.5299 38.174L73.6878 38.1777L74.6205 35.6088H72.612V35.609ZM81.318 35.609V38.1815H94.5V35.609H81.318Z"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
            <Card
              subtitle=""
              logoPath="M37.0846 0.399902C17.7494 0.399902 2.60121 24.9999 1.16797 45.7774C7.23557 56.3078 21.8674 60.2661 37.0852 60.2661C52.3018 60.2661 66.9344 56.3078 72.9989 45.7771C71.5654 24.9999 56.4192 0.399902 37.0849 0.399902"
              paragraph="PaySkul helps you complete your academic journey when you are low on cash."
            />
          </div>
        </div>
        <div>
          {/* <button className="bg-primaryy py-4 px-14 rounded-md font-bold text-2xl text-white shadow-md">
            All Partners
          </button> */}
        </div>
      </div>
    </div>
  );
}
