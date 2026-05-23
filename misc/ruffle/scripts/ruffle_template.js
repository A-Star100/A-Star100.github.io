        let player;

        document.addEventListener("DOMContentLoaded", function () {
            const ruffle = window.RufflePlayer.newest();
            player = ruffle.createPlayer();
            const container = document.getElementById("flash-content");
            container.appendChild(player);
            player.load("ultimateflashsonic.swf");
        });

        function playAgain() {
            if (player) {
                player.load("ultimateflashsonic.swf");
            }
        }
