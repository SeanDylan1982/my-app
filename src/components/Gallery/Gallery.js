import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "../../../public/img/gallery/banner/mural.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/nbc-1.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/nbc-2.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/nbc-3.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/nbc-4.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/nbc-5.png", width: 800, height: 600 },
  { src: "../../../public/img/gallery/banner/modderfontein-trips.png", width: 800, height: 600 },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}
