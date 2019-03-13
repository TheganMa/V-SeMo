import io
import numpy as np
import math

nSektorzeilenVonKugel = 9
nSektorspaltenVonKugel = 18
zeilenanzahl = 3
spaltenanzahl = 3
radius_sphere = 500
sectorabstand_x = 100
sectorabstand_y = 30

anzahlStartGeodesics = 2

def main():



    dtheta = (math.pi/nSektorzeilenVonKugel)
    dphi = (2*math.pi/nSektorspaltenVonKugel)
    maxSecBreite = radius_sphere * dphi * math.sin(dtheta * math.floor(nSektorzeilenVonKugel/2))

    if (zeilenanzahl > nSektorzeilenVonKugel):
        print("Achtung zeilenanzahl ist größer als nSektorzeilenVonKugel")
        return -1

    if (spaltenanzahl > nSektorspaltenVonKugel):
        print("Achtung spaltenanzahl ist größer als nSektorspaltenVonKugel")
        return -2

    if (nSektorzeilenVonKugel % 2 != zeilenanzahl % 2):
        print("Achtung nSektorZeilenVonKugel und zeilenanzahl müssen gerade oder ungerade sein")
        return -3


    sector_y_dist = 0.0

    zeilestart = math.floor((nSektorzeilenVonKugel-zeilenanzahl)/2)
    zeileende = nSektorzeilenVonKugel-round((nSektorzeilenVonKugel-zeilenanzahl)/2)

    file = io.open("kugelmetrik.js",'w')

    file.write("let line_colors = ['blue', 'black', 'grey', 'purple', 'orange', 'fuchsia', 'deepskyblue', 'gold', 'silver', 'lightskyblue'];")
    file.write("\n")

    variablenamesSectors = ["sec_name", "sec_ID", "sec_top","sec_bottom", "sec_height", "sec_width", "sec_offset", "sec_neighbour_top", "sec_neighbour_right", "sec_neighbour_bottom", "sec_neighbour_left", "sec_posx","sec_posy","sec_angle"  ]
    sectorDict = dict(zip(variablenamesSectors,range(len(variablenamesSectors))))
    anzahlDerSektoren = zeilenanzahl * spaltenanzahl



    #sectorValues = np.zeros((len(variablenamesSectors),anzahlDerSektoren))
    sectorValues = [[[] for ii in range(anzahlDerSektoren)] for jj in range(len(variablenamesSectors))]

    jj =0

    for id in range(0, anzahlDerSektoren):
        sectorValues[sectorDict["sec_name"]][id] = id + 1
        sectorValues[sectorDict["sec_ID"]][id] = id

    for zeile in range(zeilestart, zeileende):
        for ii in range(0,spaltenanzahl):
            sectorValues[sectorDict["sec_top"]][jj + ii * (zeileende - zeilestart)] = radius_sphere*math.sin((zeile) * dtheta) * dphi
            sectorValues[sectorDict["sec_bottom"]][jj + ii * (zeileende - zeilestart)] = radius_sphere * math.sin((zeile +1) * dtheta) * dphi
            offset = (sectorValues[2][jj + ii * (zeileende - zeilestart)] - sectorValues[3][jj + ii * (zeileende - zeilestart)])/2
            sector_width = max(sectorValues[2][jj + ii * (zeileende - zeilestart)],sectorValues[3][jj + ii * (zeileende - zeilestart)])
            sector_height = math.sqrt(math.pow(radius_sphere, 2) * math.pow(dtheta, 2) - math.pow(offset, 2))
            sectorValues[sectorDict["sec_height"]][jj + ii * (zeileende - zeilestart)] = sector_height
            sectorValues[sectorDict["sec_width"]][jj + ii * (zeileende - zeilestart)] = sector_width
            sector_y_dist = sector_height + sectorabstand_y
            sectorValues[sectorDict["sec_offset"]][jj + ii * (zeileende - zeilestart)] = offset
            sectorValues[sectorDict["sec_posx"]][jj + ii * (zeileende - zeilestart)] = (ii - spaltenanzahl * 0.5 + 0.5) * (sectorabstand_x+maxSecBreite) + (maxSecBreite - sector_width)/2
            sectorValues[sectorDict["sec_posy"]][jj + ii * (zeileende - zeilestart)] = (zeile - (zeilenanzahl+0.5)) * sector_y_dist -100
            sectorValues[sectorDict["sec_angle"]][jj + ii * (zeileende - zeilestart)] = 0

            if (zeile == round((nSektorzeilenVonKugel-zeilenanzahl) / 2)):
                sectorValues[sectorDict["sec_neighbour_top"]][jj + ii * (zeileende - zeilestart)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_top"]][jj + ii * (zeileende - zeilestart)] = zeile + zeilenanzahl * ii - round((nSektorzeilenVonKugel-zeilenanzahl) / 2)-1

            if (ii == (spaltenanzahl-1)):
                sectorValues[sectorDict["sec_neighbour_right"]][jj + ii * (zeileende - zeilestart)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_right"]][jj + ii * (zeileende - zeilestart)] = zeile + zeilenanzahl * ii - round((nSektorzeilenVonKugel-zeilenanzahl) / 2) + zeilenanzahl

            if (zeile == (nSektorzeilenVonKugel-round((nSektorzeilenVonKugel-zeilenanzahl) / 2))-1):
                sectorValues[sectorDict["sec_neighbour_bottom"]][jj + ii * (zeileende - zeilestart)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_bottom"]][jj + ii * (zeileende - zeilestart)] = zeile + zeilenanzahl * ii - round((nSektorzeilenVonKugel-zeilenanzahl) / 2) +1

            if (ii == 0):
                sectorValues[sectorDict["sec_neighbour_left"]][jj + ii * (zeileende - zeilestart)] = -1
            else:
                sectorValues[sectorDict["sec_neighbour_left"]][jj + ii * (zeileende - zeilestart)] = zeile + zeilenanzahl * ii - round((nSektorzeilenVonKugel-zeilenanzahl) / 2) - zeilenanzahl



        jj=jj+1


    for ii in range(0,len(variablenamesSectors)):
        file.write(variablenamesSectors[ii]+"= [ ")
        for jj in range(0,anzahlDerSektoren):
            file.write(str( sectorValues[ii][jj])+', ')
        file.write("];\n")



    variablenamesGeodesics = ["x_Start", "y_Start", "x_End", "y_End", "startStrokeWidth", "startFill", "startStroke", "startParentSector", "startLineID"]
    geodesicDict = dict(zip(variablenamesGeodesics, range(len(variablenamesGeodesics))))

    geodesicValues = [[[] for ii in range(anzahlStartGeodesics)] for jj in range(len(variablenamesGeodesics))]

    for startGeodesic in range(0, anzahlStartGeodesics):
        geodesicValues[geodesicDict["x_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posx"]][zeilenanzahl - 1] + 0.3 * startGeodesic * sectorValues[sectorDict["sec_width"]][zeilenanzahl - 1] - 70
        geodesicValues[geodesicDict["y_Start"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][zeilenanzahl - 1] + 0.5 * startGeodesic * sectorValues[sectorDict["sec_height"]][zeilenanzahl - 1] -10
        geodesicValues[geodesicDict["x_End"]][startGeodesic] = sectorValues[sectorDict["sec_posx"]][zeilenanzahl - 1] + 0.3 * startGeodesic * sectorValues[sectorDict["sec_width"]][zeilenanzahl - 1]   -  20
        geodesicValues[geodesicDict["y_End"]][startGeodesic] = sectorValues[sectorDict["sec_posy"]][zeilenanzahl - 1] + 0.5 * startGeodesic * sectorValues[sectorDict["sec_height"]][zeilenanzahl - 1] -  50

        geodesicValues[geodesicDict["startParentSector"]][startGeodesic] = "["+str(zeilenanzahl - 1)+","+str(0)+"]"
        geodesicValues[geodesicDict["startLineID"]][startGeodesic] = "["+str(- 1)+","+str(- 1)+"]"
        geodesicValues[geodesicDict["startStrokeWidth"]][startGeodesic] = 2

        geodesicValues[geodesicDict["startFill"]][startGeodesic] = "line_colors["+str(startGeodesic)+"]"
        geodesicValues[geodesicDict["startStroke"]][startGeodesic] = "line_colors["+str(startGeodesic)+"]"

    for ii in range(0,len(variablenamesGeodesics)):
        file.write(variablenamesGeodesics[ii]+"= [ ")
        for jj in range(0,anzahlStartGeodesics):
            file.write(str( geodesicValues[ii][jj])+', ')
        file.write("];\n")

    file.write("startSector ="+str(zeilenanzahl-1)+";")

    file.close()





if (__name__=="__main__" or __name__=="builtins"):
    main()
    print("done_2")
