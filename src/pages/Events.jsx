import React from "react";

export default function Events({ events = [] }) {
  // Dummy events to display if none are passed as props
  const dummyEvents = [
    {
      id: 1,
      title: "Web Dev Hackathon",
      date: "2025-07-08",
      location: "Hyderabad",
      technologies: ["React", "Python", "Node.js"],
      description: "Hands-on Experience on modern web development techniques.",
    },
  ];

  // Use the passed events or fall back to dummy events
  const displayedEvents = events.length > 0 ? events : dummyEvents;

  return (
    <div
      className="my-30 min-h-screen"
      style={{
        padding: "2rem",
        paddingTop: "5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 className="cursor-default" style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Upcoming Events
      </h1>

      {displayedEvents.length === 0 ? (
        <p className="cursor-default" style={{ fontSize: "1.2rem", color: "#999" }}>No Events</p>
      ) : (
        <div className="cursor-default" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              style={{
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{event.title}</h2>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              </p>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>Location:</strong> {event.location}
              </p>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>Technologies:</strong> {event.technologies.join(", ")}
              </p>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>Description:</strong> {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
