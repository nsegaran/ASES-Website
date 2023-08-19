// SVGAnimation.js
import React, { useEffect } from "react";
import "./SVGAnimation.css";

const SVGAnimation = () => {
  useEffect(() => {
    animatePaths();
  }, []);

  const animatePaths = () => {
    const paths = document.querySelectorAll(".svg-container svg path");

    paths.forEach((path, index) => {
      const delay = index * 2000; // Adjust this value to control the delay

      setTimeout(() => {
        path.style.animationPlayState = "running";
      }, delay);
    });
  };

  return (
    <div className="svg-container -z-1" style={{overflow: "hidden", position: "absolute"}}>
      <svg
        width="100vw"
        height="95vh"
        overflow="hidden"
        version="1.1"
        viewBox="0 0 1366 479"
        position="absolute"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path d="m1386 333h-1.49c0-137.66-120.01-249.66-267.51-249.66-147.51 0-267.5 112-267.5 249.66h-1.495c0-3.587.089-7.169.255-10.752.162-3.582.412-7.159.745-10.732.329-3.572.74-7.135 1.235-10.693.495-3.553 1.068-7.096 1.725-10.63.656-3.534 1.396-7.053 2.214-10.552.818-3.505 1.714-6.99 2.693-10.46.98-3.466 2.037-6.912 3.173-10.334 1.136-3.427 2.35-6.829 3.642-10.202 1.292-3.378 2.662-6.727 4.105-10.052 1.449-3.32 2.97-6.61 4.569-9.872 1.595-3.261 3.267-6.489 5.012-9.682 1.746-3.193 3.564-6.353 5.455-9.473 1.886-3.121 3.85-6.202 5.882-9.245s4.132-6.047 6.299-9.007c2.173-2.955 4.408-5.871 6.711-8.739 2.302-2.873 4.668-5.692 7.101-8.467 2.433-2.776 4.928-5.502 7.486-8.176 2.558-2.678 5.174-5.298 7.852-7.869s5.418-5.089 8.211-7.548c2.792-2.46 5.642-4.866 8.544-7.214 2.907-2.347 5.861-4.637 8.872-6.863 3.007-2.231 6.065-4.399 9.175-6.508 3.105-2.105 6.262-4.146 9.467-6.129 3.199-1.983 6.444-3.898 9.737-5.745 3.287-1.852 6.622-3.636 9.993-5.357 3.37-1.716 6.783-3.368 10.227-4.948 3.45-1.58 6.93-3.091 10.45-4.535 3.52-1.443 7.07-2.814 10.64-4.1167 3.58-1.2977 7.19-2.5275 10.83-3.6843s7.29-2.2359 10.98-3.2469 7.4-1.949 11.13-2.8094c3.73-.8603 7.47-1.6477 11.24-2.3573 3.76-.7145 7.54-1.3513 11.34-1.9103 3.79-.5589 7.6-1.045 11.41-1.4533 3.82-.4083 7.64-.7436 11.48-.9964 3.83-.2576 7.66-.4374 11.5-.5395s7.69-.1264 11.53-.0778c3.84.0535 7.68.1799 11.51.384 3.84.2042 7.66.4861 11.49.8458 3.82.3548 7.63.7922 11.43 1.3026 3.81.5103 7.6 1.0936 11.37 1.7547 3.78.661 7.54 1.3998 11.28 2.2115s7.46 1.6964 11.17 2.6588c3.7.9623 7.37 1.9928 11.03 3.101 3.65 1.1082 7.28 2.2893 10.88 3.5385 3.6 1.254 7.16 2.581 10.71 3.976 3.53 1.395 7.04 2.858 10.51 4.394s6.91 3.14 10.31 4.812c3.39 1.672 6.75 3.412 10.07 5.22s6.59 3.68 9.82 5.619c3.24 1.934 6.42 3.937 9.56 6.003s6.23 4.19 9.28 6.382c3.04 2.187 6.03 4.437 8.97 6.746s5.83 4.671 8.66 7.097c2.83 2.425 5.6 4.904 8.32 7.436 2.72 2.538 5.37 5.123 7.97 7.763 2.6 2.644 5.14 5.332 7.62 8.078 2.47 2.741 4.88 5.531 7.23 8.37 2.34 2.838 4.62 5.721 6.84 8.652 2.21 2.931 4.36 5.9 6.44 8.919 2.08 3.013 4.08 6.071 6.02 9.167s3.8 6.226 5.6 9.4c1.79 3.169 3.51 6.372 5.16 9.614 1.64 3.238 3.22 6.509 4.71 9.809 7.01 15.462 12.29 31.414 15.85 47.867s5.32 33.071 5.28 49.855z" />
          <path d="m739.68 472.72c5.174 0 10.276.748 15.034 2.215 7.174 2.221 13.176 6.021 17.361 10.987 1.958 2.318 3.519 4.879 4.784 7.571-10.333-1.03-20.594-2.721-30.693-5.068-5.658-1.307-11.598-2.921-16.715-5.793-2.411-1.35-3.655-2.73-3.801-4.222-.338-3.436 4.821-4.971 7.596-5.302 2.139-.257 4.294-.388 6.434-.388zm109.96-1.429c6.304 0 8.126 1.715 8.943 3.013 1.281 2.021.583 4.631-.671 6.326-1.447 1.954-3.681 3.266-5.877 4.398-11.37 5.87-25.285 8.926-43.552 9.544 1.989-5.841 4.68-10.326 8.204-13.674 3.738-3.552 8.777-6.138 14.993-7.697 5.008-1.249 10.828-1.876 17.793-1.91h.167zm-42.797 24.452c-.036.111-.072.223-.104.34-3.732 12.357-3.54 25.311-3.352 37.848.156 10.783.328 21.935 4.185 32.392 1.635 4.427 3.936 8.708 6.164 12.843 3.446 6.399 7.007 13.013 8.011 20.146.276 1.949.375 5.457-2.03 6.993-1.197.762-2.847.894-4.18.996-22.895 1.764-45.696 2.007-66.93 2.007-.5 0-.989 0-1.463-.005 6.481-2.153 12.275-4.986 17.241-8.441 5.878-4.086 10.448-8.941 13.587-14.446 6.372-11.162 6.851-23.801 7.32-36.022.494-12.775-.229-25.642-2.135-38.256-.848-5.598-2.046-11.682-4.414-17.338 8.631.787 17.319 1.118 26.008.986.702-.009 1.4-.029 2.092-.043zm31.787 126.41c-3.41 3.561-7.793 6.579-13.03 8.965-8.637 3.931-19.886 6.278-33.421 6.968-1.531.078-3.28.194-5.123.316-8.173.529-19.365 1.258-29.407.107-5.44-.622-10.037-1.755-13.66-3.358-4.17-1.842-7.205-4.383-9.016-7.542-1.104-1.929-1.468-3.96-.974-5.447.328-.996 1.036-1.764 2.103-2.284 1.651-.797 3.577-1.083 5.305-.797 22.453 3.752 36.55 5.2 48.643 4.986 11.895-.209 21.739-1.997 36.539-4.917 4.133-.817 8.714.228 11.661 2.667.13.107.26.219.38.336zm-4.316 25.331c-2.644 4.402-5.867 8.416-10.359 11.176-5.513 3.377-12.322 4.407-18.866 5.015-3.311.315-18.855.675-34.202-.341-19.766-1.307-32.052-4.334-35.524-8.746-1.155-1.473-1.312-3.066-.473-4.884.655-1.428 1.926-2.07 4.388-2.216 2.509-.15 6.023.243 10.88.788 14.212 1.598 37.997 4.276 77.904-1.662 2.202-.331 4.435-.015 6.252.87zm-35.92 47.518c11.713 0 24.546-2.415 34.286-5.282 16.757-4.937 33.821-13.518 53.702-27.017 13.488-9.15 28.267-14.85 43.931-16.93 12.536-1.671 25.67-1.04 39.033 1.871 22.791 4.956 38.551 14.966 38.711 15.068.27.175.64.112.83-.145.19-.253.12-.603-.15-.783-.16-.097-16.074-10.209-39.073-15.224-13.514-2.949-26.805-3.591-39.491-1.904-15.878 2.108-30.844 7.876-44.499 17.138-19.771 13.421-36.726 21.954-53.359 26.852-15.065 4.441-37.596 7.794-51.516 2.634-4.716-1.749-8.09-5.122-8.397-8.397-.245-2.575 1.364-4.937 4.665-6.842 6.064-3.503 14.471-2.41 22.603-1.355 5.206.675 10.13 1.316 14.446.811 6.054-.705 12.129-2.925 16.658-6.084 5.227-3.649 8.251-8.299 8.735-13.455.282-2.993-.525-6.856-3.597-8.883 1.229-2.118 2.317-4.276 3.327-6.355 2.863-5.885 5.195-13.665.994-18.582 3.566-3.955 6.091-8.586 7.564-13.878 1.978-7.114 2.957-14.179 3.899-21.016 1.624-11.725 3.155-22.795 9.298-34.151 5.783-10.685 13.675-20.433 21.307-29.865 6.481-8.008 13.181-16.288 18.6-25.141 9.636-15.73 15.32-33.932 16.45-52.64 1.125-18.708-2.343-37.392-10.026-54.03-5.008-10.831-11.656-20.831-19.772-29.704-7.751-8.475-16.814-15.919-26.95-22.124-19.599-12.008-42.531-19.049-66.321-20.365-22.786-1.259-45.181 2.862-64.77 11.914-10.261 4.743-19.683 10.812-28.012 18.038-8.741 7.575-16.305 16.463-22.484 26.41-7.709 12.41-12.702 25.933-14.826 40.19-1.962 13.169-1.509 27.086 1.343 41.367 5.107 25.545 17.809 52.071 36.743 76.713.015.019.031.034.041.048.073.068 6.971 7.25 14.134 18.203 4.206 6.424 7.673 12.867 10.318 19.16 3.29 7.842 5.294 15.462 5.95 22.644.697 7.663 2.348 12.099 5.346 14.393.979.748 2.051 1.234 3.222 1.545-11.666 2.988-24.435 3.586-34.909 1.565-14.785-2.862-25.456-5.355-34.036-7.357-16.049-3.747-24.888-5.807-39.725-5.394-9.656.262-19.047 1.54-27.913 3.78-7.101 1.798-13.878 4.218-20.157 7.192-10.697 5.068-16.137 9.928-16.366 10.132-.24.213-.245.568-.016.792.234.223.614.228.854.014.052-.048 5.57-4.966 16.127-9.961 6.195-2.935 12.895-5.321 19.907-7.095 8.766-2.211 18.053-3.469 27.601-3.736 14.664-.409 23.452 1.642 39.397 5.364 8.589 2.007 19.277 4.5 34.082 7.367 11.359 2.196 25.352 1.365 37.804-2.211 1.458.131 3.019.131 4.67.131 21.255 0 44.092-.243 67.029-2.012 1.473-.111 3.306-.252 4.763-1.185 2.785-1.784 2.921-5.37 2.541-8.071-1.031-7.314-4.639-14.019-8.127-20.502-2.212-4.101-4.497-8.348-6.106-12.706-3.795-10.287-3.956-21.342-4.118-32.037-.187-12.454-.38-25.331 3.311-37.528.068-.228.141-.457.208-.68 18.673-.593 32.88-3.698 44.51-9.699 2.327-1.196 4.695-2.6 6.283-4.743 1.473-1.987 2.264-5.088.718-7.532-2.04-3.231-6.772-3.581-10.151-3.566-7.075.034-12.993.67-18.106 1.948-6.418 1.608-11.65 4.296-15.533 7.994-3.733 3.547-6.56 8.304-8.621 14.499-.818.025-1.64.039-2.478.054-8.85.136-17.705-.214-26.497-1.04-1.349-2.984-3.046-5.826-5.211-8.397-4.332-5.141-10.532-9.067-17.934-11.356-6.887-2.128-14.498-2.779-22-1.88-2.191.267-4.326.952-5.856 1.89-1.999 1.22-2.957 2.818-2.78 4.631.182 1.871 1.614 3.532 4.378 5.083 5.253 2.949 11.297 4.592 17.044 5.923 10.37 2.405 20.906 4.125 31.52 5.156 2.473 5.709 3.707 11.919 4.571 17.624 1.895 12.547 2.613 25.346 2.129 38.057-.463 12.09-.942 24.598-7.184 35.536-3.055 5.35-7.512 10.088-13.243 14.067-5.237 3.645-11.416 6.585-18.371 8.752-.495.155-.989.306-1.489.452-1.926-.199-3.576-.656-4.982-1.73-2.691-2.051-4.248-6.38-4.909-13.62-.666-7.294-2.697-15.02-6.033-22.97-2.666-6.356-6.169-12.858-10.412-19.345-7.017-10.709-13.785-17.852-14.238-18.324-18.813-24.5-31.448-50.866-36.518-76.241-2.827-14.16-3.28-27.955-1.333-41.002 2.109-14.111 7.044-27.499 14.681-39.783 6.116-9.849 13.607-18.649 22.254-26.152 8.241-7.148 17.575-13.159 27.731-17.853 19.397-8.97 41.584-13.052 64.161-11.803 23.577 1.307 46.31 8.285 65.738 20.185 10.032 6.147 19.017 13.519 26.69 21.916 8.038 8.79 14.623 18.688 19.584 29.422 7.611 16.478 11.042 34.987 9.928 53.52-1.12 18.538-6.752 36.57-16.289 52.149-5.383 8.79-12.062 17.036-18.517 25.02-7.668 9.466-15.591 19.262-21.422 30.035-6.236 11.526-7.855 23.212-9.417 34.515-.942 6.798-1.916 13.829-3.873 20.87-1.406 5.054-3.826 9.529-7.215 13.324-.12-.111-.24-.218-.37-.32-3.222-2.668-8.209-3.815-12.707-2.926-14.732 2.906-24.524 4.685-36.31 4.889-12.015.218-26.039-1.225-48.408-4.966-1.984-.326-4.196 0-6.065.908h-.011c-1.363.666-2.269 1.657-2.701 2.95-.838 2.541.468 5.257 1.067 6.302 8.204 14.315 36.388 12.484 53.229 11.385 1.842-.116 3.581-.233 5.101-.311 22.109-1.132 37.893-6.569 47.185-16.205 3.634 4.5 1.401 11.74-1.28 17.25-1.021 2.09-2.083 4.203-3.254 6.244-2.046-.996-4.555-1.356-7.017-.991-39.741 5.914-63.427 3.246-77.576 1.657-9.845-1.108-14.79-1.667-16.518 2.099-1.005 2.182-.797 4.198.609 5.992 2.061 2.614 6.788 4.752 14.055 6.355 5.867 1.298 13.384 2.255 22.354 2.848 15.419 1.02 31.068.651 34.415.34 6.689-.627 13.676-1.686 19.402-5.199 4.633-2.843 8.006-7.056 10.708-11.531 2.572 1.768 3.238 5.155 2.983 7.789-.979 10.409-12.983 17.202-24.337 18.528-4.159.486-9.006-.145-14.139-.811-8.339-1.084-16.965-2.201-23.4 1.516-2.587 1.492-5.591 4.067-5.231 7.891.354 3.747 3.946 7.415 9.151 9.34 5.138 1.909 11.411 2.682 18.043 2.682z" />
          <path d="m718 519.91-1.303.682c-71.95-120.41-235.3-163.7-364.13-96.509-128.83 67.198-175.11 219.83-103.16 340.23l-1.303.682c-1.871-3.141-3.674-6.31-5.399-9.519s-3.377-6.451-4.956-9.728c-1.579-3.272-3.08-6.578-4.508-9.914-1.428-3.335-2.778-6.699-4.049-10.088-1.272-3.389-2.471-6.802-3.586-10.235-1.115-3.437-2.152-6.894-3.111-10.376-.954-3.476-1.835-6.972-2.632-10.488-.797-3.51-1.511-7.04-2.147-10.58-.641-3.545-1.194-7.094-1.668-10.658-.469-3.564-.86-7.138-1.172-10.717-.308-3.579-.537-7.167-.683-10.755-.141-3.589-.203-7.177-.188-10.771.021-3.588.125-7.177.308-10.765.182-3.589.448-7.167.797-10.746.349-3.574.777-7.143 1.293-10.702.51-3.559 1.104-7.109 1.777-10.644.672-3.535 1.428-7.055 2.267-10.561.834-3.505 1.751-6.992 2.746-10.458.996-3.467 2.069-6.914 3.221-10.342 1.157-3.423 2.387-6.826 3.695-10.201 1.313-3.379 2.699-6.724 4.159-10.044 1.464-3.321 3.001-6.613 4.617-9.87s3.299-6.486 5.06-9.675c1.762-3.194 3.596-6.344 5.504-9.465 1.907-3.116 3.882-6.193 5.93-9.232 2.048-3.038 4.164-6.037 6.348-8.993 2.184-2.95 4.435-5.862 6.754-8.725s4.701-5.677 7.15-8.448c2.444-2.765 4.956-5.487 7.526-8.155 2.574-2.669 5.206-5.283 7.895-7.844 2.694-2.561 5.441-5.069 8.25-7.523s5.67-4.845 8.583-7.187c2.918-2.337 5.889-4.615 8.906-6.831 3.023-2.22 6.093-4.377 9.214-6.476 3.122-2.093 6.285-4.129 9.501-6.096 3.21-1.972 6.467-3.875 9.771-5.711 3.299-1.841 6.64-3.613 10.022-5.317s6.801-3.34 10.256-4.913c3.456-1.568 6.947-3.062 10.475-4.494 3.523-1.427 7.083-2.785 10.668-4.07 3.591-1.286 7.208-2.498 10.851-3.642 3.643-1.14 7.311-2.211 11.001-3.204 3.695-.994 7.406-1.914 11.142-2.761 3.737-.847 7.489-1.617 11.257-2.313s7.557-1.314 11.351-1.86c3.799-.545 7.608-1.012 11.429-1.402 3.82-.394 7.65-.706 11.486-.945 3.83-.238 7.671-.399 11.512-.487 3.841-.082 7.687-.092 11.528-.024 3.84.068 7.681.214 11.517.438s7.666.521 11.486.896c3.82.38 7.635.828 11.434 1.359 3.804.526 7.593 1.134 11.366 1.811 3.773.682 7.531 1.436 11.268 2.269 3.741.828 7.457 1.733 11.157 2.712 3.695.979 7.369 2.03 11.023 3.16 3.648 1.125 7.27 2.322 10.866 3.593s7.155 2.615 10.688 4.027c3.534 1.417 7.036 2.897 10.502 4.455 3.465 1.553 6.894 3.175 10.282 4.864 3.392 1.695 6.743 3.452 10.053 5.273 3.309 1.826 6.577 3.72 9.803 5.673 3.22 1.957 6.399 3.978 9.531 6.062 3.132 2.079 6.212 4.226 9.246 6.432 14.201 10.327 27.151 21.876 38.856 34.648 11.705 12.766 21.93 26.502 30.67 41.196z" />
          <path d="m754.58 263.76c-24.788-20.606-57.231-31.25-90.284-29.592-14.018.747-28.155 3.664-41.807 6.528-22.647 4.751-46.029 9.615-68.555 4.175-2.142-.512-4.409-1.141-6.551-1.77-6.914-2.005-14.074-4.064-21.422-3.264-8.509.917-15.059 6.469-17.628 14.879-5.018 16.601 5.815 34.801 12.73 44.187 1.777 2.405 3.736 4.752 5.696 7.04 4.955 5.893 10.036 11.961 12.12 19.4 1.527 5.552 1.59 11.791.183 19.518-1.47 7.898-3.737 16.255-7.348 27.07-6.06 18.147-14.262 35.602-24.361 52.027-1.225 2.005-2.506 4.063-3.856 6.01l-2.632 3.893c-9.244 13.908-18.79 28.216-16.529 44.129 1.532 10.815 8.88 21.118 20.078 28.216 8.88 5.663 20.14 9.498 34.522 11.79 8.572 1.371 17.327 2.059 26.019 2.001 15.179 0 30.296-2.001 44.923-5.893 23.079-6.069 44.439-16.884 62.5-31.592 11.996-9.845 18.791-18.947 21.542-28.675 2.574-9.273 1.225-18.947 0-28.333-.61-4.293-1.162-8.698-1.407-12.991-1.407-26.845 12.918-54.085 36.419-69.481 4.226-2.751 8.755-5.151 13.101-7.556 4.408-2.347 8.999-4.81 13.22-7.615 10.286-6.752 16.649-14.362 18.853-22.665 4.961-18.542-11.996-35.197-19.526-41.436zm18.364 41.324c-2.079 8.01-8.265 15.454-18.364 22.035-4.22 2.747-8.754 5.21-13.157 7.557-4.409 2.346-8.999 4.805-13.225 7.61-23.872 15.625-38.379 43.27-36.972 70.457.245 4.346.86 8.815 1.412 13.103 1.282 9.273 2.569 18.83.057 27.874-2.631 9.503-9.364 18.43-21.177 28.104-29.259 24.035-67.575 37.26-106.26 37.26-8.812 0-17.566-.688-26.195-2.063-14.2-2.23-25.341-6.064-34.033-11.615-10.776-6.986-17.936-17.001-19.406-27.416-2.204-15.455 7.223-29.65 16.342-43.383.86-1.317 1.714-2.634 2.574-3.893 1.345-2.005 2.632-4.063 3.856-6.068 10.162-16.543 18.364-34.056 24.424-52.256 3.668-10.933 5.935-19.289 7.405-27.241 1.469-7.956 1.407-14.308-.183-20.035-2.141-7.61-7.347-13.791-12.303-19.801-1.897-2.288-3.856-4.634-5.633-7.039-6.795-9.215-17.446-27.075-12.548-43.27 2.387-7.957 8.572-13.162 16.587-14.021 1.042-.117 2.084-.175 3.121-.175 6.003 0 12.001 1.717 17.754 3.38 2.141.63 4.408 1.259 6.607 1.771 22.772 5.552 46.341.63 69.107-4.117 13.653-2.864 27.728-5.781 41.625-6.527 32.746-1.659 64.944 8.873 89.425 29.304 7.348 6.122 23.934 22.376 19.161 40.465z" />
          <path d="m293.32 243.13c-5.174 0-10.276.751-15.034 2.227-7.174 2.222-13.176 6.032-17.361 11.011-1.952 2.324-3.519 4.892-4.784 7.591 10.333-1.033 20.594-2.729 30.693-5.077 5.659-1.315 11.598-2.933 16.716-5.812 2.41-1.355 3.654-2.739 3.805-4.234.333-3.44-4.826-4.984-7.6-5.316-2.14-.258-4.295-.39-6.435-.39zm-109.96-1.432c-6.31 0-8.132 1.72-8.949 3.026-1.275 2.022-.578 4.643.672 6.338 1.447 1.959 3.68 3.274 5.877 4.41 11.369 5.89 25.284 8.95 43.552 9.569-1.989-5.857-4.68-10.354-8.2-13.711-3.737-3.561-8.782-6.153-14.997-7.712-5.003-1.257-10.823-1.886-17.789-1.92h-.166zm42.791 24.517c.037.117.073.224.104.341 3.738 12.39 3.54 25.384 3.358 37.949-.161 10.811-.328 21.993-4.19 32.478-1.63 4.438-3.936 8.731-6.159 12.877-3.451 6.416-7.012 13.047-8.012 20.2-.275 1.953-.38 5.471 2.025 7.011 1.198.765 2.853.896 4.181.998 22.895 1.769 45.701 2.013 66.93 2.013.5 0 .989 0 1.463-.005-6.481-2.159-12.275-4.999-17.241-8.463-5.872-4.093-10.448-8.965-13.587-14.485-6.372-11.191-6.851-23.864-7.32-36.117-.494-12.809.229-25.711 2.135-38.359.848-5.612 2.051-11.707 4.414-17.384-8.631.795-17.314 1.121-26.003.99-.708-.01-1.405-.03-2.098-.044zm-31.786 126.74c3.41 3.571 7.793 6.597 13.035 8.989 8.637 3.941 19.881 6.295 33.421 6.991 1.526.078 3.275.19 5.123.312 8.168.531 19.365 1.262 29.402.112 5.445-.628 10.037-1.759 13.665-3.371 4.17-1.847 7.2-4.395 9.011-7.562 1.104-1.934 1.468-3.971.979-5.457-.328-.998-1.041-1.768-2.108-2.294-1.651-.799-3.577-1.087-5.305-.799-22.453 3.761-36.545 5.213-48.643 4.998-11.895-.209-21.734-2.002-36.539-4.93-4.134-.819-8.709.229-11.661 2.675-.125.112-.255.219-.38.336zm4.315 25.398c2.645 4.414 5.867 8.444 10.36 11.206 5.513 3.386 12.322 4.419 18.866 5.033 3.316.312 18.86.672 34.207-.346 19.766-1.31 32.052-4.346 35.524-8.77 1.151-1.476 1.307-3.074.474-4.896-.656-1.433-1.926-2.076-4.389-2.222-2.514-.151-6.023.244-10.88.789-14.211 1.603-38.002 4.288-77.909-1.666-2.202-.326-4.431-.01-6.253.872zm35.92 47.645c-11.707 0-24.545-2.417-34.285-5.296-16.757-4.95-33.822-13.554-53.703-27.089-13.488-9.174-28.267-14.889-43.931-16.975-12.536-1.676-25.67-1.042-39.033 1.876-22.791 4.974-38.549 15.011-38.705 15.109-.2759.175-.6507.112-.8381-.147-.1874-.253-.1197-.604.1562-.784.1562-.097 16.07-10.236 39.069-15.264 13.52-2.958 26.805-3.601 39.496-1.91 15.873 2.114 30.84 7.897 44.494 17.189 19.772 13.452 36.727 22.012 53.359 26.918 15.066 4.453 37.602 7.815 51.517 2.641 4.716-1.749 8.09-5.135 8.402-8.419.245-2.582-1.369-4.95-4.67-6.86-6.064-3.513-14.472-2.417-22.603-1.359-5.206.682-10.125 1.325-14.446.813-6.054-.706-12.124-2.933-16.653-6.1-5.232-3.654-8.252-8.317-8.741-13.491-.281-2.996.526-6.874 3.597-8.906-1.228-2.124-2.316-4.287-3.326-6.373-2.863-5.9-5.196-13.7-.989-18.631-3.566-3.966-6.096-8.609-7.57-13.915-1.978-7.133-2.951-14.217-3.899-21.072-1.624-11.756-3.154-22.855-9.297-34.241-5.784-10.714-13.676-20.488-21.307-29.944-6.482-8.03-13.181-16.332-18.601-25.209-9.636-15.771-15.32-34.022-16.45-52.78-1.124-18.758 2.343-37.491 10.026-54.168 5.008-10.865 11.656-20.887 19.772-29.789 7.751-8.497 16.815-15.961 26.95-22.183 19.6-12.039 42.531-19.098 66.322-20.419 22.786-1.2619 45.186 2.8696 64.775 11.947 10.256 4.76 19.683 10.845 28.013 18.085 8.735 7.601 16.299 16.507 22.478 26.48 7.71 12.444 12.702 26.003 14.826 40.298 1.963 13.203 1.51 27.157-1.343 41.476-5.107 25.613-17.809 52.21-36.742 76.917-.016.019-.026.034-.042.049-.068.068-6.97 7.274-14.134 18.251-4.206 6.441-7.673 12.901-10.317 19.211-3.29 7.868-5.289 15.503-5.945 22.704-.698 7.683-2.348 12.136-5.352 14.431-.979.75-2.051 1.238-3.222 1.549 11.666 2.997 24.436 3.596 34.91 1.569 14.784-2.869 25.456-5.369 34.035-7.376 16.049-3.757 24.889-5.822 39.725-5.408 9.657.268 19.048 1.544 27.919 3.795 7.095 1.798 13.873 4.224 20.151 7.206 10.704 5.082 16.144 9.954 16.367 10.159.24.214.245.57.016.794s-.609.229-.854.014c-.052-.048-5.565-4.979-16.127-9.988-6.195-2.937-12.895-5.33-19.907-7.108-8.767-2.222-18.049-3.484-27.596-3.752-14.67-.409-23.457 1.647-39.402 5.379-8.59 2.012-19.277 4.512-34.083 7.386-11.353 2.203-25.352 1.369-37.804-2.216-1.452.131-3.019.131-4.67.131-21.255 0-44.093-.243-67.029-2.017-1.473-.112-3.301-.253-4.763-1.189-2.786-1.788-2.921-5.383-2.541-8.088 1.031-7.337 4.638-14.061 8.132-20.56 2.207-4.112 4.492-8.37 6.101-12.736 3.795-10.314 3.961-21.403 4.117-32.127.188-12.487.38-25.398-3.31-37.627-.063-.229-.136-.458-.209-.682-18.673-.59-32.879-3.703-44.509-9.72-2.322-1.204-4.69-2.612-6.278-4.76-1.479-1.988-2.27-5.102-.724-7.552 2.041-3.24 6.778-3.591 10.151-3.576 7.075.034 12.994.672 18.106 1.953 6.424 1.613 11.651 4.312 15.534 8.015 3.733 3.557 6.565 8.326 8.621 14.538.822.025 1.645.039 2.483.054 8.845.136 17.7-.214 26.498-1.043 1.343-2.986 3.04-5.841 5.205-8.419 4.332-5.154 10.532-9.091 17.934-11.381 6.887-2.139 14.498-2.787 22-1.89 2.197.268 4.331.955 5.856 1.895 1.999 1.223 2.962 2.831 2.785 4.648-.187 1.871-1.619 3.537-4.383 5.091-5.252 2.958-11.296 4.605-17.044 5.939-10.369 2.412-20.906 4.137-31.521 5.17-2.472 5.725-3.701 11.951-4.57 17.671-1.895 12.58-2.614 25.418-2.124 38.159.463 12.127.942 24.663 7.184 35.63 3.05 5.364 7.507 10.114 13.238 14.11 5.237 3.649 11.416 6.596 18.371 8.774.495.151.989.302 1.494.449 1.921-.2 3.577-.658 4.977-1.735 2.691-2.056 4.248-6.397 4.909-13.657.666-7.308 2.697-15.059 6.039-23.03 2.665-6.368 6.169-12.892 10.411-19.391 7.013-10.743 13.78-17.906 14.233-18.378 18.819-24.566 31.448-51.002 36.518-76.439 2.827-14.203 3.28-28.035 1.333-41.111-2.103-14.154-7.043-27.577-14.675-39.894-6.122-9.875-13.608-18.694-22.26-26.222-8.241-7.166-17.569-13.193-27.731-17.9-19.397-8.9938-41.584-13.086-64.161-11.829-23.577 1.3058-46.311 8.3022-65.734 20.234-10.036 6.163-19.016 13.554-26.69 21.973-8.043 8.814-14.628 18.738-19.589 29.501-7.606 16.521-11.041 35.079-9.922 53.662 1.114 18.587 6.747 36.668 16.284 52.288 5.382 8.813 12.061 17.081 18.516 25.086 7.669 9.496 15.592 19.314 21.422 30.115 6.237 11.557 7.856 23.274 9.417 34.607.943 6.821 1.916 13.866 3.874 20.926 1.405 5.067 3.831 9.554 7.215 13.359.12-.107.244-.219.369-.321 3.223-2.67 8.21-3.825 12.713-2.933 14.727 2.913 24.519 4.696 36.305 4.906 12.015.214 26.039-1.233 48.409-4.979 1.983-.332 4.195 0 6.064.906h.011c1.364.667 2.269 1.661 2.701 2.957.839 2.548-.463 5.272-1.067 6.319-8.204 14.354-36.388 12.517-53.229 11.416-1.837-.117-3.581-.234-5.101-.307-22.104-1.14-37.893-6.592-47.186-16.254-3.628 4.517-1.395 11.771 1.281 17.301 1.02 2.095 2.082 4.21 3.254 6.256 2.051-.999 4.555-1.359 7.022-.994 39.736 5.93 63.422 3.255 77.572 1.662 9.849-1.111 14.789-1.671 16.517 2.104 1.005 2.188.797 4.21-.609 6.008-2.061 2.621-6.788 4.765-14.05 6.373-5.872 1.3-13.389 2.26-22.359 2.855-15.419 1.023-31.068.653-34.415.341-6.69-.629-13.671-1.691-19.397-5.213-4.638-2.851-8.012-7.075-10.713-11.562-2.567 1.773-3.233 5.169-2.983 7.81.978 10.436 12.988 17.247 24.342 18.577 4.159.488 9.006-.141 14.134-.813 8.339-1.087 16.965-2.207 23.4 1.52 2.587 1.496 5.591 4.083 5.231 7.912-.354 3.757-3.946 7.435-9.151 9.369-5.139 1.91-11.412 2.685-18.044 2.685z" />
          <path d="m149 128.92-1.303.682c-71.95-120.41-235.3-163.71-364.13-96.51-128.83 67.193-175.11 219.82-103.16 340.23l-1.303.677c-1.871-3.136-3.674-6.31-5.399-9.519s-3.377-6.452-4.956-9.724c-1.579-3.276-3.08-6.582-4.508-9.918-1.428-3.335-2.778-6.695-4.049-10.084-1.272-3.388-2.465-6.802-3.586-10.239-1.115-3.438-2.152-6.895-3.111-10.371-.954-3.482-1.835-6.978-2.632-10.488-.797-3.516-1.511-7.041-2.147-10.586-.636-3.539-1.194-7.094-1.668-10.658-.469-3.564-.86-7.133-1.172-10.717-.308-3.579-.537-7.162-.683-10.751-.141-3.588-.203-7.181-.188-10.77.021-3.593.125-7.182.308-10.77.182-3.584.448-7.168.797-10.741.349-3.579.777-7.148 1.293-10.708.51-3.559 1.104-7.103 1.777-10.638.672-3.535 1.428-7.056 2.267-10.561.834-3.506 1.751-6.992 2.746-10.464.996-3.467 2.069-6.914 3.221-10.337 1.157-3.428 2.387-6.826 3.695-10.206 1.313-3.374 2.699-6.724 4.159-10.044 1.464-3.321 3.001-6.608 4.617-9.87 1.616-3.257 3.299-6.481 5.06-9.675 1.762-3.189 3.596-6.344 5.504-9.46 1.907-3.121 3.882-6.199 5.93-9.237s4.164-6.033 6.348-8.988c2.184-2.956 4.435-5.863 6.754-8.7256 2.319-2.863 4.701-5.6822 7.15-8.4478 2.444-2.7705 4.956-5.4874 7.526-8.1557 2.574-2.6682 5.206-5.2829 7.895-7.844 2.694-2.566 5.446-5.0736 8.25-7.5227 2.809-2.454 5.67-4.8496 8.583-7.1867 2.918-2.3372 5.889-4.6159 8.906-6.8362 3.023-2.2203 6.093-4.3773 9.214-6.471 3.122-2.0985 6.285-4.1289 9.501-6.1009 3.21-1.9671 6.467-3.8709 9.771-5.7114 3.299-1.8356 6.64-3.608 10.022-5.317 3.382-1.7042 6.801-3.3402 10.256-4.908 3.461-1.5678 6.947-3.0675 10.475-4.4941 3.523-1.4315 7.083-2.7851 10.668-4.0754 3.591-1.2855 7.208-2.4979 10.851-3.6372 3.643-1.1442 7.311-2.2106 11.001-3.2039 3.695-.99815 7.406-1.9184 11.142-2.7608 3.737-.84722 7.489-1.6165 11.257-2.3128 3.768-.69628 7.557-1.3146 11.356-1.86 3.794-.54534 7.603-1.0128 11.424-1.4072 3.82-.38953 7.65-.70601 11.486-.9446 3.8301-.23858 7.6709-.39926 11.512-.48204 3.8409-.087642 7.6869-.092513 11.528-.024345s7.6817.21424 11.517.43822c3.8356.21911 7.6661.52098 11.486.8959 3.8252.37492 7.6348.82774 11.434 1.3536 3.8044.53073 7.5931 1.1345 11.366 1.8162 3.7731.6768 7.5306 1.4364 11.267 2.2641 3.7418.83261 7.4577 1.7334 11.158 2.7169 3.695.97871 7.369 2.0304 11.022 3.1551 3.648 1.1248 7.27 2.3274 10.866 3.5983 3.596 1.2708 7.1554 2.6098 10.689 4.0267 3.5334 1.412 7.0355 2.8971 10.501 4.4503 3.4656 1.5532 6.8948 3.1746 10.282 4.8691 3.3927 1.6895 6.7437 3.4472 10.053 5.2731s6.5769 3.7151 9.8028 5.6725c3.2207 1.9573 6.3997 3.9731 9.5318 6.0571 3.1321 2.0839 6.2121 4.2263 9.2452 6.4369 14.201 10.327 27.151 21.877 38.856 34.643 11.705 12.772 21.93 26.502 30.67 41.202z" />
      </svg>
    </div>
  );
};

export default SVGAnimation;
