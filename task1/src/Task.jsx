import React from 'react';
const cardStyle={
  backgroundColor:'#f7ba74ff',
  borderRadius:'15px',
  boxShadow:'0 4px 15px rgba(0, 0, 0, 0.1)',
  padding:'30px',
  textAlign:'center',
  width:'250px',
  transition:'transform 0.3s ease',
};
const imgStyle={
  width:'120px',
  height:'120px',
  borderRadius:'50%',
  marginBottom:'15px',
};
const textStyle ={
  color:'#333',
  fontFamily:'Poppins, sans-serif',
  lineHeight:'1.5',
  fontSize:'16px',
};

function Task(){
  return (
      <div style={cardStyle} className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxvsORmis8XMHIxBqS4ZF_VOHNcsrp_cFgQ&s" alt="Profile" style={imgStyle}
        />
        <p style={textStyle}><strong>Renukaradhya Odeyar CG</strong><br/>B.E Final Year Student</p>
      </div>
  );
}

export default Task;