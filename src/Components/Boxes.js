import Box from './Box'
import './Boxes.css';

function Boxes() {
    return (
       <>
        <Box type="success">
            <h3>Lorem ipsum dolor.</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis, provident nisi hic a laboriosam dignissimos odio minus culpa soluta dolor distinctio? Illo eaque quasi ratione voluptatum totam voluptates culpa!</p>
        </Box>

        <Box type="alert">
            <h3>Lorem sit amet.</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis, provident nisi hic a laboriosam dignissimos odio minus culpa soluta dolor distinctio? Illo eaque quasi ratione voluptatum totam voluptates culpa!</p>
        </Box>

        <Box type="warning">
            <h3>Lorem sicing elit</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis, provident nisi hic a laboriosam dignissimos odio minus culpa soluta dolor distinctio? Illo eaque quasi ratione voluptatum totam voluptates culpa!</p>
        </Box>
       </>
    );
}

export default Boxes;