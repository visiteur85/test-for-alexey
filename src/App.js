import './App.css';
import {Header} from "./Components/Header/Header";
import {Avatar} from "./Pages/avatar/Avatar";
import {AboutMe} from "./Pages/aboutMe/AboutMe";

import {Teaching} from "./Pages/teaching/Teaching";
import Reviews from "./Pages/reviews/Reviews";
import React from "react";
import {AboutSchool} from "./Pages/aboutScool/AboutSchool";

function App() {
    return (
        <div className="App">
            <Header/>
            <Avatar/>
            <div className='background'>
                <AboutMe/>
            </div>
            <Teaching/>
            <div className='background'>
                <AboutSchool/>
            </div>
            <Reviews/>


            {/*не забыть удалить блок ниже, он просто для теста пока*/}
            <Teaching/>
            {/*<svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">*/}
            {/*        10 августа*/}
            {/*    </text>*/}
            {/*    <path opacity="0.7" d="M42.8047 31.6089H44.2109C44.1377 32.2827 43.9448 32.8857 43.6323 33.418C43.3198 33.9502 42.8779 34.3726 42.3066 34.6851C41.7354 34.9927 41.0225 35.1465 40.168 35.1465C39.543 35.1465 38.9741 35.0293 38.4614 34.7949C37.9536 34.5605 37.5166 34.2285 37.1504 33.7988C36.7842 33.3643 36.501 32.8442 36.3008 32.2388C36.1055 31.6284 36.0078 30.9497 36.0078 30.2026V29.1406C36.0078 28.3936 36.1055 27.7173 36.3008 27.1118C36.501 26.5015 36.7866 25.979 37.1577 25.5444C37.5337 25.1099 37.9854 24.7754 38.5127 24.541C39.04 24.3066 39.6333 24.1895 40.2925 24.1895C41.0981 24.1895 41.7793 24.3408 42.3359 24.6436C42.8926 24.9463 43.3247 25.3662 43.6323 25.9033C43.9448 26.4355 44.1377 27.0532 44.2109 27.7563H42.8047C42.7363 27.2583 42.6094 26.8311 42.4238 26.4746C42.2383 26.1133 41.9746 25.835 41.6328 25.6396C41.291 25.4443 40.8442 25.3467 40.2925 25.3467C39.8188 25.3467 39.4014 25.437 39.04 25.6177C38.6836 25.7983 38.3833 26.0547 38.1392 26.3867C37.8999 26.7188 37.7192 27.1167 37.5972 27.5806C37.4751 28.0444 37.4141 28.5596 37.4141 29.126V30.2026C37.4141 30.7251 37.4678 31.2158 37.5752 31.6748C37.6875 32.1338 37.856 32.5366 38.0806 32.8833C38.3052 33.23 38.5908 33.5034 38.9375 33.7036C39.2842 33.8989 39.6943 33.9966 40.168 33.9966C40.7686 33.9966 41.2471 33.9014 41.6035 33.7109C41.96 33.5205 42.2285 33.2471 42.4092 32.8906C42.5947 32.5342 42.7266 32.1069 42.8047 31.6089ZM49.1621 27.0752V35H47.7998V27.0752H49.1621ZM51.8208 27.0752V28.1738H45.1924V27.0752H51.8208ZM57.7095 33.645V29.5654C57.7095 29.2529 57.646 28.9819 57.519 28.7524C57.397 28.5181 57.2114 28.3374 56.9624 28.2104C56.7134 28.0835 56.4058 28.02 56.0396 28.02C55.6978 28.02 55.3975 28.0786 55.1387 28.1958C54.8848 28.313 54.6846 28.4668 54.5381 28.6572C54.3965 28.8477 54.3257 29.0527 54.3257 29.2725H52.9707C52.9707 28.9893 53.0439 28.7085 53.1904 28.4302C53.3369 28.1519 53.5469 27.9004 53.8203 27.6758C54.0986 27.4463 54.4307 27.2656 54.8164 27.1338C55.207 26.9971 55.6416 26.9287 56.1201 26.9287C56.6963 26.9287 57.2041 27.0264 57.6436 27.2217C58.0879 27.417 58.4346 27.7124 58.6836 28.1079C58.9375 28.4985 59.0645 28.9893 59.0645 29.5801V33.2715C59.0645 33.5352 59.0864 33.8159 59.1304 34.1138C59.1792 34.4116 59.25 34.668 59.3428 34.8828V35H57.9292C57.8608 34.8438 57.8071 34.6362 57.7681 34.3774C57.729 34.1138 57.7095 33.8696 57.7095 33.645ZM57.9438 30.1953L57.9585 31.1475H56.5889C56.2031 31.1475 55.8589 31.1792 55.5562 31.2427C55.2534 31.3013 54.9995 31.3916 54.7944 31.5137C54.5894 31.6357 54.4331 31.7896 54.3257 31.9751C54.2183 32.1558 54.1646 32.3682 54.1646 32.6123C54.1646 32.8613 54.2207 33.0884 54.333 33.2935C54.4453 33.4985 54.6138 33.6621 54.8384 33.7842C55.0679 33.9014 55.3486 33.96 55.6807 33.96C56.0957 33.96 56.4619 33.8721 56.7793 33.6963C57.0967 33.5205 57.3481 33.3057 57.5337 33.0518C57.7241 32.7979 57.8267 32.5513 57.8413 32.312L58.4199 32.9639C58.3857 33.1689 58.293 33.396 58.1416 33.645C57.9902 33.894 57.7876 34.1333 57.5337 34.3628C57.2847 34.5874 56.9868 34.7754 56.6401 34.9268C56.2983 35.0732 55.9126 35.1465 55.4829 35.1465C54.9458 35.1465 54.4746 35.0415 54.0693 34.8315C53.6689 34.6216 53.3564 34.3408 53.1318 33.9893C52.9121 33.6328 52.8022 33.2349 52.8022 32.7954C52.8022 32.3706 52.8853 31.9971 53.0513 31.6748C53.2173 31.3477 53.4565 31.0767 53.769 30.8618C54.0815 30.6421 54.4575 30.4761 54.897 30.3638C55.3364 30.2515 55.8271 30.1953 56.3691 30.1953H57.9438ZM62.5508 28.5986V38.0469H61.1885V27.0752H62.4336L62.5508 28.5986ZM67.8901 30.9717V31.1255C67.8901 31.7017 67.8218 32.2363 67.6851 32.7295C67.5483 33.2178 67.3481 33.6426 67.0845 34.0039C66.8257 34.3652 66.5059 34.646 66.125 34.8462C65.7441 35.0464 65.3071 35.1465 64.814 35.1465C64.311 35.1465 63.8667 35.0635 63.481 34.8975C63.0952 34.7314 62.7681 34.4897 62.4995 34.1724C62.231 33.855 62.0161 33.4741 61.855 33.0298C61.6987 32.5854 61.5913 32.085 61.5327 31.5283V30.708C61.5913 30.1221 61.7012 29.5972 61.8623 29.1333C62.0234 28.6694 62.2358 28.2739 62.4995 27.9468C62.7681 27.6147 63.0928 27.3633 63.4736 27.1924C63.8545 27.0166 64.2939 26.9287 64.792 26.9287C65.29 26.9287 65.7319 27.0264 66.1177 27.2217C66.5034 27.4121 66.8281 27.6855 67.0918 28.042C67.3555 28.3984 67.5532 28.8257 67.6851 29.3237C67.8218 29.8169 67.8901 30.3662 67.8901 30.9717ZM66.5278 31.1255V30.9717C66.5278 30.5762 66.4863 30.2051 66.4033 29.8584C66.3203 29.5068 66.1909 29.1992 66.0151 28.9355C65.8442 28.667 65.6245 28.457 65.356 28.3057C65.0874 28.1494 64.7676 28.0713 64.3965 28.0713C64.0547 28.0713 63.7568 28.1299 63.5029 28.2471C63.2539 28.3643 63.0415 28.5229 62.8657 28.7231C62.6899 28.9185 62.5459 29.1431 62.4336 29.397C62.3262 29.646 62.2456 29.9048 62.1919 30.1733V32.0703C62.2896 32.4121 62.4263 32.7344 62.6021 33.0371C62.7778 33.335 63.0122 33.5767 63.3052 33.7622C63.5981 33.9429 63.9668 34.0332 64.4111 34.0332C64.7773 34.0332 65.0923 33.9575 65.356 33.8062C65.6245 33.6499 65.8442 33.4375 66.0151 33.1689C66.1909 32.9004 66.3203 32.5928 66.4033 32.2461C66.4863 31.8945 66.5278 31.521 66.5278 31.1255ZM72.2627 27.0752V35H70.9004V27.0752H72.2627ZM74.9214 27.0752V28.1738H68.293V27.0752H74.9214Z" fill="#D8E6E5"/>*/}
            {/*    <path d="M51.7949 47.7422V62H49.207V50.7598L45.7793 51.8926V49.8027L51.502 47.7422H51.7949ZM65.9941 53.6699V56.0625C65.9941 57.1562 65.8835 58.0905 65.6621 58.8652C65.4408 59.64 65.1217 60.2747 64.7051 60.7695C64.2884 61.2578 63.7904 61.6191 63.2109 61.8535C62.6315 62.0814 61.987 62.1953 61.2773 62.1953C60.7109 62.1953 60.1836 62.1237 59.6953 61.9805C59.207 61.8307 58.7676 61.6029 58.377 61.2969C57.9928 60.9844 57.6608 60.5872 57.3809 60.1055C57.1074 59.6237 56.8958 59.0475 56.7461 58.377C56.6029 57.7064 56.5312 56.9349 56.5312 56.0625V53.6699C56.5312 52.5762 56.6419 51.6452 56.8633 50.877C57.0911 50.1087 57.4134 49.4805 57.8301 48.9922C58.2467 48.5039 58.7448 48.1491 59.3242 47.9277C59.9036 47.6999 60.5482 47.5859 61.2578 47.5859C61.8307 47.5859 62.3581 47.6576 62.8398 47.8008C63.3281 47.944 63.7643 48.1686 64.1484 48.4746C64.5391 48.7741 64.8711 49.1647 65.1445 49.6465C65.418 50.1217 65.6263 50.6947 65.7695 51.3652C65.9193 52.0293 65.9941 52.7975 65.9941 53.6699ZM63.416 56.4141V53.3086C63.416 52.7617 63.3835 52.2865 63.3184 51.8828C63.2598 51.4727 63.1719 51.1243 63.0547 50.8379C62.9375 50.5514 62.791 50.3203 62.6152 50.1445C62.4395 49.9622 62.2376 49.8288 62.0098 49.7441C61.7819 49.6595 61.5312 49.6172 61.2578 49.6172C60.9193 49.6172 60.6165 49.6855 60.3496 49.8223C60.0827 49.9525 59.8581 50.1608 59.6758 50.4473C59.4935 50.7337 59.3535 51.1146 59.2559 51.5898C59.1647 52.0586 59.1191 52.6315 59.1191 53.3086V56.4141C59.1191 56.9609 59.1484 57.4395 59.207 57.8496C59.2721 58.2598 59.3633 58.6113 59.4805 58.9043C59.6042 59.1973 59.7507 59.4382 59.9199 59.627C60.0957 59.8092 60.2975 59.946 60.5254 60.0371C60.7533 60.1217 61.0039 60.1641 61.2773 60.1641C61.6224 60.1641 61.9251 60.0957 62.1855 59.959C62.4525 59.8223 62.6771 59.6074 62.8594 59.3145C63.0417 59.015 63.1784 58.6276 63.2695 58.1523C63.3672 57.6706 63.416 57.0911 63.416 56.4141Z" fill="#FDFDFD"/>*/}
            {/*    <path d="M33.2148 84.5547V80.2031C33.2148 79.8698 33.1471 79.5807 33.0117 79.3359C32.8815 79.0859 32.6836 78.8932 32.418 78.7578C32.1523 78.6224 31.8242 78.5547 31.4336 78.5547C31.069 78.5547 30.7487 78.6172 30.4727 78.7422C30.2018 78.8672 29.9883 79.0312 29.832 79.2344C29.681 79.4375 29.6055 79.6562 29.6055 79.8906H28.1602C28.1602 79.5885 28.2383 79.2891 28.3945 78.9922C28.5508 78.6953 28.7747 78.4271 29.0664 78.1875C29.3633 77.9427 29.7174 77.75 30.1289 77.6094C30.5456 77.4635 31.0091 77.3906 31.5195 77.3906C32.1341 77.3906 32.6758 77.4948 33.1445 77.7031C33.6185 77.9115 33.9883 78.2266 34.2539 78.6484C34.5247 79.0651 34.6602 79.5885 34.6602 80.2188V84.1562C34.6602 84.4375 34.6836 84.737 34.7305 85.0547C34.7826 85.3724 34.8581 85.6458 34.957 85.875V86H33.4492C33.3763 85.8333 33.319 85.612 33.2773 85.3359C33.2357 85.0547 33.2148 84.7943 33.2148 84.5547ZM33.4648 80.875L33.4805 81.8906H32.0195C31.6081 81.8906 31.2409 81.9245 30.918 81.9922C30.5951 82.0547 30.3242 82.151 30.1055 82.2812C29.8867 82.4115 29.7201 82.5755 29.6055 82.7734C29.4909 82.9661 29.4336 83.1927 29.4336 83.4531C29.4336 83.7188 29.4935 83.9609 29.6133 84.1797C29.7331 84.3984 29.9128 84.5729 30.1523 84.7031C30.3971 84.8281 30.6966 84.8906 31.0508 84.8906C31.4935 84.8906 31.8841 84.7969 32.2227 84.6094C32.5612 84.4219 32.8294 84.1927 33.0273 83.9219C33.2305 83.651 33.3398 83.388 33.3555 83.1328L33.9727 83.8281C33.9362 84.0469 33.8372 84.2891 33.6758 84.5547C33.5143 84.8203 33.2982 85.0755 33.0273 85.3203C32.7617 85.5599 32.444 85.7604 32.0742 85.9219C31.7096 86.0781 31.2982 86.1562 30.8398 86.1562C30.2669 86.1562 29.7643 86.0443 29.332 85.8203C28.9049 85.5964 28.5716 85.2969 28.332 84.9219C28.0977 84.5417 27.9805 84.1172 27.9805 83.6484C27.9805 83.1953 28.069 82.7969 28.2461 82.4531C28.4232 82.1042 28.6784 81.8151 29.0117 81.5859C29.3451 81.3516 29.7461 81.1745 30.2148 81.0547C30.6836 80.9349 31.207 80.875 31.7852 80.875H33.4648ZM40.9023 82.2812H38.1289L38.1133 81.125H40.3789C40.8268 81.125 41.1992 81.0807 41.4961 80.9922C41.7982 80.9036 42.0247 80.7708 42.1758 80.5938C42.3268 80.4167 42.4023 80.1979 42.4023 79.9375C42.4023 79.7344 42.3581 79.5573 42.2695 79.4062C42.1862 79.25 42.0586 79.1224 41.8867 79.0234C41.7148 78.9193 41.5013 78.8438 41.2461 78.7969C40.9961 78.7448 40.7018 78.7188 40.3633 78.7188H38.5117V86H37.0664V77.5469H40.3633C40.8997 77.5469 41.3815 77.5938 41.8086 77.6875C42.2409 77.7812 42.6081 77.9245 42.9102 78.1172C43.2174 78.3047 43.4518 78.5443 43.6133 78.8359C43.7747 79.1276 43.8555 79.4714 43.8555 79.8672C43.8555 80.1224 43.8034 80.3646 43.6992 80.5938C43.5951 80.8229 43.4414 81.026 43.2383 81.2031C43.0352 81.3802 42.7852 81.526 42.4883 81.6406C42.1914 81.75 41.8503 81.8203 41.4648 81.8516L40.9023 82.2812ZM40.9023 86H37.6055L38.3242 84.8281H40.9023C41.3034 84.8281 41.6367 84.7786 41.9023 84.6797C42.168 84.5755 42.3659 84.4297 42.4961 84.2422C42.6315 84.0495 42.6992 83.8203 42.6992 83.5547C42.6992 83.2891 42.6315 83.0625 42.4961 82.875C42.3659 82.6823 42.168 82.5365 41.9023 82.4375C41.6367 82.3333 41.3034 82.2812 40.9023 82.2812H38.707L38.7227 81.125H41.4648L41.9883 81.5625C42.4518 81.599 42.8451 81.7135 43.168 81.9062C43.4909 82.099 43.7357 82.3438 43.9023 82.6406C44.069 82.9323 44.1523 83.25 44.1523 83.5938C44.1523 83.9896 44.0768 84.3385 43.9258 84.6406C43.7799 84.9427 43.5664 85.1953 43.2852 85.3984C43.0039 85.5964 42.6628 85.7474 42.2617 85.8516C41.8607 85.9505 41.4076 86 40.9023 86ZM51.5508 77.5469V78.7422H47.6445V86H46.1992V77.5469H51.5508ZM55.1836 85.125L57.5352 77.5469H59.082L55.6914 87.3047C55.6133 87.513 55.5091 87.737 55.3789 87.9766C55.2539 88.2214 55.0924 88.4531 54.8945 88.6719C54.6966 88.8906 54.457 89.0677 54.1758 89.2031C53.8997 89.3438 53.569 89.4141 53.1836 89.4141C53.069 89.4141 52.9232 89.3984 52.7461 89.3672C52.569 89.3359 52.444 89.3099 52.3711 89.2891L52.3633 88.1172C52.4049 88.1224 52.4701 88.1276 52.5586 88.1328C52.6523 88.1432 52.7174 88.1484 52.7539 88.1484C53.082 88.1484 53.3607 88.1042 53.5898 88.0156C53.819 87.9323 54.0117 87.7891 54.168 87.5859C54.3294 87.388 54.4674 87.1146 54.582 86.7656L55.1836 85.125ZM53.457 77.5469L55.6523 84.1094L56.0273 85.6328L54.9883 86.1641L51.8789 77.5469H53.457ZM63.6602 84.9688C64.0039 84.9688 64.3216 84.8984 64.6133 84.7578C64.9049 84.6172 65.1445 84.4245 65.332 84.1797C65.5195 83.9297 65.6263 83.6458 65.6523 83.3281H67.0273C67.0013 83.8281 66.832 84.2943 66.5195 84.7266C66.2122 85.1536 65.8086 85.5 65.3086 85.7656C64.8086 86.026 64.2591 86.1562 63.6602 86.1562C63.0247 86.1562 62.4701 86.0443 61.9961 85.8203C61.5273 85.5964 61.1367 85.2891 60.8242 84.8984C60.5169 84.5078 60.2852 84.0599 60.1289 83.5547C59.9779 83.0443 59.9023 82.5052 59.9023 81.9375V81.6094C59.9023 81.0417 59.9779 80.5052 60.1289 80C60.2852 79.4896 60.5169 79.0391 60.8242 78.6484C61.1367 78.2578 61.5273 77.9505 61.9961 77.7266C62.4701 77.5026 63.0247 77.3906 63.6602 77.3906C64.3216 77.3906 64.8997 77.526 65.3945 77.7969C65.8893 78.0625 66.2773 78.4271 66.5586 78.8906C66.8451 79.349 67.0013 79.8698 67.0273 80.4531H65.6523C65.6263 80.1042 65.5273 79.7891 65.3555 79.5078C65.1888 79.2266 64.9596 79.0026 64.668 78.8359C64.3815 78.6641 64.0456 78.5781 63.6602 78.5781C63.2174 78.5781 62.8451 78.6667 62.543 78.8438C62.2461 79.0156 62.0091 79.25 61.832 79.5469C61.6602 79.8385 61.5352 80.1641 61.457 80.5234C61.3841 80.8776 61.3477 81.2396 61.3477 81.6094V81.9375C61.3477 82.3073 61.3841 82.6719 61.457 83.0312C61.5299 83.3906 61.6523 83.7161 61.8242 84.0078C62.0013 84.2995 62.2383 84.5339 62.5352 84.7109C62.8372 84.8828 63.2122 84.9688 63.6602 84.9688ZM72.0977 77.5469V86H70.6445V77.5469H72.0977ZM74.9336 77.5469V78.7188H67.8633V77.5469H74.9336ZM81.2148 84.5547V80.2031C81.2148 79.8698 81.1471 79.5807 81.0117 79.3359C80.8815 79.0859 80.6836 78.8932 80.418 78.7578C80.1523 78.6224 79.8242 78.5547 79.4336 78.5547C79.069 78.5547 78.7487 78.6172 78.4727 78.7422C78.2018 78.8672 77.9883 79.0312 77.832 79.2344C77.681 79.4375 77.6055 79.6562 77.6055 79.8906H76.1602C76.1602 79.5885 76.2383 79.2891 76.3945 78.9922C76.5508 78.6953 76.7747 78.4271 77.0664 78.1875C77.3633 77.9427 77.7174 77.75 78.1289 77.6094C78.5456 77.4635 79.0091 77.3906 79.5195 77.3906C80.1341 77.3906 80.6758 77.4948 81.1445 77.7031C81.6185 77.9115 81.9883 78.2266 82.2539 78.6484C82.5247 79.0651 82.6602 79.5885 82.6602 80.2188V84.1562C82.6602 84.4375 82.6836 84.737 82.7305 85.0547C82.7826 85.3724 82.8581 85.6458 82.957 85.875V86H81.4492C81.3763 85.8333 81.319 85.612 81.2773 85.3359C81.2357 85.0547 81.2148 84.7943 81.2148 84.5547ZM81.4648 80.875L81.4805 81.8906H80.0195C79.6081 81.8906 79.2409 81.9245 78.918 81.9922C78.5951 82.0547 78.3242 82.151 78.1055 82.2812C77.8867 82.4115 77.7201 82.5755 77.6055 82.7734C77.4909 82.9661 77.4336 83.1927 77.4336 83.4531C77.4336 83.7188 77.4935 83.9609 77.6133 84.1797C77.7331 84.3984 77.9128 84.5729 78.1523 84.7031C78.3971 84.8281 78.6966 84.8906 79.0508 84.8906C79.4935 84.8906 79.8841 84.7969 80.2227 84.6094C80.5612 84.4219 80.8294 84.1927 81.0273 83.9219C81.2305 83.651 81.3398 83.388 81.3555 83.1328L81.9727 83.8281C81.9362 84.0469 81.8372 84.2891 81.6758 84.5547C81.5143 84.8203 81.2982 85.0755 81.0273 85.3203C80.7617 85.5599 80.444 85.7604 80.0742 85.9219C79.7096 86.0781 79.2982 86.1562 78.8398 86.1562C78.2669 86.1562 77.7643 86.0443 77.332 85.8203C76.9049 85.5964 76.5716 85.2969 76.332 84.9219C76.0977 84.5417 75.9805 84.1172 75.9805 83.6484C75.9805 83.1953 76.069 82.7969 76.2461 82.4531C76.4232 82.1042 76.6784 81.8151 77.0117 81.5859C77.3451 81.3516 77.7461 81.1745 78.2148 81.0547C78.6836 80.9349 79.207 80.875 79.7852 80.875H81.4648Z" fill="#FDFDFD"/>*/}
            {/*    <path opacity="0.7" d="M55.6289 1C85.7284 1 110.129 25.4005 110.129 55.5C110.129 85.5995 85.7284 110 55.6289 110C25.5294 110 1.12891 85.5995 1.12891 55.5C1.12891 43.4695 5.02695 32.3494 11.6289 23.3339C14.9831 18.7535 19.0353 14.7162 23.6289 11.3789" stroke="#C0D8D8"/>*/}
            {/*    <circle opacity="0.4" cx="38.1289" cy="5" r="5" fill="#C0D8D8"/>*/}
            {/*</svg>*/}

        </div>
    );
}

export default App;
