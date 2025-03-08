let floorImage = document.getElementById('floorImage');
floorImage.src = 'Map of Gonzaga.jpg';

document.getElementById('floor1').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'Map of Gonzaga.jpg';
});

document.getElementById('floor2').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'Magic the Gathering.webp';
});

document.getElementById('floor3').addEventListener('click', function() {
    document.getElementById('floorImage').src = 'Web Diplomacy.png';
});