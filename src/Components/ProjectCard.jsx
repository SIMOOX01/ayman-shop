import { useNavigate } from "react-router-dom";


const phoneNumber = "212600000000";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleBuy = () => {
    const message = `
Hello 👋
I'm interested in buying this project:

Project: ${project.title}
Price: ${project.price}DH
Image: ${window.location.origin}${project.image}
`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="card" onClick={() => navigate(`/project/${project.id}`)}>

      <img src={project.image} alt={project.title} />

      <div className="card-info">
        <h3>{project.title}</h3>
        <p>{project.price}DH</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBuy();
          }}
        >
          Buy
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;
