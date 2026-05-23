        let player;

        document.addEventListener("DOMContentLoaded", function () {
            const ruffle = window.RufflePlayer.newest();
            player = ruffle.createPlayer();
            const container = document.getElementById("flash-content");
            container.appendChild(player);
            player.load("https://uploads.ungrounded.net/151000/151706_ultimate_sonic.swf");
        });

        function playAgain() {
            if (player) {
                player.load("https://uploads.ungrounded.net/151000/151706_ultimate_sonic.swf");
            }
        }
