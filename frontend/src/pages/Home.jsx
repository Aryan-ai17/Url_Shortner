import Button from "../components/Button";

function Home() {
  function sayHello() {
    alert("Button Clicked!");
  }

  return (
    <div className="p-10 space-y-4">
      <Button onClick={sayHello}>
        Click Me
      </Button>

      <Button disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default Home;