import { useState, useEffect, useRef } from 'react';
import type { IranMapSimpleProps } from './types';
import { IRAN_MAP_PATHS } from './constants';
import useProvinceSelection from './useProvinceSelection';

const IranMapSimple = ({
  width = 500,
  defaultProvinces = [],
  fillColor = '#CCD1D1',
  hoverColor = '#C1C1C1',
  selectedColor = '#58D68D',
  tooltipBackground = '#333333',
  tooltipColor = '#FFFFFF',
  tooltipFontSize = 12,
  tooltipFontFamily = 'sans-serif',
  onSelect = console.log
}: IranMapSimpleProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });
  const { selected, toggle } = useProvinceSelection(defaultProvinces);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll('path');

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      const text = target.getAttribute('data-title') ?? '';

      setTooltip({
        visible: true,
        x: e.pageX + 10,
        y: e.pageY + 10,
        text,
      });
    };

    const handleMouseLeave = () => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    };

    paths.forEach((path) => {
      path.addEventListener('mousemove', handleMouseMove);
      path.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      paths.forEach((path) => {
        path.removeEventListener('mousemove', handleMouseMove);
        path.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className='iran-map-simple' style={{ position: 'relative' }}>
      <svg
        ref={svgRef}
        viewBox='0 0 654 593'
        width={width}
        style={{ stroke: 'white', strokeWidth: 1.5 }}
        className='iran-map-simple__svg'
      >
        {
          IRAN_MAP_PATHS.map(path => {
            const id = path.id;
            const isSelected = selected.includes(id);
            return (
              <path
                d={path.d}
                data-title={path.title}
                data-id={path.id}
                style={{
                  fill: isSelected ? selectedColor : fillColor,
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  if (!isSelected) e.currentTarget.style.fill = hoverColor;
                }}
                onMouseLeave={e => {
                  if (!isSelected) e.currentTarget.style.fill = fillColor;
                }}
                onClick={() => {
                  toggle(id);
                  const next = selected.includes(id)
                    ? selected.filter(a => a !== id)
                    : [...selected, id];
                  onSelect?.(next);
                }}
                className={`iran-map-simple__province ${isSelected ? 'iran-map-simple__province--selected' : ''}`}
                key={`iran-map-simple-path-${id}`}
              />
            )
          })
        }
      </svg>
      {tooltip.visible && (
        <div
          className='iran-map-simple__tooltip'
          style={{
            position: 'absolute',
            zIndex: 1000,
            left: tooltip.x,
            top: tooltip.y,
            background: tooltipBackground,
            color: tooltipColor,
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: tooltipFontSize + 'px',
            fontFamily: tooltipFontFamily,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default IranMapSimple;