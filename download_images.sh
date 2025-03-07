#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Download placeholder images
curl -o images/hero-bg.jpg "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200"
curl -o images/general-dentistry.jpg "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"
curl -o images/cosmetic-dentistry.jpg "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
curl -o images/root-canal.jpg "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"
curl -o images/dental-implants.jpg "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800"
curl -o images/emergency-dental.jpg "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800"
curl -o images/children-dentistry.jpg "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"

# Team member images
curl -o images/dr-john-thomas.jpg "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
curl -o images/dr-emma-muscat.jpg "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
curl -o images/dr-carmen-manzie.jpg "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400"
curl -o images/dr-mischa-dummel.jpg "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"

# Logo
curl -o images/logo.png "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=200"
