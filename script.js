window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');

    // Move each layer at a different speed
    layer1.style.transform = `translateY(${scrollY * 0.3}px)`;
    layer2.style.transform = `translateY(${scrollY * 0.6}px)`;
    layer3.style.transform = `translateY(${scrollY * 0.1}px)`;

  });

 window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const resultsDiv = document.getElementById('results');

  fetch('almostdear.json')
    .then(response => response.json())
    .then(data => {
      searchInput.addEventListener('input', () => {
        console.log('Loaded messages:', data);
        const keyword = searchInput.value.toLowerCase();
        const matches = data.filter(msg =>
          msg.text && msg.text.toLowerCase().includes(keyword)
        );

        resultsDiv.innerHTML = '';
        matches.forEach(msg => {
          const div = document.createElement('div');
          div.innerHTML = `<strong>${msg.timestamp}(${msg.sender})</strong>: ${msg.text}`;
          resultsDiv.appendChild(div);
        });
      });
    })
    .catch(error => {
      console.error('Failed to load messages:', error);
    });

});
 

