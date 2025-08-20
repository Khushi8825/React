const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
};
function PostComponent({description = " " ,time = null,followers=null,name="NULL", image = "https://static.vecteezy.com/system/resources/previews/007/311/813/non_2x/human-profile-sketch-vector.jpg"}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            height: 30,
            widht: 30,
            borderRadius: 200,
            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <div style={{ fontSize: 15 }}>
          <b>{name}</b>
          <div>{followers}</div>
          {time ? <div style={{display:"flex", gap:"10px"}}>
          <div>{time}</div>
            <img height="15" src="https://m.media-amazon.com/images/I/81nUFx9sXoL._UF1000,1000_QL80_.jpg"/>
          </div> : null}
          
        </div>
      </div>
      <div style={{ fontSize: 15, marginLeft: 20 }}>{description}</div>
    </div>
  );
}

export default PostComponent;