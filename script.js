
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }}
        
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");


        var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx3JZTIGwZgY6uiZ2PrkmiIqvnumn4YeUI7VPlhNKHVbYFcFZv_Vfiw8rX_96OWWQA3/exec'
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {

            e.preventDefault()

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})

                .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
    