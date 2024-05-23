import React, { useState } from "react";

const ArmorCustomization: React.FC = () => {
  const [selectedModSlot, setSelectedModSlot] = useState<string | null>(null);

  const handleModSlotClick = (slot: string) => {
    setSelectedModSlot(slot);
  };

  return (
    <div className="customization-panel">
      <div className="armor-slots">
        {/* Helmet Slot */}
        <div className="armor-slot">
          <div className="armor-image">Helmet</div>
          <div className="mod-grid">
            {["slot1", "slot2", "slot3", "slot4", "slot5"].map((slot) => (
              <div
                key={slot}
                className="mod"
                onClick={() => handleModSlotClick(`Helmet-${slot}`)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>

        {/* Arms Slot */}
        <div className="armor-slot">
          <div className="armor-image">Arms</div>
          <div className="mod-grid">
            {["slot1", "slot2", "slot3", "slot4", "slot5"].map((slot) => (
              <div
                key={slot}
                className="mod"
                onClick={() => handleModSlotClick(`Arms-${slot}`)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>
        {/* Chest Slot */}
        <div className="armor-slot">
          <div className="armor-image">Chest</div>
          <div className="mod-grid">
            {["slot1", "slot2", "slot3", "slot4", "slot5"].map((slot) => (
              <div
                key={slot}
                className="mod"
                onClick={() => handleModSlotClick(`Arms-${slot}`)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>
        {/* Leg Slot */}
        <div className="armor-slot">
          <div className="armor-image">Leg</div>
          <div className="mod-grid">
            {["slot1", "slot2", "slot3", "slot4", "slot5"].map((slot) => (
              <div
                key={slot}
                className="mod"
                onClick={() => handleModSlotClick(`Arms-${slot}`)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>
        {/* Class Item Slot */}
        <div className="armor-slot">
          <div className="armor-image">Class Item</div>
          <div className="mod-grid">
            {["slot1", "slot2", "slot3", "slot4", "slot5"].map((slot) => (
              <div
                key={slot}
                className="mod"
                onClick={() => handleModSlotClick(`Arms-${slot}`)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedModSlot && (
        <div className="mod-submenu">
          <div className="submenu-grid">
            <div className="submenu-item">Option 1</div>
            <div className="submenu-item">Option 2</div>
            <div className="submenu-item">Option 3</div>
            <div className="submenu-item">Option 4</div>
            <div className="submenu-item">Option 5</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArmorCustomization;
