        let player;
        window.RufflePlayer = window.RufflePlayer || {};
        window.RufflePlayer.config = {
            // force ruffle to do 4:3 properly to prevent stupid scaling
            // to 16:9 since game breaks there cuz it is from 2004
            letterbox: "on"
        }

        document.addEventListener("DOMContentLoaded", function () {
            const ruffle = window.RufflePlayer.newest();
            player = ruffle.createPlayer();
            const container = document.getElementById("flash-content");
            container.appendChild(player);
            player.load("/misc/ruffle/swf/ultimate_sonic.swf");
        });

        function playAgain() {
            if (player) {
                player.load("/misc/ruffle/swf/ultimate_sonic.swf");
            }
        }
