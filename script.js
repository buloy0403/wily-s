const reviews = [
    {
      name: "John Doe",
      text: `"Wily's Ice Cream is absolutely delicious! My favorite is the Mango Sorbet, refreshing and creamy!"`
    },
    {
      name: "Jane Smith",
      text: `"The Classic of flavors at Wily's is amazing! I love trying new ones each time I visit."`
    },
    {
      name: "Michael Lee",
      text: `"Best Cokies and Cream ice cream ever. It's my go-to treat."`
    },
    {
      name: "Sophia Brown",
      text: `"The Salted Egg flavor is a game-changer!"`
    },
    {
      name: "Lucas Williams",
      text: `"Cheese Langka is delicious. Love that it's sugar-free!"`
    }
  ];
  
  let current = 0;
  
  function showReview(index) {
    document.getElementById('review-name').textContent = reviews[index].name;
    document.getElementById('review-text').textContent = reviews[index].text;
  }
  
 
  showReview(current);
  

  setInterval(() => {
    current = (current + 1) % reviews.length;
    showReview(current);
  }, 4000);
  