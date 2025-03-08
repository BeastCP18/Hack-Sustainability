let floorImage = document.getElementById('floorImage');
floorImage.src = 'First Floor.jpg';

document.getElementById('floor1').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'First Floor.jpg';
});

document.getElementById('floor2').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'Second Floor.jpg';
});

document.getElementById('floor3').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'Third Floor.jpg';
});