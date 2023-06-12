import * as THREE from "three";
import { positionGUI, scaleGUI } from "../common/CommonFunction.js";
import { objectArray, scene } from "../game.js";

let glassColor = new THREE.Color(0x575757);
let glassOpacity = 0.4;
const UpdateMesh = (gui) => {

    let glassObjectsNames = ['Mesh347_1', 'Mesh063_1','Geill'];
    glassObjectsNames.map(item => {
        let glassObject = scene.getObjectByName(item);
        glassObject.material.transparent = true;
        glassObject.material.opacity = glassOpacity;
    })
    let collider = scene.getObjectByName("collider");
    collider.material.transparent = true;
    collider.material.opacity = 0;

    let fountain = scene.getObjectByName("FOUNTAIN_water002");
    fountain.material.color = new THREE.Color(0x0199D4);
    fountain.material.transparent = true;
    fountain.material.opacity = 0.7;
}

const addObjectToArray = (object) => {
    switch (object.material.name) {
        case 'vray_Tree_1':
            break;
        case 'vray_Trees_2':
            break;
        case 'vray_Trees_3':
            break;
        default:
            objectArray.push(object);
            break;
    }
}
export { UpdateMesh, addObjectToArray }
