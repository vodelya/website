import { Carousel } from "antd";

export const Art = () => {
  const contentStyle = {
    width: 'min(300px, 70vw)',
    height: 'min(300px, 70vw)',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div id="art">
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}