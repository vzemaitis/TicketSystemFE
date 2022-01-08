import Notificationlines from "../Layout/notification-content/notification-lines";

function Notifications() {
    return (
    <div class="">
        <h2 class="mt-4 ms-n">Notifications</h2>
            <div class="d-grid d-md-block">
                <button class="btn btn-outline-primary me-1 ms-1" type="button">Mark read</button>
                <button class="btn btn-outline-primary me-1 ms-1" type="button">Mark unread</button>
            </div>

    <div className="table-container">
        <table className="info box" class="table m-1">
            <thead>
                <tr>
                    <th class="col"><input type="checkbox" /></th>
                    <th class="col">Notification</th>
                    <th class="col">Ticket#</th>
                    <th class="col">Date</th>
                </tr>
            </thead>
            <tbody>
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
                <Notificationlines />
                <Notificationlines />
                <Notificationlines />
            </tbody>
        </table>
        
    </div>

    </div>
  )};

  export default Notifications;