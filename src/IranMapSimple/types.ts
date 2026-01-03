export type PathType = {
  d: string;
  title: string;
  id: number
}

export type IranMapSimpleProps = {
  width?: number;
  defaultProvinces?: number[];

  fillColor?: string;
  hoverColor?: string;
  selectedColor?: string;

  tooltipBackground?: string;
  tooltipColor?: string;
  tooltipFontSize?: number;
  tooltipFontFamily?: string;

  onSelect?: (areas: number[]) => void;
}