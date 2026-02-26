import { useParams, useNavigate } from "react-router-dom";
import projects from "./projectsData";

const phoneNumber = "212600000000";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <h2>Product not found</h2>;

  const message = `
Hello 👋
I want to order this project:

Project: ${project.title}
Price: $${project.price}
`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="shop-wrapper">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Continue Shopping
      </button>

      <div className="shop-container">

        {/* PRODUCT IMAGE */}
        <div className="shop-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* PRODUCT INFO */}
        <div className="shop-info">

          <h1 className="product-title">{project.title}</h1>

          <p className="product-price">${project.price}</p>

          <p className="product-description">
            {project.description}
          </p>

          <div className="purchase-box">

            <div className="price-box">
              <span>Total Price</span>
              <strong>DH{project.price}</strong>
            </div>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noreferrer"
              className="buy-btn"
            >
              Buy Now via WhatsApp
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
