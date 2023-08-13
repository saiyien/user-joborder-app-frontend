<template>
    <div id="user-map" style="width: 100%; height: 500px;"></div>
</template>
  
<script>
export default {
    name: "UserDetailsMap",
    props: {
        user: Object, // Pass the user object as a prop
    },
    mounted() {
        //console.log("Received user data:", JSON.stringify(this.user, null, 4));
        //console.log("window.google:", JSON.stringify(window.google));

        // Check if the Google Maps API is available
        if (typeof window.google === "undefined") {
            console.error("Google Maps API is not available.");
            return;
        }
    },
    updated() {
        // Call the initMap method after the component is mounted
        // Initialize the map
        this.initMap();
    },
    methods: {
        initMap() {
            //console.log("\n>user : " + JSON.stringify(this.user));        

            // Calculate the average coordinates of pickup locations
            const totalPickups = this.user.jobOrders.length;
            let totalLat = 0;
            let totalLng = 0;

            this.user.jobOrders.forEach((jobOrder) => {
                totalLat += jobOrder.pickup.latitude;
                totalLng += jobOrder.pickup.longitude;
            });

            const averageLat = totalLat / totalPickups;
            const averageLng = totalLng / totalPickups;

            const mapOptions = {
                center: { lat: averageLat, lng: averageLng },
                zoom: 17,
            };

            const map = new google.maps.Map(document.getElementById("user-map"), mapOptions);

            // Add job order markers and connecting line
            this.user.jobOrders.forEach((jobOrder) => {
                new google.maps.Marker({
                    position: { lat: jobOrder.pickup.latitude, lng: jobOrder.pickup.longitude },
                    map,
                    title: "Pickup: " + jobOrder.pickup.address,
                });

                new google.maps.Marker({
                    position: { lat: jobOrder.dropoff.latitude, lng: jobOrder.dropoff.longitude },
                    map,
                    title: "Dropoff: " + jobOrder.dropoff.address,
                });

                // Create a line to connect pickup and dropoff
                new google.maps.Polyline({
                    path: [
                        { lat: jobOrder.pickup.latitude, lng: jobOrder.pickup.longitude },
                        { lat: jobOrder.dropoff.latitude, lng: jobOrder.dropoff.longitude },
                    ],
                    map,
                    strokeColor: "#FF0000", // Red color
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });
            });
        },
    },
};
</script>
  
<style>
.map-container {
    width: 100%;
    height: 500px;
}
</style>
  