import * as THREE from "three";
import { bannerNameArray } from "../game.js";

var texture1 = new THREE.TextureLoader().load('../static/texture/banner.jpg');
texture1.flipY = false;
texture1.minFilter = THREE.LinearFilter;



let glassColor = new THREE.Color(0x575757);
const wallGlassMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5, color: glassColor });
const banner1_material = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });

const UpdateMaterial = (object) => {

    let type;
    switch (object.material.name) {
        case 'b1':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b5':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'b1.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B5':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
            
        case 'b1.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b5.009':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'b1.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'B5.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'b1.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b5.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'b1.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b2.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b3.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b4.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b5.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'b6.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;





        /*------------------------------------*/
        case 'hoarding1':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding2':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding3':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding4':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding5':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding6':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        default:
            break;
    }



}

export { UpdateMaterial }