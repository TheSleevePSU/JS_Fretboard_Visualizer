desc: Guitar/Bass Fretboard Display by Brett Gildersleeve

// MIDI-only effect
in_pin:none
out_pin:none

//***slider1: 0 <0, 16, 1> midi in channel (0 = all channels)
//***quieter notes decay a little faster than this
//***slider3: 36 <21, 108, 1> lowest note (middle-C = 60)
//***slider4: 96 <21, 108, 1> highest note

slider1:64<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 1 note
slider2:59<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 2 note
slider3:55<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 3 note
slider4:50<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 4 note
slider5:45<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 5 note
slider6:40<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 6 note
slider7:35<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 7 note
slider8:30<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>String 8 note
slider9:24<5,24,1>Number of frets
slider10:6<2,8,1>Number of strings
slider11:0<0,1,1>Display all octaves
slider12:0<0,1,1>Display scale degrees
slider13:0<0,24,1>Lowest fret
slider14:24<0,24,1>Highest fret
slider15:8<1,8,1>Lowest string
slider16:1<0,24,1>Highest string
slider17:0<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>Lowest note
slider18:127<0,127,1{0: C0,1: C#0,2: D0,3: Eb0,4: E0,5: F0,6: F#0,7: G0,8: G#0,9: A0,10: Bb0,11: B0,12: C1,13: C#1,14: D1,15: Eb1,16: E1,17: F1,18: F#1,19: G1,20: G#1,21: A1,22: Bb1,23: B1,24: C2,25: C#2,26: D2,27: Eb2,28: E2,29: F2,30: F#2,31: G2,32: G#2,33: A2,34: Bb2,35: B2,36: C3,37: C#3,38: D3,39: Eb3,40: E3,41: F3,42: F#3,43: G3,44: G#3,45: A3,46: Bb3,47: B3,48: C4,49: C#4,50: D4,51: Eb4,52: E4,53: F4,54: F#4,55: G4,56: G#4,57: A4,58: Bb4,59: B4,60: C5,61: C#5,62: D5,63: Eb5,64: E5,65: F5,66: F#5,67: G5,68: G#5,69: A5,70: Bb5,71: B5,72: C6,73: C#6,74: D6,75: Eb6,76: E6,77: F6,78: F#6,79: G6,80: G#6,81: A6,82: Bb6,83: B6,84: C7,85: C#7,86: D7,87: Eb7,88: E7,89: F7,90: F#7,91: G7,92: G#7,93: A7,94: Bb7,95: B7,96: C8,97: C#8,98: D8,99: Eb8,100: E8,101: F8,102: F#8,103: G8,104: G#8,105: A8,106: Bb8,107: B8,108: C9,109: C#9,110: D9,111: Eb9,112: E9,113: F9,114: F#9,115: G9,116: G#9,117: A9,118: Bb9,119: B9,120: C10,121: C#10,122: D10,123: Eb10,124: E10,125: F10,126: F#10,127: G10}>Highest note
slider19: 1 <0, 10, 0.1> note decay time (seconds)
slider20: 0 <0, 16, 1> midi in channel (0 = all channels)

@init
gfx_mode = 1;      // draw in additive mode
graphicsCPS = 30;    // # of times the graphics code runs per second
minBrightness = 0.03;    // the brightness at which the note disappears
numOfFrets = 24;
numOfStrings = 6;
displayAllOctaves = 0;
displayScaleDegrees = 0;
lowestFret = 0;
highestFret = 24;
lowestString = 8;
highestString = 1;
lowestNote = 0;
highestNote = 127;
myDegree = 0;
Veloc = 128;      // velocity of each of the 128 midi notes
memset (Veloc, 0, 128);
Brightness = 128;    // brightness of each of the 128 midi notes
memset (Brightness, 0, 128);

Colors = 256;      // RGB colors of each of the 12 notes
Colors [0] = 1;    Colors [1] = 0;    Colors [2] = 0; 
Colors [3] = 1;    Colors [4] = 0.5;  Colors [5] = 0; 
Colors [6] = 1;    Colors [7] = 1;    Colors [8] = 0; 
Colors [9] = 0.33;  Colors [10] = 0.66;  Colors [11] = 0; 
Colors [12] = 0;  Colors [13] = 1;  Colors [14] = 0; 
Colors [15] = 0;  Colors [16] = 0.66;  Colors [17] = 0.66; 
Colors [18] = 0;  Colors [19] = 1;  Colors [20] = 1; 
Colors [21] = 0;  Colors [22] = 0.5;  Colors [23] = 1; 
Colors [24] = 0;  Colors [25] = 0;  Colors [26] = 1; 
Colors [27] = 0.5;  Colors [28] = 0;  Colors [29] = 1; 
Colors [30] = 1;  Colors [31] = 0;  Colors [32] = 1; 
Colors [33] = 1;  Colors [34] = 0;  Colors [35] = 0.5;

StringStartNotes = 8;
StringStartNotes[0] = slider1;
StringStartNotes[1] = slider2;
StringStartNotes[2] = slider3;
StringStartNotes[3] = slider4;
StringStartNotes[4] = slider5;
StringStartNotes[5] = slider6;
StringStartNotes[6] = slider7;
StringStartNotes[7] = slider8;

@slider
slider19 == 0 ? fadeRate = 0
: fadeRate = minBrightness ^ (1 / (graphicsCPS * slider19));

numOfFrets = slider9;
numOfStrings = slider10;
displayAllOctaves = slider11;
displayScaleDegrees = slider12;
lowestFret = slider13;
highestFret = slider14;
lowestString = slider15;
highestString = slider16;
lowestNote = slider17;
highestNote = slider18;

@block
while (midirecv (blockOffset, status, databytes)) (
   msgNum = (status & 240) / 16;                 // message # portion of the status byte
   channelNum = status & 15;        // channels 1-16 are really 0-15
   note = CCnum = LSB = databytes & 127;      // LSB = least significant byte
   velocity = CCvalue = MSB = (databytes / 256) | 0;  // MSB = most significant byte
   velocity != 0 ? ( velocity = 127; );
   msgNum == 8 ? ( velocity = 0; );
   (msgNum == 9 || msgNum == 8) ? ( //Note on or off message?
     displayAllOctaves == 0 ? (
       Veloc [note] = velocity;  // store the velocity
       velocity != 0 ? (
         Brightness[note] = 1;
       );
     );
     displayAllOctaves == 1 ? (
       myDegree = note % 12;
       myOctave = 0;
       while (myOctave <= 9) (
         Veloc [myDegree + 12*myOctave] = velocity;
         velocity != 0 ? (
           Brightness[myDegree + 12*myOctave] = 1;
         );
         myOctave += 1;
       );
     );
   );
   midisend (blockOffset | 0, (16 * msgNum + channelNum) | 0, databytes | 0);
);

@gfx 600 400

gfx_r = 1;
gfx_g = 1;
gfx_b = 1;
gfx_a = 1;

stringSpacing = 20;
fretSpacing = 20;
fretOffset = fretSpacing / 2;
nutX = 20;
topStringY = 20;

string = 0;
fret = 0;

while ( string < numOfStrings )(
  gfx_line(nutX, topStringY + (string * stringSpacing), nutX + 2 * fretOffset + (numOfFrets * fretSpacing), topStringY + (string * stringSpacing));
  string += 1;
);
while ( fret <= numOfFrets )(
  gfx_line(nutX + fretOffset + (fret * fretSpacing), topStringY, nutX + fretOffset + (fret * fretSpacing), topStringY + ((numOfStrings - 1) * stringSpacing));
  fret += 1;
);

dotY = topStringY + (stringSpacing * (numOfStrings - 1))/2;
ddtY = topStringY + (stringSpacing / 2);
ddbY = topStringY + (stringSpacing * (numOfStrings - 1.5));

gfx_circle(nutX + ( 3 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + ( 5 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + ( 7 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + ( 9 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + (12 * fretSpacing), ddtY, 3, 1);
gfx_circle(nutX + (12 * fretSpacing), ddbY, 3, 1);
gfx_circle(nutX + (15 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + (17 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + (19 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + (21 * fretSpacing), dotY, 3, 1);
gfx_circle(nutX + (24 * fretSpacing), ddtY, 3, 1);
gfx_circle(nutX + (24 * fretSpacing), ddbY, 3, 1);

string = 0;
fret = 0;
gfx_x = nutX;
gfx_y = topStringY;

while ( string < numOfStrings )(
  noteToDraw = StringStartNotes[string];
  topNoteOnString = noteToDraw + numOfFrets;
  fret = 0;
  while ( noteToDraw <= topNoteOnString ) (
    gfx_r = Colors [3 * (noteToDraw % 12)];    // look up this note's color
    gfx_g = Colors [3 * (noteToDraw % 12) + 1];
    gfx_b = Colors [3 * (noteToDraw % 12) + 2];
    Veloc [noteToDraw] == 0 && Brightness [noteToDraw] > 0 ? (  // unplayed note not fully decayed yet?
    Brightness [noteToDraw] *= fadeRate;    // fade it out
    Brightness [noteToDraw] < minBrightness ? Brightness [noteToDraw] = 0;
    );
    Brightness [noteToDraw] > 0 ? (
    gfx_r *= Brightness [noteToDraw];      // dim the color to match the brightness
    gfx_g *= Brightness [noteToDraw];
    gfx_b *= Brightness [noteToDraw];
    gfx_circle (gfx_x + (fret * fretSpacing), gfx_y + (string * stringSpacing), 8, 1);// draw the dot
    );
    noteToDraw += 1;
    fret += 1;
  );
  string += 1;
);