 // Create flying meme coins
        function createFlyingCoins() {
            const coinImages = [
                '🪙', '💰', '💎', '👑', '🚀', '💸', '🤑', '💲'
            ];
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const coin = document.createElement('div');
                    coin.className = 'meme-coin';
                    coin.textContent = coinImages[Math.floor(Math.random() * coinImages.length)];
                    coin.style.left = `${Math.random() * 100}px`;
                    coin.style.top = `${Math.random() * 100}px`;
                    coin.style.animationDelay = `${Math.random() * 5}s`;
                    coin.style.fontSize = `${Math.random() * 30 + 20}px`;
                    document.body.appendChild(coin);
                    
                    // Remove coin after animation completes
                    setTimeout(() => {
                        coin.remove();
                    }, 15000);
                }, i * 2000);
            }
        }
        
        // Create confetti effect
        function createConfetti() {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = `${Math.random() * 100}vw`;
                    confetti.style.width = `${Math.random() * 10 + 5}px`;
                    confetti.style.height = `${Math.random() * 10 + 5}px`;
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                    document.body.appendChild(confetti);
                    
                    // Remove confetti after animation completes
                    setTimeout(() => {
                        confetti.remove();
                    }, 3000);
                }, i * 30);
            }
        }
        
        // Copy contract address
        function copyContract() {
            const contractAddress = document.getElementById('contractAddress');
            const notification = document.getElementById('notification');
            
            navigator.clipboard.writeText(contractAddress.textContent).then(() => {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            });
        }
        
        // Simulate price updates (in a real app, you'd fetch this from an API)
        function updatePrice() {
            const price = document.getElementById('price');
            const marketcap = document.getElementById('marketcap');
            const volume = document.getElementById('volume');
            const holders = document.getElementById('holders');
            
            // Generate random but increasing values
            const currentPrice = parseFloat(price.textContent.replace('$', '')) || 0.0001;
            const newPrice = currentPrice + (Math.random() * 0.0001 - 0.00005);
            price.textContent = '$' + newPrice.toFixed(4);
            
            marketcap.textContent = '$' + Math.floor(newPrice * 1000000000).toLocaleString();
            volume.textContent = '$' + Math.floor(Math.random() * 100000 + 50000).toLocaleString();
            holders.textContent = Math.floor(Math.random() * 1000 + 500);
            
            setTimeout(updatePrice, 3000);
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createFlyingCoins();
            setInterval(createFlyingCoins, 15000);
            
            // Create confetti when buttons are clicked
            document.querySelectorAll('.cta-button').forEach(button => {
                button.addEventListener('click', createConfetti);
            });
            
            // Start price updates
            updatePrice();
        });
