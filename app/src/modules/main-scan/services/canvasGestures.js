'use strict';

var servicesModule = require('./index');

servicesModule.factory('CanvasGesturesService', FactoryDefinition);

function FactoryDefinition(){
    var api, transform, ticking, el;

    initialize();

    api = {
        bindEventHandlers: bindEventHandlers,
        initialize: initialize
    };

    return api;

    function initialize() {
        ticking = false;
        transform = resetTransform();
        requestElementUpdate({});
    }

    function bindEventHandlers(element){
        el = element;

        ionic.onGesture('drag', onDragEvent, el);
        ionic.onGesture('dragend', onDragEndEvent, el);
        ionic.onGesture('pinch', onPinch, el);
    }

    function onDragEvent(ev) {
        var initial = {
            x: transform.translate.x,
            y: transform.translate.y
        };

        // ev.gesture.stopPropagation();

        if (ev.gesture.touches.length === 1) {                
            initial.x += ev.gesture.deltaX;
            initial.y += ev.gesture.deltaY;

            requestElementUpdate(initial);
        }
    }

    function onDragEndEvent(ev) {
        transform.translate.x += ev.gesture.deltaX;
        transform.translate.y += ev.gesture.deltaY;
        transform.translate.z += ev.gesture.deltaZ;
    }

    function requestElementUpdate(custom) {
        if(!ticking) {
            ionic.requestAnimationFrame(updateElementTransform.bind(null, custom));
            ticking = true;
        }
    }

    function updateElementTransform(custom){
        var x, y, z, scale, rx, ry, rz, angle, value;

        x = custom.x || transform.translate.x;
        y = custom.y || transform.translate.y;
        z = 0;

        scale = custom.scale || transform.scale;

        rx = custom.rx || transform.rotate.rx;
        ry = custom.ry || transform.rotate.ry;
        rz = custom.rz || transform.rotate.rz;
        angle = custom.angle || transform.rotate.angle;

        value = [
            'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)',
            'scale(' + scale + ', ' + scale + ')',
            'rotate3d('+ rx +','+ ry +','+ rz +','+  angle + 'deg)'
        ];

        value = value.join(" ");
        el.style[ionic.CSS.TRANSFORM] = value;
        ticking = false;
    }

    function onPinch(ev) {
    }

    function resetTransform(){
        return {
            translate: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 1,
            rotate: {
                rx: 0,
                ry: 0,
                rz: 0,
                angle: 0
            }
        };
    }
}