import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.category}>Category: {event.category}</Text>
      <Text style={styles.distance}>Distance: {event.distance} km</Text>
      <Text style={styles.reviews}>Rating: ⭐ {event.reviews}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    marginTop: 5,
    color: "#555",
  },
  distance: {
    marginTop: 5,
    color: "#888",
  },
  reviews: {
    marginTop: 5,
    color: "#444",
  },
});

export default EventCard;
