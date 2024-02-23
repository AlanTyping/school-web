'use client'

import "yet-another-react-lightbox/styles.css";
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import NextJsImage from "./components/NextJsImage";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import Images from "./Images";

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

     <Lightbox
      index={index}
      open={index >= 0}
      close={() => setIndex(-1)}
      slides={slides}
      render={{ slide: NextJsImage }}
      plugins={[Thumbnails, Fullscreen, Download]}
    />
    </>
   
  );
}




// 'use client'

// import { useState } from 'react';
// import Lightbox from 'yet-another-react-lightbox';
// import { slides } from './data';
// import 'yet-another-react-lightbox/styles.css';
// import {
//   Captions,
//   Download,
//   Fullscreen,
//   Thumbnails,
//   Zoom,
// } from 'yet-another-react-lightbox/plugins';
// import 'yet-another-react-lightbox/plugins/captions.css';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';
// import Images from './Images';

// function ImagesApp() {
//   // const [open, setOpen] = useState<boolean>(false);
//   const [index, setIndex] = useState<number>(-1);

//   return (
//     <>
//       {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

//       <Images
//         data={slides}
//         onClick={(currentIndex) => setIndex(currentIndex)}
//       />

//       <Lightbox
//         plugins={[Fullscreen, Zoom, Thumbnails]}
//         captions={{
//           showToggle: true,
//           descriptionTextAlign: 'end',
//         }}
//         // open={open}
//         // close={() => setOpen(false)}

//         index={index}
//         open={index >= 0}
//         close={() => setIndex(-1)}
//         slides={slides}
//       />
//     </>
//   );
// }

// export default ImagesApp;

