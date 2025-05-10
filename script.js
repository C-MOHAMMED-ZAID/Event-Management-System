    document.addEventListener('DOMContentLoaded', function() {
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseover', function() {
                const cells = this.querySelectorAll('td');
                const time = cells[0].innerText; 
                const topic = cells[1].innerText; 
                const speaker = cells[2].innerText; 
                
                alert('Time: ' + time + '\nTopics: ' + topic + '\nSpeakers: ' + speaker);
            });
        });
    });


    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

     
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        
        alert('Submitted Data:\n' +
              'Name: ' + name + '\n' +
              'Email: ' + email + '\n' +
              'Phone No: ' + phone + '\n' +
              'Address: ' + address);
        
        
        this.reset();
    });

