import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ImgMediaCard(props) {
  return (
    <a href="/#" className="hover:-translate-y-5 duration-75">
      <div class="flex flex-col justify-between h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img
            class="rounded-t-lg hidden lg:block"
            src="https://placehold.co/600x400/EEE/31343C"
            alt=""
          />

          <div class="p-5 flex-col">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        {/* <a
        href="#"
        class=" w-[45%] inline-flex items-center px-3 ml-4 mb-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a> */}
      </div>
    </a>
  );
}
