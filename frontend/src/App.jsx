import { FloatingShape } from "./components/FloatingShape";
function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900
    flex items-center justify-center relative overflow hidden"
    >
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="top-[-5%]"
        left="left-[10]%"
        delay={0}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-48 h-48"
        top="top-[70%]"
        left="left-[80%]"
        delay={5}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-32 h-32"
        top="top-[40%]"
        left="left-[-10%]"
        delay={2}
      />
    </div>
  );
}

export default App;
