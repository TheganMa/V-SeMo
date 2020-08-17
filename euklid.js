/*
------Parameter-------
nSektorzeilenVonRing: 3
nSektorspaltenVonRing: 12
schwarzschildradius: 0
dradius: 100
fontSize: 15
versatz_x: 0.0
versatz_y: 0.0
versatz_x_var: 0.0
versatz_y_var: 0.0
startGeodesicsAngle: [60, 120]
startGeodesicsSectors: [29, 29]
startMarksSectors: []
startMarkRadius: [3]
startTextsSectors: []
startTextContent: []
text_dist_from_mid_y: []
----------------------
*/

let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue', 'lightsteelblue', 'greenyellow', 'tomato', 'darkorchid', 'mistyrose', 'salmon'];
let mark_colors = ['grey'];
sec_name= [ 'A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3', 'A4', 'B4', 'C4', 'A5', 'B5', 'C5', 'A6', 'B6', 'C6', 'A7', 'B7', 'C7', 'A8', 'B8', 'C8', 'A9', 'B9', 'C9', 'A10', 'B10', 'C10', 'A11', 'B11', 'C11', 'A12', 'B12', 'C12', ];
sec_ID= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, ];
sec_type= [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ];
sec_fill= [ 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', ];
sec_fontSize= [ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, ];
sec_top= [ 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, ];
sec_bottom= [ 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, 51.76380902050415, 103.5276180410083, 155.29142706151245, ];
sec_height= [ 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, 96.59258262890684, ];
sec_width= [ 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, 103.5276180410083, 155.29142706151245, 207.0552360820166, ];
sec_offset= [ 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, 25.881904510252074, ];
sec_neighbour_top= [ 1, 2, -1, 4, 5, -1, 7, 8, -1, 10, 11, -1, 13, 14, -1, 16, 17, -1, 19, 20, -1, 22, 23, -1, 25, 26, -1, 28, 29, -1, 31, 32, -1, 34, 35, -1, ];
sec_neighbour_right= [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 1, 2, ];
sec_neighbour_bottom= [ -1, 0, 1, -1, 3, 4, -1, 6, 7, -1, 9, 10, -1, 12, 13, -1, 15, 16, -1, 18, 19, -1, 21, 22, -1, 24, 25, -1, 27, 28, -1, 30, 31, -1, 33, 34, ];
sec_neighbour_left= [ 33, 34, 35, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, ];
sec_posx= [ 0.0, 0.0, 0.0, 89.14814565722669, 152.4444369716801, 215.7407282861335, 154.4091176788674, 264.04151016618135, 373.6739026534953, 178.2962913144534, 304.88887394336024, 431.48145657226706, 154.40911767886743, 264.0415101661814, 373.67390265349536, 89.14814565722676, 152.44443697168023, 215.74072828613367, 2.183499824580894e-14, 3.73381183570377e-14, 5.2841238468266454e-14, -89.14814565722666, -152.44443697168003, -215.74072828613342, -154.40911767886737, -264.0415101661813, -373.6739026534952, -178.2962913144534, -304.88887394336024, -431.48145657226706, -154.4091176788675, -264.04151016618147, -373.6739026534955, -89.14814565722679, -152.44443697168026, -215.74072828613373, ];
sec_posy= [ -178.2962913144534, -304.88887394336024, -431.48145657226706, -154.40911767886743, -264.0415101661814, -373.67390265349536, -89.14814565722672, -152.44443697168015, -215.7407282861336, -1.091749912290447e-14, -1.866905917851885e-14, -2.6420619234133227e-14, 89.14814565722666, 152.44443697168006, 215.74072828613345, 154.4091176788674, 264.0415101661813, 373.67390265349525, 178.2962913144534, 304.88887394336024, 431.48145657226706, 154.40911767886746, 264.0415101661814, 373.67390265349536, 89.14814565722679, 152.44443697168026, 215.74072828613373, 3.275249736871341e-14, 5.600717753555654e-14, 7.926185770239968e-14, -89.14814565722659, -152.44443697167992, -215.74072828613325, -154.40911767886737, -264.0415101661813, -373.6739026534952, ];
sec_angle= [ 0.0, 0.0, 0.0, 29.999999999999996, 29.999999999999996, 29.999999999999996, 59.99999999999999, 59.99999999999999, 59.99999999999999, 90.0, 90.0, 90.0, 119.99999999999999, 119.99999999999999, 119.99999999999999, 149.99999999999997, 149.99999999999997, 149.99999999999997, 180.0, 180.0, 180.0, 209.99999999999997, 209.99999999999997, 209.99999999999997, 239.99999999999997, 239.99999999999997, 239.99999999999997, 270.0, 270.0, 270.0, 299.99999999999994, 299.99999999999994, 299.99999999999994, 329.99999999999994, 329.99999999999994, 329.99999999999994, ];
startSectors= [ 29, 29, ];
x_Start= [ -431.48145657226706, -431.48145657226706, ];
y_Start= [ 7.926185770239968e-14, 7.926185770239968e-14, ];
x_End= [ -393.83822290406573, -393.8382229040657, ];
y_End= [ 21.73333109150412, -21.73333109150395, ];
startStrokeWidth= [ 2, 2, ];
startFill= [ line_colors[0], line_colors[1], ];
startStroke= [ line_colors[0], line_colors[1], ];
startParentSector= [ [29,0], [29,1], ];
startLineID= [ [0,1], [1,1], ];
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
