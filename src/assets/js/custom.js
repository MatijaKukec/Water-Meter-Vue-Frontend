document.addEventListener("DOMContentLoaded", function () {
    var count = 0;
    const notifications = document.getElementById("notifications");
    var newContent;
    console.log(notifications);
    if (count === 0) {
        newContent = `
                  <a class="dropdown-item preview-item">
                    <div class="preview-item-content p-2">
                      <p class="preview-subject mb-1">Nema novih alarma</p>
                      <p class="text-muted ellipsis mb-0"><time class="timeago"></time></p>
                    </div>
                  </a>
			      <div class="dropdown-divider"></div>
                `;
	    notifications.insertAdjacentHTML("afterend", newContent);
    }
    function newNotification(text) {
        let countSpan = notificationDropdown.querySelector(".count");

        if (!countSpan) {
            countSpan = document.createElement("span");
            countSpan.classList.add("count", "bg-danger");
            notificationDropdown.appendChild(countSpan);
        }

        count++;
        countSpan.textContent = count;

        newContent = `
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-calendar text-success"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject mb-1">${text}</p>
                      <p class="text-muted ellipsis mb-0">${jQuery.timeago(new Date())}</p>
                    </div>
                  </a>
			      <div class="dropdown-divider"></div>
                `;
	    notifications.insertAdjacentHTML("afterend", newContent);
    };
});