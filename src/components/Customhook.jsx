 export const Customhook=(props)=> {
    const quotes = [
        { id: 1, quote: "The only way to do great work is to love what you do." },
        { id: 2, quote: "Success is not the key to happiness. Happiness is the key to success." },
        { id: 3, quote: "The harder you work for something, the greater you'll feel when you achieve it." },
        { id: 4, quote: "Believe in yourself and all that you are." },
        { id: 5, quote: "The best way to predict the future is to create it." },
        { id: 6, quote: "Don’t watch the clock; do what it does. Keep going." },
        { id: 7, quote: "Success is the sum of small efforts, repeated day in and day out." },
        { id: 8, quote: "It always seems impossible until it’s done." },
        { id: 9, quote: "Opportunities don't happen, you create them." },
        { id: 10, quote: "Don’t wait for opportunity. Create it." },
        { id: 11, quote: "You are never too old to set another goal or to dream a new dream." },
        { id: 12, quote: "Success is not in what you have, but who you are." },
        { id: 13, quote: "The future belongs to those who believe in the beauty of their dreams." },
        { id: 14, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
        { id: 15, quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart." },
        { id: 16, quote: "Everything you’ve ever wanted is on the other side of fear." },
        { id: 17, quote: "You don't have to be great to start, but you have to start to be great." },
        { id: 18, quote: "You miss 100% of the shots you don’t take." },
        { id: 19, quote: "Act as if what you do makes a difference. It does." },
        { id: 20, quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently." },
        { id: 21, quote: "If you can dream it, you can do it." },
        { id: 22, quote: "Don’t be afraid to give up the good to go for the great." },
        { id: 23, quote: "The only limit to our realization of tomorrow is our doubts of today." },
        { id: 24, quote: "Do what you can with all you have, wherever you are." },
        { id: 25, quote: "The road to success and the road to failure are almost exactly the same." },
        { id: 26, quote: "It does not matter how slowly you go as long as you do not stop." },
        { id: 27, quote: "Success is the progressive realization of a worthy goal or ideal." },
        { id: 28, quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
        { id: 29, quote: "The only way to achieve the impossible is to believe it is possible." },
        { id: 30, quote: "Start where you are. Use what you have. Do what you can." },
        { id: 31, quote: "Hardships often prepare ordinary people for an extraordinary destiny." },
        { id: 32, quote: "The only thing standing between you and your goal is the story you keep telling yourself." },
        { id: 33, quote: "You don’t have to be perfect to be amazing." },
        { id: 34, quote: "The way to get started is to quit talking and begin doing." },
        { id: 35, quote: "Success usually comes to those who are too busy to be looking for it." },
        { id: 36, quote: "You can’t go back and change the beginning, but you can start where you are and change the ending." },
        { id: 37, quote: "The best time to plant a tree was 20 years ago. The second best time is now." },
        { id: 38, quote: "Don’t limit your challenges, challenge your limits." },
        { id: 39, quote: "Hard work beats talent when talent doesn’t work hard." },
        { id: 40, quote: "Push yourself, because no one else is going to do it for you." },
        { id: 41, quote: "Success is not about how high you have climbed, but how you make a positive difference to the world." },
        { id: 42, quote: "Don’t stop when you’re tired. Stop when you’re done." },
        { id: 43, quote: "Your limitation—it’s only your imagination." },
        { id: 44, quote: "Great things never come from comfort zones." },
        { id: 45, quote: "Dream it. Wish it. Do it." },
        { id: 46, quote: "Success doesn’t just find you. You have to go out and get it." }]
       
    
  // Find the quote with the matching ID
  const selectedQuote = quotes.find((quote) => quote.id === props.value);

  // Return the quote or a default message if not found
  return selectedQuote ? (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#9F7AEA' }}>{selectedQuote.quote}</h2>
    </div>
  ) : null;
}

