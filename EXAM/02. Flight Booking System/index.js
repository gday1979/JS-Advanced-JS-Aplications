class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    const existingFlight = this.flights.find((f) => f.flightNumber === flightNumber);
    if (existingFlight) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }

    this.flights.push({ flightNumber, destination, departureTime, price });
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    const flight = this.flights.find((f) => f.flightNumber === flightNumber);
    if (!flight) {
      return `Flight ${flightNumber} is not available for booking.`;
    }

    this.bookings.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    const bookingIndex = this.bookings.findIndex((b) => b.passengerName === passengerName && b.flightNumber === flightNumber);
    if (bookingIndex === -1) {
      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }

    this.bookings.splice(bookingIndex, 1);
    this.bookingsCount--;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    let filteredBookings = this.bookings;
    if (criteria === "cheap") {
      filteredBookings = filteredBookings.filter((b) => this.flights.find((f) => f.flightNumber === b.flightNumber).price <= 100);
      if (filteredBookings.length === 0) {
        return "No cheap bookings found.";
      }
    } else if (criteria === "expensive") {
      filteredBookings = filteredBookings.filter((b) => this.flights.find((f) => f.flightNumber === b.flightNumber).price > 100);
      if (filteredBookings.length === 0) {
        return "No expensive bookings found.";
      }
    }

    let result = "";
    if (criteria === "all") {
      result += `All bookings(${this.bookingsCount}):\n`;
    } else if (criteria === "cheap") {
      result += "Cheap bookings:\n";
    } else if (criteria === "expensive") {
      result += "Expensive bookings:\n";
    }

    filteredBookings.forEach((b) => {
      result += `${b.passengerName} booked for flight ${b.flightNumber}.\n`;
    });

    return result.trim();
}
}
  const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));

