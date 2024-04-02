/**
 * File: Diagram.jsx
 * Author: Joseph Koh
 * Description: To display architectural diagram
 */

export const Diagram = ({ src, alt }) => {
  return (
    <>
      {/* Diagram Image */}
      <img
        style={{
          width: "100%",
          height: "auto",
          boxSizing: "border-box",
          objectFit: "cover",
          border: "1px solid #555555",
          borderRadius: "10px",
        }}
        src={src}
        alt={alt}
      />
    </>
  );
};
