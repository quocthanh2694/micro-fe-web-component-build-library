import classNames from "classnames";
import { memo, useCallback, useState } from "react";
import "./styles.scss";
import Image from "../Image";

interface Props {
  images: string[];
}

const ProductImage = memo(({ images = [] }: Props) => {
  const [previewIndex, setPreviewIndex] = useState(0);

  if (!images?.length) return <></>;

  return (
    <div className="product-image">
      <div className="product-image__preview">
        <Image src={images[previewIndex]} width="100%" height="100%" />
      </div>
      <div className="product-image__images">
        <div className="product-image__images-content">
          {images?.map((img, i) => (
            <div
              key={i}
              className={classNames([
                "product-image__images-content-item",
                previewIndex === i ? "active" : "",
              ])}
              onClick={() => setPreviewIndex(i)}
            >
              <Image key={img} src={img} width="100px" height="100px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProductImage;
