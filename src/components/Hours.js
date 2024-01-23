import "../styling/Hours.css";

export default function Hours() {
    return(
        <div>
            <h2 className="hours">Hours of Operation</h2>
            <ul className="hours">
                <li>Monday-Friday ~ 4pm to 8pm</li>
                <li>Saturday ~ 10am to 8pm</li>
                <li>Sunday ~ Closed</li>
            </ul>
            
        </div>
    );
}
