startZoom =0.5
startViewportTransform_4 =0
startViewportTransform_5 =0

/*
------Parameter-------
nSektorzeilenVonRing: 10
nSektorspaltenVonRing: 12
nSektorzeilenVonRingSchwarzschild: 48
nSektorzeilenVonRingEuklid: 0
schwarzschildradius: 60
dradius: 1.25 * 60
startZoom =0.5
startViewportTransform_4 =0
startViewportTransform_5 =0
fontSize: 15
startGeodesicsSectors: []
startGeodesicsAngle: []
startGeodesicsOffset_x: []
startGeodesicsOffset_y: []
startGeodesicsLength: []
startGeodesicsOperational: []
startMarksSectors: []
startMarksRadius: []
startMarksOffset_x: []
startMarksOffset_y: []
startTextsSectors: []
startTextContent: []
startTextsOffset_x: []
startTextsOffset_y: []
----------------------
*/

let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['grey', 'grey', 'grey'];
let lineStrokeWidthWhenNotSelected = 10
let lineStrokeWidthWhenSelected =15
sec_name= [ 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9', 'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'A11', 'B11', 'C11', 'D11', 'E11', 'F11', 'G11', 'H11', 'I11', 'J11', 'A12', 'B12', 'C12', 'D12', 'E12', 'F12', 'G12', 'H12', 'I12', 'J12', ];
sec_fill= [ 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, ];
sec_type= [ 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', 'noneuklid', ];
sec_fontSize= [ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, ];
sec_bottom= [ 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 39.26990816987241, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, ];
sec_height= [ 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, 114.00031849347428, 89.22023013501088, 83.21327861436322, 80.39174731690805, 78.74273702676713, 77.65895701898765, 76.8916632223989, 76.31964500294649, 75.87666648784973, 75.52343864913314, ];
sec_width= [ 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, 78.53981633974482, 117.80972450961724, 157.07963267948963, 196.34954084936206, 235.61944901923448, 274.8893571891069, 314.15926535897927, 353.4291735288517, 392.6990816987241, 431.9689898685965, ];
sec_offset= [ 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, 19.634954084936204, 19.63495408493621, 19.634954084936197, 19.63495408493621, 19.63495408493621, 19.634954084936197, 19.634954084936197, 19.634954084936226, 19.634954084936197, 19.634954084936197, ];
sec_coords= [ [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], [0, 0, 78.53981633974482, 0, 58.90486225480861, 114.00031849347428, 19.634954084936204, 114.00031849347428], [0, 0, 117.80972450961724, 0, 98.17477042468103, 89.22023013501088, 19.63495408493621, 89.22023013501088], [0, 0, 157.07963267948963, 0, 137.44467859455344, 83.21327861436322, 19.634954084936197, 83.21327861436322], [0, 0, 196.34954084936206, 0, 176.71458676442586, 80.39174731690805, 19.63495408493621, 80.39174731690805], [0, 0, 235.61944901923448, 0, 215.98449493429825, 78.74273702676713, 19.63495408493621, 78.74273702676713], [0, 0, 274.8893571891069, 0, 255.25440310417068, 77.65895701898765, 19.634954084936197, 77.65895701898765], [0, 0, 314.15926535897927, 0, 294.52431127404304, 76.8916632223989, 19.634954084936197, 76.8916632223989], [0, 0, 353.4291735288517, 0, 333.7942194439155, 76.31964500294649, 19.634954084936226, 76.31964500294649], [0, 0, 392.6990816987241, 0, 373.06412761378795, 75.87666648784973, 19.634954084936197, 75.87666648784973], [0, 0, 431.9689898685965, 0, 412.3340357836603, 75.52343864913314, 19.634954084936197, 75.52343864913314], ];
sec_neighbour_top= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 11, 12, 13, 14, 15, 16, 17, 18, 19, -1, 21, 22, 23, 24, 25, 26, 27, 28, 29, -1, 31, 32, 33, 34, 35, 36, 37, 38, 39, -1, 41, 42, 43, 44, 45, 46, 47, 48, 49, -1, 51, 52, 53, 54, 55, 56, 57, 58, 59, -1, 61, 62, 63, 64, 65, 66, 67, 68, 69, -1, 71, 72, 73, 74, 75, 76, 77, 78, 79, -1, 81, 82, 83, 84, 85, 86, 87, 88, 89, -1, 91, 92, 93, 94, 95, 96, 97, 98, 99, -1, 101, 102, 103, 104, 105, 106, 107, 108, 109, -1, 111, 112, 113, 114, 115, 116, 117, 118, 119, -1, ];
sec_neighbour_right= [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];
sec_neighbour_bottom= [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, -1, 20, 21, 22, 23, 24, 25, 26, 27, 28, -1, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, 40, 41, 42, 43, 44, 45, 46, 47, 48, -1, 50, 51, 52, 53, 54, 55, 56, 57, 58, -1, 60, 61, 62, 63, 64, 65, 66, 67, 68, -1, 70, 71, 72, 73, 74, 75, 76, 77, 78, -1, 80, 81, 82, 83, 84, 85, 86, 87, 88, -1, 90, 91, 92, 93, 94, 95, 96, 97, 98, -1, 100, 101, 102, 103, 104, 105, 106, 107, 108, -1, 110, 111, 112, 113, 114, 115, 116, 117, 118, ];
sec_neighbour_left= [ 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, ];
sec_posx= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 81.00007962336856, 136.80521678048984, 184.91359396783335, 230.81485045065116, 275.59847153656995, 319.69889504800864, 363.33655010835525, 406.6393771646916, 449.68845503739067, 492.53848132163637, 140.2962533247989, 236.9535862042828, 320.27973976244925, 399.78304812194, 477.3505551896643, 553.7347293467811, 629.3173650344667, 704.3200616074095, 778.8832517019133, 853.1016743318887, 162.00015924673716, 273.61043356097974, 369.82718793566676, 461.6297009013024, 551.19694307314, 639.3977900960174, 726.6731002167106, 813.2787543293833, 899.3769100747814, 985.0769626432729, 140.29625332479893, 236.95358620428283, 320.2797397624493, 399.78304812194006, 477.35055518966436, 553.7347293467813, 629.3173650344667, 704.3200616074096, 778.8832517019134, 853.1016743318888, 81.00007962336863, 136.80521678048996, 184.9135939678335, 230.81485045065133, 275.5984715365702, 319.6988950480089, 363.33655010835554, 406.63937716469195, 449.688455037391, 492.53848132163677, 1.9839297648287814e-14, 3.350761416737734e-14, 4.5290768194308093e-14, 5.6533333560013e-14, 6.750215720343267e-14, 7.83036457022979e-14, 8.899178862068785e-14, 9.95979223304026e-14, 1.101419054150118e-13, 1.206371349214881e-13, -81.00007962336853, -136.8052167804898, -184.91359396783326, -230.81485045065105, -275.59847153656983, -319.6988950480085, -363.3365501083551, -406.63937716469144, -449.6884550373905, -492.53848132163614, -140.29625332479887, -236.95358620428274, -320.2797397624492, -399.78304812193994, -477.3505551896642, -553.734729346781, -629.3173650344664, -704.3200616074092, -778.8832517019131, -853.1016743318885, -162.00015924673716, -273.61043356097974, -369.82718793566676, -461.6297009013024, -551.19694307314, -639.3977900960174, -726.6731002167106, -813.2787543293833, -899.3769100747814, -985.0769626432729, -140.29625332479898, -236.9535862042829, -320.2797397624494, -399.7830481219402, -477.35055518966453, -553.7347293467815, -629.317365034467, -704.3200616074098, -778.8832517019138, -853.1016743318892, -81.00007962336865, -136.80521678048999, -184.91359396783355, -230.8148504506514, -275.59847153657023, -319.698895048009, -363.33655010835565, -406.639377164692, -449.6884550373911, -492.5384813216369, ];
sec_posy= [ -162.00015924673716, -273.61043356097974, -369.82718793566676, -461.6297009013024, -551.19694307314, -639.3977900960174, -726.6731002167106, -813.2787543293833, -899.3769100747814, -985.0769626432729, -140.29625332479893, -236.95358620428283, -320.2797397624493, -399.78304812194006, -477.35055518966436, -553.7347293467813, -629.3173650344667, -704.3200616074096, -778.8832517019134, -853.1016743318888, -81.00007962336859, -136.8052167804899, -184.9135939678334, -230.81485045065125, -275.59847153657006, -319.69889504800875, -363.33655010835537, -406.6393771646918, -449.68845503739084, -492.53848132163654, -9.919648824143907e-15, -1.675380708368867e-14, -2.2645384097154047e-14, -2.82666667800065e-14, -3.375107860171634e-14, -3.915182285114895e-14, -4.4495894310343927e-14, -4.97989611652013e-14, -5.50709527075059e-14, -6.031856746074405e-14, 81.00007962336853, 136.80521678048981, 184.9135939678333, 230.81485045065108, 275.5984715365699, 319.6988950480086, 363.33655010835514, 406.6393771646915, 449.6884550373905, 492.5384813216362, 140.29625332479887, 236.95358620428277, 320.2797397624492, 399.78304812193994, 477.35055518966425, 553.7347293467811, 629.3173650344665, 704.3200616074093, 778.8832517019132, 853.1016743318886, 162.00015924673716, 273.61043356097974, 369.82718793566676, 461.6297009013024, 551.19694307314, 639.3977900960174, 726.6731002167106, 813.2787543293833, 899.3769100747814, 985.0769626432729, 140.29625332479893, 236.95358620428286, 320.27973976244937, 399.7830481219401, 477.3505551896644, 553.7347293467814, 629.3173650344668, 704.3200616074096, 778.8832517019135, 853.101674331889, 81.00007962336865, 136.80521678048999, 184.91359396783355, 230.8148504506514, 275.59847153657023, 319.698895048009, 363.33655010835565, 406.639377164692, 449.6884550373911, 492.5384813216369, 2.9758946472431723e-14, 5.0261421251066003e-14, 6.793615229146214e-14, 8.48000003400195e-14, 1.01253235805149e-13, 1.1745546855344683e-13, 1.3348768293103176e-13, 1.4939688349560388e-13, 1.6521285812251768e-13, 1.8095570238223214e-13, -81.00007962336846, -136.8052167804897, -184.91359396783312, -230.81485045065088, -275.59847153656966, -319.6988950480083, -363.3365501083548, -406.6393771646911, -449.6884550373901, -492.53848132163574, -140.29625332479887, -236.95358620428274, -320.2797397624492, -399.78304812193994, -477.3505551896642, -553.734729346781, -629.3173650344664, -704.3200616074092, -778.8832517019131, -853.1016743318885, ];
sec_angle= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, ];
startSectors= [ ];
x_Start= [ ];
y_Start= [ ];
x_End= [ ];
y_End= [ ];
startStrokeWidth= [ ];
startFill= [ ];
startStroke= [ ];
startParentSector= [ ];
startLineID= [ ];
markStart_x= [ ];
markStart_y= [ ];
markStartStrokeWidth= [ ];
markStartRadius= [ ];
markStartFill= [ ];
markStartStroke= [ ];
markStartParentSector= [ ];
markStartID= [ ];
textStart_x= [ ];
textStart_y= [ ];
textStartContent= [ ];
textStartFontSize= [ ];
textStartParentSector= [ ];
textStartID= [ ];
textStartAngle= [ ];
