import Notificationlines from "../Layout/notification-content/notification-lines";

function Notifications() {
    return (
    <div><h1>Notifications</h1>
    <div>
        <button>Mark read</button>
        <button>Mark read</button>
    </div>

    <div className="table-container">
        <table class="info box">
            <th><input type="checkbox" /></th>
            <th>Notification</th>
            <th>Ticket#</th>
            <th>Date</th>
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
            <Notificationlines />
        </table>
        
    </div>

    </div>
  )};

  export default Notifications;