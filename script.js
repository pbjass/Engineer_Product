

async function generateComic() {
    
    const deepai = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: { 
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                "Content-Type": "application/json" 
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    for (let i = 1; i <= 10; i++) {
        const panelText = document.getElementById(`panel${i}`).value;

        if (!panelText.trim()) {
            alert('Please enter text in the first panel before generating the comic.');
            return;

        }
        const data = await resp.json();
       

    query({"inputs": panelText}).then((response) => {
            // Use image
            const comicOutput = document.getElementById('comicOutput');
            comicOutput.innerHTML = `<img src="${data.image_url}" alt="Generated Comic">`;
        }); 
    }
}