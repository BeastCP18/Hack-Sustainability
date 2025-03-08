var floorImage1 = new Image();
floorImage.src = 'images/floor1.png';

var FloorImage2 = new Image();
FloorImage2.src = 'images/floor2.png';

var FloorImage3 = new Image();
FloorImage3.src = 'images/floor3.png';

document.getElementById('floor1').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'images/FirstFloor.jpg';
});

document.getElementById('floor2').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'images/SecondFloor.jpg';
});

document.getElementById('floor3').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'images/ThirdFloor.jpg';
});