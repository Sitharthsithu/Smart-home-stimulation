import React, { useState, useEffect } from 'react';
import { DoorOpen as Door, LightbulbOff, Lightbulb as LightbulbOn, Fan, User2, Bell, Siren, Tv, ShowerHead, Hand, Search,Droplets,RotateCcw,Monitor,Snowflake,Computer, WashingMachine, Laptop } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [currentRoom, setCurrentRoom] = useState('outside');
  const [fireAlarm, setFireAlarm] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState('');
  const [roomStates, setRoomStates] = useState({
    livingRoom: { light: false, fan: false, tv: false },
    kitchen: { light: false, fan: false, dishwasher: false },
    bedroom: { light: false, fan: false, ac: false },
    bathroom: { light: false, fan: false, shower: false },
    office: { light: false, fan: false, computer: false },
    utilityRoom: { light: false, fan: false, washer: false }
  });

  const commands = [
    { value: 'living-room-light', label: (state) => `Turn ${state.livingRoom.light ? 'off' : 'on'} living room light` },
    { value: 'living-room-tv', label: (state) => `Turn ${state.livingRoom.tv ? 'off' : 'on'} TV` },
    { value: 'bathroom-light', label: (state) => `Turn ${state.bathroom.light ? 'off' : 'on'} bathroom light` },
    { value: 'bathroom-shower', label: (state) => `Turn ${state.bathroom.shower ? 'off' : 'on'} showe` },
    { value: 'kitchen-light', label: (state) => `Turn ${state.kitchen.light ? 'off' : 'on'} kitchen light` },
    { value: 'kitchen-dishwasher', label: (state) => `Turn ${state.kitchen.dishwasher ? 'off' : 'on'} dishwasher` },
    { value: 'bedroom-light', label: (state) => `Turn ${state.bedroom.light ? 'off' : 'on'} bedroom light` },
    { value: 'bedroom-ac', label: (state) => `Turn ${state.bedroom.ac ? 'off' : 'on'} AC` },
    { value: 'office-light', label: (state) => `Turn ${state.office.light ? 'off' : 'on'} office light` },
    { value: 'office-computer', label: (state) => `Turn ${state.office.computer ? 'off' : 'on'} computer` },
    { value: 'utility-room-light', label: (state) => `Turn ${state.utilityRoom.light ? 'off' : 'on'} utility room light` },
    { value: 'utility-room-washer', label: (state) => `Turn ${state.utilityRoom.washer ? 'off' : 'on'} washer` }
  ];

  const executeCommand = () => {
    if (!selectedCommand) return;

    setRoomStates(prev => {
      const newState = { ...prev };
      
      switch (selectedCommand) {
        case 'living-room-light':
          newState.livingRoom.light = !newState.livingRoom.light;
          toast.success(`Living room light ${newState.livingRoom.light ? 'turned on' : 'turned off'}`);
          break;
        case 'living-room-tv':
          newState.livingRoom.tv = !newState.livingRoom.tv;
          toast.success(`TV ${newState.livingRoom.tv ? 'turned on' : 'turned off'}`);
          break;
        case 'bathroom-light':
          newState.bathroom.light = !newState.bathroom.light;
          toast.success(`Bathroom light ${newState.bathroom.light ? 'turned on' : 'turned off'}`);
          break;
        case 'bathroom-shower':
          newState.bathroom.shower = !newState.bathroom.shower;
          toast.success(`Shower ${newState.bathroom.shower ? 'turned on' : 'turned off'}`);
          break;
        case 'kitchen-light':
          newState.kitchen.light = !newState.kitchen.light;
          toast.success(`Kitchen light ${newState.kitchen.light ? 'turned on' : 'turned off'}`);
          break;
        case 'kitchen-dishwasher':
          newState.kitchen.dishwasher = !newState.kitchen.dishwasher;
          toast.success(`Dishwasher ${newState.kitchen.dishwasher ? 'turned on' : 'turned off'}`);
          break;
        case 'bedroom-light':
          newState.bedroom.light = !newState.bedroom.light;
          toast.success(`Bedroom light ${newState.bedroom.light ? 'turned on' : 'turned off'}`);
          break;
        case 'bedroom-ac':
          newState.bedroom.ac = !newState.bedroom.ac;
          toast.success(`AC ${newState.bedroom.ac ? 'turned on' : 'turned off'}`);
          break;
        case 'office-light':
          newState.office.light = !newState.office.light;
          toast.success(`Office light ${newState.office.light ? 'turned on' : 'turned off'}`);
          break;
        case 'office-computer':
          newState.office.computer = !newState.office.computer;
          toast.success(`Computer ${newState.office.computer ? 'turned on' : 'turned off'}`);
          break;
        case 'utility-room-light':
          newState.utilityRoom.light = !newState.utilityRoom.light;
          toast.success(`Utility room light ${newState.utilityRoom.light ? 'turned on' : 'turned off'}`);
          break;
        case 'utility-room-washer':
          newState.utilityRoom.washer = !newState.utilityRoom.washer;
          toast.success(`Washer ${newState.utilityRoom.washer ? 'turned on' : 'turned off'}`);
          break;
      }
      
      return newState;
    });

    setSelectedCommand('');
  };

  const rooms = {
    livingRoom: { x: [50, 300], y: [50, 200], name: 'Living Room' },
    kitchen: { x: [350, 600], y: [50, 200], name: 'Kitchen' },
    bedroom: { x: [50, 300], y: [250, 400], name: 'Bedroom' },
    bathroom: { x: [350, 600], y: [250, 400], name: 'Bathroom' },
    office: { x: [350, 600], y: [450, 550], name: 'Office' },
    utilityRoom: { x: [50, 300], y: [450, 550], name: 'Utility Room' }
  };

  const doors = {
    livingRoom: [{ x: 300, y: 125 }],
    kitchen: [{ x: 350, y: 125 }],
    bedroom: [{ x: 300, y: 325 }],
    bathroom: [{ x: 350, y: 325 }],
    office: [{ x: 350, y: 500 }],
    utilityRoom: [{ x: 300, y: 500 }]
  };

  const handleClap = () => {
    if (currentRoom === 'outside') return;

    setRoomStates(prev => {
      const newState = { ...prev };
      switch (currentRoom) {
        case 'livingRoom':
          newState.livingRoom.tv = !newState.livingRoom.tv;
          toast.success(
            `TV ${newState.livingRoom.tv ? 'Started Playing' : 'Turned Off'}`,
            { icon: '📺' }
          );
          break;
        case 'bathroom':
          newState.bathroom.shower = !newState.bathroom.shower;
          toast.success(
            `Shower ${newState.bathroom.shower ? 'Started' : 'Stopped'}`,
            { icon: '🚿' }
          );
          break;
        case 'kitchen':
          newState.kitchen.dishwasher = !newState.kitchen.dishwasher;
          toast.success(
            `Dishwasher ${newState.kitchen.dishwasher ? 'Started' : 'Stopped'}`,
            { icon: '🍽️' }
          );
          break;
        case 'bedroom':
          newState.bedroom.ac = !newState.bedroom.ac;
          toast.success(
            `AC ${newState.bedroom.ac ? 'Turned On' : 'Turned Off'}`,
            { icon: '❄️' }
          );
          break;
        case 'office':
          newState.office.computer = !newState.office.computer;
          toast.success(
            `Computer ${newState.office.computer ? 'Started' : 'Shut Down'}`,
            { icon: '💻' }
          );
          break;
        case 'utilityRoom':
          newState.utilityRoom.washer = !newState.utilityRoom.washer;
          toast.success(
            `Washing Machine ${newState.utilityRoom.washer ? 'Started' : 'Stopped'}`,
            { icon: '🧺' }
          );
          break;
      }
      return newState;
    });
  };

  const isNearDoor = (x: number, y: number) => {
    const doorProximity = 30;
    return Object.entries(doors).some(([_, doorList]) =>
      doorList.some(door => 
        Math.abs(x - door.x) < doorProximity && 
        Math.abs(y - door.y) < doorProximity
      )
    );
  };

  const moveCharacter = (direction) => {
    const step = 20;
    const newPosition = { ...position };

    switch (direction) {
      case 'up':
        newPosition.y -= step;
        break;
      case 'down':
        newPosition.y += step;
        break;
      case 'left':
        newPosition.x -= step;
        break;
      case 'right':
        newPosition.x += step;
        break;
    }

    if (newPosition.x >= 0 && newPosition.x <= 650 && 
        newPosition.y >= 0 && newPosition.y <= 600) {
      
      let currentRoomKey = 'outside';
      let newRoomKey = 'outside';
      
      Object.entries(rooms).forEach(([key, room]) => {
        if (position.x >= room.x[0] && position.x <= room.x[1] &&
            position.y >= room.y[0] && position.y <= room.y[1]) {
          currentRoomKey = key;
        }
        if (newPosition.x >= room.x[0] && newPosition.x <= room.x[1] &&
            newPosition.y >= room.y[0] && newPosition.y <= room.y[1]) {
          newRoomKey = key;
        }
      });

      if (currentRoomKey === newRoomKey || 
          (isNearDoor(position.x, position.y) && (currentRoomKey === 'outside' || newRoomKey === 'outside'))) {
        setPosition(newPosition);
      }
    }
  };

  const triggerFireAlarm = () => {
    setFireAlarm(true);
    toast.error(
      <div className="flex items-center gap-2">
        <Siren className="w-6 h-6 text-red-500" />
        <div>
          <p className="font-bold">Fire Alarm Activated!</p>
          <p className="text-sm">Fire Department has been notified</p>
        </div>
      </div>,
      {
        duration: 5000,
        position: 'top-center',
      }
    );
    
    setTimeout(() => {
      setFireAlarm(false);
    }, 5000);
  };

  useEffect(() => {
    let newRoom = 'outside';
    Object.entries(rooms).forEach(([roomKey, room]) => {
      if (position.x >= room.x[0] && position.x <= room.x[1] &&
          position.y >= room.y[0] && position.y <= room.y[1]) {
        newRoom = roomKey;
      }
    });

    if (newRoom !== currentRoom) {
      if (currentRoom !== 'outside') {
        setRoomStates(prev => ({
          ...prev,
          [currentRoom]: { ...prev[currentRoom], light: false, fan: false }
        }));
      }

      if (newRoom !== 'outside') {
        setRoomStates(prev => ({
          ...prev,
          [newRoom]: { ...prev[newRoom], light: true, fan: true }
        }));
      }

      setCurrentRoom(newRoom);
    }
  }, [position]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w':
          moveCharacter('up');
          break;
        case 's':
          moveCharacter('down');
          break;
        case 'a':
          moveCharacter('left');
          break;
        case 'd':
          moveCharacter('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return (
    <div className="min-h-screen bg-[#1a365d] p-8">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Blueprint House Layout</h1>
        
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="mb-6 flex gap-4">
              <select
                value={selectedCommand}
                onChange={(e) => setSelectedCommand(e.target.value)}
                className="flex-1 bg-[#0f2847] text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">Select a command...</option>
                {commands.map(command => (
                  <option key={command.value} value={command.value}>
                    {command.label(roomStates)}
                  </option>
                ))}
              </select>
              <button
                onClick={executeCommand}
                disabled={!selectedCommand}
                className="bg-indigo-600/80 text-white px-6 py-2 rounded-lg hover:bg-indigo-700/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Execute
              </button>
            </div>

            <div 
              className="relative rounded-lg p-4" 
              style={{ 
                height: '600px',
                background: '#0f2847',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            >
              {Object.entries(rooms).map(([key, room]) => (
                <div
                  key={key}
                  className="absolute border-2 border-white/30 rounded-lg p-4 transition-colors duration-300"
                  style={{
                    left: room.x[0],
                    top: room.y[0],
                    width: room.x[1] - room.x[0],
                    height: room.y[1] - room.y[0],
                    backgroundColor: roomStates[key].light ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-white/90">{room.name}</span>
                    <div className="flex gap-2">
                      {roomStates[key].light ? 
                        <LightbulbOn className="w-5 h-5 text-yellow-300" /> : 
                        <LightbulbOff className="w-5 h-5 text-white/50" />
                      }
                      {roomStates[key].fan && 
                        <Fan className="w-5 h-5 text-blue-300 animate-spin" />
                      }
                      {key === 'livingRoom' && roomStates[key].tv && 
                        <Tv className="w-5 h-5 text-green-300" />
                      }
                      {key === 'bathroom' && roomStates[key].shower && 
                        <ShowerHead className="w-5 h-5 text-blue-300" />
                      }
                      {key === 'kitchen' && roomStates[key].dishwasher && 
                        <Droplets className="w-5 h-5 text-blue-300" />
                      }
                      {key === 'bedroom' && roomStates[key].ac && 
                        <Snowflake className="w-5 h-5 text-blue-300" />
                      }
                      {key === 'utilityRoom' && roomStates[key].washer && 
                        <WashingMachine className="w-5 h-5 text-blue-300" />
                      }
                      {key === 'office' && roomStates[key].computer && 
                        <Laptop className="w-5 h-5 text-blue-300" />
                      }
                      
                    </div>
                  </div>
                </div>
              ))}

              {Object.entries(doors).map(([key, doorList]) => 
                doorList.map((door, index) => (
                  <Door
                    key={`${key}-${index}`}
                    className="absolute text-white/70 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: door.x, top: door.y }}
                  />
                ))
              )}

              <User2
                className="absolute transition-all duration-200 text-yellow-300 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: position.x, top: position.y }}
              />

              {fireAlarm && (
                <div className="absolute inset-0 bg-red-500/20 animate-pulse rounded-lg" />
              )}
            </div>
          </div>

          <div className="w-64 space-y-4">
            <div className="bg-[#0f2847] rounded-lg shadow-lg p-6 border border-white/20">
              <h2 className="text-xl font-semibold mb-4 text-white">Controls</h2>
              <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
                <div></div>
                <button
                  onClick={() => moveCharacter('up')}
                  className="bg-white/10 text-white p-3 rounded hover:bg-white/20 flex items-center justify-center"
                >
                  ↑
                </button>
                <div></div>
                
                <button
                  onClick={() => moveCharacter('left')}
                  className="bg-white/10 text-white p-3 rounded hover:bg-white/20 flex items-center justify-center"
                >
                  ←
                </button>
                <button
                  onClick={() => moveCharacter('down')}
                  className="bg-white/10 text-white p-3 rounded hover:bg-white/20 flex items-center justify-center"
                >
                  ↓
                </button>
                <button
                  onClick={() => moveCharacter('right')}
                  className="bg-white/10 text-white p-3 rounded hover:bg-white/20 flex items-center justify-center"
                >
                  →
                </button>
              </div>
            </div>

            <div className="bg-[#0f2847] rounded-lg shadow-lg p-6 border border-white/20">
              <h2 className="text-xl font-semibold mb-4 text-white">Actions</h2>
              <button
                onClick={handleClap}
                className="w-full bg-indigo-600/80 text-white p-4 rounded-lg hover:bg-indigo-700/80 flex items-center justify-center gap-2 mb-4"
              >
                <Hand className="w-5 h-5" />
                Clap
              </button>
              <button
                onClick={triggerFireAlarm}
                className="w-full bg-red-600/80 text-white p-4 rounded-lg hover:bg-red-700/80 flex items-center justify-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Trigger Fire Alarm
              </button>
            </div>

            <div className="bg-[#0f2847] rounded-lg shadow-lg p-6 border border-white/20">
              <h2 className="text-xl font-semibold mb-2 text-white">Status</h2>
              <p className="text-white/80">Current Location: {currentRoom === 'outside' ? 'Outside' : rooms[currentRoom].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;