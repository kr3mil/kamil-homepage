import { Image, SimpleGrid } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const { images } = props

  const openLightbox = useCallback(event => {
    if (event.target.id) {
      console.log(event.target.id)
      setCurrentImage(event.target.id)
      setViewerIsOpen(true)
    }
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                source: x.src,
                caption: x.title
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
      <SimpleGrid
        pt="20px"
        columns={[1, 2, 3]}
        spacing="10px"
        onClick={openLightbox}
      >
        {images.map((val, index) => (
          <Image key={index} alt={val.title} id={index} src={val.src} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Gallery
