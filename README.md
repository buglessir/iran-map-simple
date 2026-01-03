## 🗺️ iran-map-simple

Iran map in SVG format for React JS applications.
\
\
**Note:** This library works with ⚛️ React versions `^18.0.0` and `^19.0.0`
\
\
![npm version](https://img.shields.io/npm/v/iran-map-simple)
![npm license](https://img.shields.io/github/license/buglessir/iran-map-simple)
![npm downloads](https://img.shields.io/npm/dm/iran-map-simple)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/iran-map-simple)
\
\
\
![iran-map-simple](https://raw.githubusercontent.com/buglessir/iran-map-simple/main/assets/iran-map-simple.jpg)

## Install
Run the following command to install:

`npm i iran-map-simple`

## Props

| Prop | Type | Default | Description |
|------|--------|----------|-------------|
| **width** | `number` | 500 | Sets the map width. (px) |
| **defaultProvinces** | `number[]` | [] | Pre-selected provinces IDs. |
| **fillColor** | `string` | `#CCD1D1` | Background color of provinces. |
| **hoverColor** | `string` | `#C1C1C1` | Background color on hover. |
| **selectedColor** | `string` | `#58D68D` | Background color for selected provinces. |
| **tooltipBackground** | `string` | `#333333` | Tooltip background color. |
| **tooltipColor** | `string` | `#000000` | Tooltip text color. |
| **tooltipFontSize** | `number` | `14` | Font size of tooltip text. (px) |
| **tooltipFontFamily** | `string` | `sans-serif` | Font family tooltip text. |
| **onSelect** | `(provinces: number[]) => void` | `console.log` | Callback when provinces are selected. |

## CSS classNames

- **Wrapper:** `iran-map-simple`
- **SVG:** `iran-map-simple__svg`
- **Path:** `iran-map-simple__province`
- **Path-selected):** `iran-map-simple__province--selected`
- **Tooltip:** `iran-map-simple__tooltip`

## Example

```javascript
import IranMapSimple from 'iran-map-simple';

const App = () => {
  return (
    <IranMapSimple defaultProvinces={[7]} onSelect={console.log} />
  )
}

export default App;
```

## Demo

In order to start the demo version, run the following commands:

```
npm run build
cd ./demo
npm i
npm run dev
```
The example project uses **Vite** in background and the output will be here by default: `http://localhost:5173/`
