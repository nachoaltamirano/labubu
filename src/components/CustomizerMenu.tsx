interface CustomizerMenuProps {
  onSelectEyes: () => void;
  onSelectTeeth: () => void;
  onColorChange: (color: string) => void;
}

export function CustomizerMenu({ onSelectEyes, onSelectTeeth, onColorChange }: CustomizerMenuProps) {
  return (
    <div className="absolute left-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md p-4 z-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Personalizar</h2>
      <div className="space-y-4">
        <div className="bg-white/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Ojos</h3>
          <button
            onClick={onSelectEyes}
            className="w-full bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition-colors"
          >
            Ojos Rojos
          </button>
        </div>
        
        <div className="bg-white/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Dientes</h3>
          <button
            onClick={onSelectTeeth}
            className="w-full bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 transition-colors"
          >
            Agregar Dentadura
          </button>
        </div>

        <div className="bg-white/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Color</h3>
          <div className="flex flex-col space-y-2">
            <input
              type="color"
              onChange={(e) => onColorChange(e.target.value)}
              className="w-full h-10 cursor-pointer rounded"
              defaultValue="#ffffff"
            />
            <div className="grid grid-cols-5 gap-2">
              {[
                '#ff0000', '#00ff00', '#0000ff',
                '#ffff00', '#ff00ff', '#00ffff',
                '#ff8800', '#88ff00', '#0088ff',
                '#ff0088'
              ].map((color) => (
                <button
                  key={color}
                  onClick={() => onColorChange(color)}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}