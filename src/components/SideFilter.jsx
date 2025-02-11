import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import AccordionDropdown from "./AccordionDropdown";
import { formatear } from "../utilities/formateo";

export const SideFilter = ({
  filtrosActivos,
  data,
  options,
  onFilterChange,
  onRemoveFilter,
}) => {
  const keys = Object.keys(options);
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [precioMaximo, setPrecioMaximo] = useState(100000);
  const [value, setValue] = useState([0, precioMaximo]);

  useEffect(() => {
    async function fetchData() {
      const listaDePrecios = await data.map((producto) => producto.precio);
      setPrecioMaximo(Math.max(...listaDePrecios));
      setPrecioMinimo(Math.min(...listaDePrecios));
    }
    fetchData();
  }, [data]);

  const handleDropdownFilterChange = (dropdownKey, selectedFilters) => {
    onFilterChange({ ...filtrosActivos, [dropdownKey]: selectedFilters });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onFilterChange({ ...filtrosActivos, precio: newValue });
  };

  return (
    <aside className="side-filters-container">
      <h2>Filtros de búsqueda</h2>
      <h3>Precio</h3>
      <div className="price-slider">
        <Slider
          min={precioMinimo}
          max={precioMaximo}
          step={100}
          color="secondary"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          valueLabelFormat={formatear}
          getAriaValueText={formatear}
          disabled={precioMaximo === 0}
        />
      </div>
      <div className="accordions-container">
        {keys.map((key) => (
          <AccordionDropdown
            key={"accordion-" + key}
            title={key.toUpperCase()}
            options={options[key]}
            selected={filtrosActivos[key] || []}
            onFilterChange={(selectedFilters) =>
              handleDropdownFilterChange(key, selectedFilters)
            }
            onRemoveFilter={onRemoveFilter}
          ></AccordionDropdown>
        ))}
      </div>
    </aside>
  );
};
