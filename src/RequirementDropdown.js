import React from 'react';
import Select from 'react-select';

function RequirementDropdown({ label, options, selectedValue, onSelect }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
      <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{label}:</span>
      <Select
        options={options}
        value={options.find(opt => opt.value === selectedValue)}
        onChange={(option) => onSelect(option.value)}
        placeholder={`View ${label}`}
      />
    </div>
  );
}

export default RequirementDropdown;
