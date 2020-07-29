import React from 'react';

function FormField({ value, onChange, type, name, children }) {
    return (
        <div>
            <label>
                {children}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormField;