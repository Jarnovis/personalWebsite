document.addEventListener("DOMContentLoaded", function() {
    function updateAge() {
        const facts = ["Banging your head against a wall for one hour burns 150 calories",
        "In Switzerland, it is illegal to own just one guinea pig",
        "The color orange was actually named after oranges",
        "Snakes can predict earthquakes",
        "Crows often hold grudges against specific people",
        "The oldest “your mom” joke was discovered on a 3,500-year-old Babylonian tablet",
        "May 29 is officially “Put a Pillow on Your Fridge Day",
        "Cherophobia is the irrational fear of fun or happiness",
        "7% of American adults believe that chocolate milk comes from brown cows",
        'If Pinocchio said, “My Nose Will Grow Now,” it would create a paradox',
        "Car manufacturer Volkswagen makes sausages",
        "Hawaiian pizza is a Canadian invention",
        "Most people fart around 14 to 23 times a day",
        "The longest English word is 189 819 letters long",
        "Alexander the Great was accidentally buried alive",
        "The world’s most successful pirate in history was a lady named Ching Shih. She was a prostitute in China until the Commander of the Red Flag Fleet bought and married her"];
                    
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("facts").innerText = randomFact;
        console.log(randomFact);
    };
    
    
    updateAge();
    setInterval(updateAge, 6000);
});


