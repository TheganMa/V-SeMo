/*
------Parameter-------
nSektorzeilenVonRing: 11
nSektorspaltenVonRing: 12
schwarzschildradius: 120
dradius: 48.0
fontSizeStern: 8
fontSizeStern: 15
versatz_x: 0.0
versatz_y: -0.9
versatz_x_var: 0.0
versatz_y_var: 0.0
startGeodesicsAngle: []
startGeodesicsSectors: []
startMarksSectors: [53, 113, 113]
startMarkRadius: [6, 3, 3]
startTextsSectors: [53, 113, 113]
startTextContent: ['Karl', 'P1', 'P2']
text_dist_from_mid_y: [-0.1, 0.5, -0.5]
----------------------
*/

let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['grey', 'green', 'green', 'grey', 'grey'];
sec_name= [ 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'K5', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6', 'K6', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7', 'K7', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8', 'A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9', 'K9', 'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'K10', 'A11', 'B11', 'C11', 'D11', 'E11', 'F11', 'G11', 'H11', 'I11', 'J11', 'K11', 'A12', 'B12', 'C12', 'D12', 'E12', 'F12', 'G12', 'H12', 'I12', 'J12', 'K12', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, ];
sec_type= [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ];
sec_fill= [ '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#e2e2e2', '#e2e2e2', '#e2e2e2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_fontSize= [ 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, 8, 8, 8, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, ];
sec_bottom= [ 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 0.0, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, ];
sec_height= [ 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, 46.48912942405901, 47.52080292025642, 49.78759004312752, 88.93627642958566, 70.92010480223273, 63.79389677045661, 59.913781930034034, 57.460084103311864, 55.76433685752637, 54.52080711083444, 53.569219381653056, ];
sec_width= [ 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, 24.84662832984199, 49.69325665968398, 74.53988498952597, 99.38651331936796, 124.23314164920995, 149.07976997905195, 173.92639830889394, 198.77302663873593, 223.61965496857792, 248.4662832984199, 273.3129116282619, ];
sec_offset= [ 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, 12.423314164920995, ];
sec_neighbour_top= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, -1, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -1, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, -1, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, -1, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, -1, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, -1, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, -1, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, -1, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, -1, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, -1, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, -1, ];
sec_neighbour_right= [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
sec_neighbour_bottom= [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -1, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, -1, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, -1, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, -1, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, -1, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, -1, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, -1, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, -1, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, ];
sec_neighbour_left= [ 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, ];
sec_posx= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 21.622282356014747, 50.1247654420936, 79.45186368293957, 119.13283030111786, 164.09692560907243, 202.77542600224476, 238.70234567736742, 273.0458121857039, 306.3519174259134, 338.92320341800365, 370.94571004112555, 37.45089161621763, 86.81864046317878, 137.61466465488786, 206.34411493101723, 284.2242125207639, 351.2173403623112, 413.44459059906956, 472.9292194995485, 530.6170859778274, 587.0322081839842, 642.4968166409421, 43.2445647120295, 100.24953088418721, 158.90372736587918, 238.26566060223576, 328.1938512181449, 405.55085200448957, 477.4046913547349, 546.0916243714079, 612.703834851827, 677.8464068360074, 741.8914200822512, 37.45089161621764, 86.81864046317878, 137.6146646548879, 206.34411493101726, 284.22421252076396, 351.21734036231123, 413.4445905990696, 472.92921949954854, 530.6170859778275, 587.0322081839843, 642.4968166409423, 21.622282356014765, 50.12476544209364, 79.45186368293965, 119.13283030111796, 164.09692560907257, 202.77542600224493, 238.70234567736762, 273.0458121857041, 306.3519174259137, 338.92320341800394, 370.94571004112584, 5.295931775510751e-15, 1.227702671133436e-14, 1.946009410912076e-14, 2.9179127860325766e-14, 4.0192154939414385e-14, 4.966565527987801e-14, 5.846521271655061e-14, 6.687693598276234e-14, 7.503457901765984e-14, 8.30122432445251e-14, 9.085549529186133e-14, -21.62228235601474, -50.124765442093576, -79.45186368293955, -119.1328303011178, -164.09692560907237, -202.77542600224467, -238.7023456773673, -273.04581218570377, -306.3519174259133, -338.92320341800354, -370.9457100411254, -37.450891616217625, -86.81864046317875, -137.61466465488783, -206.34411493101717, -284.22421252076384, -351.21734036231106, -413.44459059906944, -472.92921949954837, -530.6170859778273, -587.032208183984, -642.496816640942, -43.2445647120295, -100.24953088418721, -158.90372736587918, -238.26566060223576, -328.1938512181449, -405.55085200448957, -477.4046913547349, -546.0916243714079, -612.703834851827, -677.8464068360074, -741.8914200822512, -37.45089161621765, -86.81864046317882, -137.61466465488792, -206.34411493101732, -284.22421252076407, -351.21734036231135, -413.4445905990698, -472.9292194995487, -530.6170859778277, -587.0322081839845, -642.4968166409425, -21.622282356014768, -50.12476544209365, -79.45186368293966, -119.13283030111798, -164.0969256090726, -202.77542600224496, -238.70234567736765, -273.04581218570416, -306.35191742591377, -338.923203418004, -370.94571004112595, ];
sec_posy= [ -43.2445647120295, -100.24953088418721, -158.90372736587918, -238.26566060223576, -328.1938512181449, -405.55085200448957, -477.4046913547349, -546.0916243714079, -612.703834851827, -677.8464068360074, -741.8914200822512, -37.45089161621764, -86.81864046317878, -137.6146646548879, -206.34411493101726, -284.22421252076396, -351.21734036231123, -413.4445905990696, -472.92921949954854, -530.6170859778275, -587.0322081839843, -642.4968166409423, -21.622282356014754, -50.12476544209362, -79.4518636829396, -119.1328303011179, -164.09692560907249, -202.77542600224484, -238.7023456773675, -273.045812185704, -306.35191742591354, -338.92320341800377, -370.94571004112566, -2.6479658877553754e-15, -6.13851335566718e-15, -9.73004705456038e-15, -1.4589563930162883e-14, -2.0096077469707192e-14, -2.4832827639939004e-14, -2.923260635827531e-14, -3.343846799138117e-14, -3.751728950882992e-14, -4.150612162226255e-14, -4.5427747645930666e-14, 21.62228235601474, 50.12476544209358, 79.45186368293956, 119.13283030111782, 164.09692560907237, 202.7754260022447, 238.70234567736733, 273.0458121857038, 306.35191742591337, 338.92320341800354, 370.94571004112544, 37.450891616217625, 86.81864046317877, 137.61466465488783, 206.3441149310172, 284.2242125207639, 351.2173403623111, 413.4445905990695, 472.9292194995484, 530.6170859778274, 587.032208183984, 642.496816640942, 43.2445647120295, 100.24953088418721, 158.90372736587918, 238.26566060223576, 328.1938512181449, 405.55085200448957, 477.4046913547349, 546.0916243714079, 612.703834851827, 677.8464068360074, 741.8914200822512, 37.45089161621764, 86.8186404631788, 137.6146646548879, 206.3441149310173, 284.224212520764, 351.2173403623113, 413.44459059906967, 472.9292194995486, 530.6170859778275, 587.0322081839843, 642.4968166409424, 21.622282356014768, 50.12476544209365, 79.45186368293966, 119.13283030111798, 164.0969256090726, 202.77542600224496, 238.70234567736765, 273.04581218570416, 306.35191742591377, 338.923203418004, 370.94571004112595, 7.943897663266126e-15, 1.8415540067001538e-14, 2.919014116368114e-14, 4.376869179048864e-14, 6.028823240912157e-14, 7.449848291981701e-14, 8.769781907482592e-14, 1.003154039741435e-13, 1.1255186852648976e-13, 1.2451836486678764e-13, 1.36283242937792e-13, -21.622282356014722, -50.12476544209354, -79.45186368293949, -119.13283030111772, -164.09692560907223, -202.7754260022445, -238.70234567736713, -273.0458121857036, -306.3519174259131, -338.92320341800325, -370.9457100411251, -37.450891616217625, -86.81864046317875, -137.61466465488783, -206.34411493101717, -284.22421252076384, -351.21734036231106, -413.44459059906944, -472.92921949954837, -530.6170859778273, -587.032208183984, -642.496816640942, ];
sec_angle= [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 29.999999999999996, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 59.99999999999999, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 119.99999999999999, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 149.99999999999997, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 180.0, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 209.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 270.0, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 299.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, ];
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
markStart_x= [ 589.3930283836249, -187.08884625451321, -215.97174926926937, ];
markStart_y= [ 340.2862225957744, -108.01579674741951, -124.69134857796682, ];
markStartStrokeWidth= [ 2, 2, 2, ];
markStartRadius= [ 6, 3, 3, ];
markStartFill= [ mark_colors[0], mark_colors[1], mark_colors[2], ];
markStartStroke= [ mark_colors[0], mark_colors[1], mark_colors[2], ];
markStartParentSector= [ [53,0], [113,0], [113,1], ];
markStartID= [ [0], [1], [2], ];
textStart_x= [ 589.3930283836249, -187.08884625451321, -225.59938360752142, ];
textStart_y= [ 355.2862225957744, -93.01579674741951, -115.24986585481591, ];
textStartContent= [ 'Karl', 'P1', 'P2', ];
textStartFontSize= [ 15, 15, 15, ];
textStartParentSector= [ [53,0], [113,0], [113,1], ];
textStartID= [ [0], [1], [2], ];
textStartAngle= [ 0, 0, 0, ];
