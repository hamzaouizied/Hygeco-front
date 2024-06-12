<script setup>
// import { onBeforeUnmount, onMounted } from "vue";

// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction"; 

// let calendar;

// const props = defineProps({
//   id: {
//     type: String,
//     default: "widget-calendar",
//   },
//   title: {
//     type: String,
//     default: "",
//   },
//   day: {
//     type: String,
//     default: "",
//   },
//   year: {
//     type: String,
//     default: "",
//   },
//   initialView: {
//     type: String,
//     default: "dayGridMonth",
//   },
//   initialDate: {
//     type: String,
//     default: "2020-12-01",
//   },
//   events: {
//     type: Array,
//     default: () => [
//       {
//         title: "Call with Dave",
//         start: "2020-11-18",
//         end: "2020-11-18",
//         className: "bg-gradient-danger",
//       },
//       {
//         title: "Lunch meeting",
//         start: "2020-11-21",
//         end: "2020-11-22",
//         className: "bg-gradient-warning",
//       },
//       {
//         title: "All day conference",
//         start: "2020-11-29",
//         end: "2020-11-29",
//         className: "bg-gradient-success",
//       },
//       {
//         title: "Meeting with Mary",
//         start: "2020-12-01",
//         end: "2020-12-01",
//         className: "bg-gradient-info",
//       },
//       {
//         title: "Winter Hackaton",
//         start: "2020-12-03",
//         end: "2020-12-03",
//         className: "bg-gradient-danger",
//       },
//       {
//         title: "Digital event",
//         start: "2020-12-07",
//         end: "2020-12-09",
//         className: "bg-gradient-warning",
//       },
//       {
//         title: "Marketing event",
//         start: "2020-12-10",
//         end: "2020-12-10",
//         className: "bg-gradient-success",
//       },
//       {
//         title: "Dinner with Family",
//         start: "2020-12-19",
//         end: "2020-12-19",
//         className: "bg-gradient-danger",
//       },
//       {
//         title: "Black Friday",
//         start: "2020-12-23",
//         end: "2020-12-23",
//         className: "bg-gradient-info",
//       },
//       {
//         title: "Cyber Week",
//         start: "2020-12-02",
//         end: "2020-12-02",
//         className: "bg-gradient-warning",
//       },
//     ],
//   },
//   selectable: {
//     type: Boolean,
//     default: true,
//   },
//   editable: {
//     type: Boolean,
//     default: true,
//   },
// });

// onMounted(() => {
//   calendar = new Calendar(document.getElementById(props.id), {
//     contentHeight: "auto",
//     plugins: [dayGridPlugin, interactionPlugin], 
//     initialView: props.initialView,
//     selectable: props.selectable,
//     editable: props.editable,
//     events: props.events,
//     initialDate: props.initialDate,
//     headerToolbar: {
//       start: "title", 
//       center: "",
//       end: "today prev,next", 
//     },
//     views: {
//       month: {
//         titleFormat: {
//           month: "long",
//           year: "numeric",
//         },
//       },
//       agendaWeek: {
//         titleFormat: {
//           month: "long",
//           year: "numeric",
//           day: "numeric",
//         },
//       },
//       agendaDay: {
//         titleFormat: {
//           month: "short",
//           year: "numeric",
//           day: "numeric",
//         },
//       },
//     },
//     dateClick: (info) => { 
//       const date = info.dateStr;
//       const availableTimeSlots = [
//         { start: "09:00", end: "09:30" },
//         { start: "09:30", end: "10:00" },
//         { start: "10:00", end: "10:30" },
//         { start: "10:30", end: "11:00" },
//         { start: "11:00", end: "11:30" },
//         { start: "11:30", end: "12:00" },
//         { start: "12:00", end: "12:30" },
//         { start: "12:30", end: "13:00" },
//         { start: "13:00", end: "13:30" },
//         { start: "13:30", end: "14:00" },
//         { start: "14:00", end: "14:30" },
//         { start: "14:30", end: "15:00" },
//         { start: "15:00", end: "15:30" },
//         { start: "15:30", end: "16:00" },
//       ];

//       const timeSlotModal = `
//         <div class="modal" id="time-slot-modal">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title">Available Time Slots for ${date}</h5>
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div class="modal-body">
//                 <ul>
//                   ${availableTimeSlots.map((timeSlot) => `
//                     <li>
//                       <span>${timeSlot.start} - ${timeSlot.end}</span>
//                     </li>
//                   `).join("")}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;

//       document.body.innerHTML += timeSlotModal;
//       const modal = document.getElementById("time-slot-modal");
//       modal.style.display = "block";
//     },
//   });

//   calendar.render();
// });

// onBeforeUnmount(() => {
//   if (calendar) {
//     calendar.destroy();
//   }
// });
import { onBeforeUnmount, onMounted } from "vue";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Add interaction plugin

let calendar;

const props = defineProps({
  id: {
    type: String,
    default: "widget-calendar",
  },
  title: {
    type: String,
    default: "",
  },
  day: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  initialView: {
    type: String,
    default: "dayGridMonth",
  },
  initialDate: {
    type: String,
    default: "2020-12-01",
  },
  events: {
    type: Array,
    default: () => [
      {
        title: "Reserver",
        start: "2020-11-18",
        end: "2020-11-18",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver",
        start: "2020-11-21",
        end: "2020-11-22",
        className: "bg-gradient-success",
        selectable: false, // Make this event unselectable
      },
      {
        title: "Reserver ",
        start: "2020-11-29",
        end: "2020-11-29",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver",
        start: "2020-12-01",
        end: "2020-12-01",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver",
        start: "2020-12-03",
        end: "2020-12-03",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver Commercial",
        start: "2020-12-07",
        end: "2020-12-09",
        className: "bg-gradient-success",
        selectable: false, // Make this event unselectable
      },
      {
        title: "Reserver",
        start: "2020-12-10",
        end: "2020-12-10",
        className: "bg-gradient-success",
        selectable: false, // Make this event unselectable
      },
      {
        title: "Reserver",
        start: "2020-12-19",
        end: "2020-12-19",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver",
        start: "2020-12-23",
        end: "2020-12-23",
        className: "bg-gradient-success",
      },
      {
        title: "Reserver",
        start: "2020-12-02",
        end: "2020-12-02",
        className: "bg-gradient-success",
      },
    ],
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  calendar = new Calendar(document.getElementById(props.id), {
    contentHeight: "auto",
    plugins: [dayGridPlugin, interactionPlugin], // Add interaction plugin
    initialView: props.initialView,
    selectable: props.selectable,
    editable: props.editable,
    events: props.events,
    initialDate: props.initialDate,
    headerToolbar: {
      start: "title", // will normally be on the left. if RTL, will be on the right
      center: "",
      end: "today prev,next", // will normally be on the right. if RTL, will be on the left
    },
    views: {
      month: {
        titleFormat: {
          month: "long",
          year: "numeric",
        },
      },
      agendaWeek: {
        titleFormat: {
          month: "long",
          year: "numeric",
          day: "numeric",
        },
      },
      agendaDay: {
        titleFormat: {
          month: "short",
          year: "numeric",
          day: "numeric",
        },
      },
    },
    dateClick: (info) => { // Add dateClick event handler
      if (info.date) {
        console.log(`Date clicked: ${info.date.toLocaleDateString()}`);
        // Display available time slots here
        const timeSlots = [
          { start: "09:00", end: "10:00" },
          { start: "10:00", end: "11:00" },
          { start: "11:00", end: "12:00" },
          { start: "13:00", end: "14:00" },
          { start: "14:00", end: "15:00" },
        ];
        console.log(`Available time slots: ${timeSlots.map((slot) => `${slot.start} - ${slot.end}`).join(", ")}`);
      }
    },
    eventClick: (info) => { // Add eventClick event handler
      if (info.event.selectable === false) {
        console.log(`Event is unselectable: ${info.event.title}`);
      }
    },
  });

  calendar.render();
});

onBeforeUnmount(() => {
  if (calendar) {
    calendar.destroy();
  }
});

</script>

<template>
  <div class="card widget-calendar">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ props.title }}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">
          {{ props.day }}
        </div>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">
          {{ props.year }}
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <div :id="props.id" data-toggle="widget-calendar"></div>
    </div>
  </div>
</template>

<style>
#time-slot-modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}

#time-slot-modal.show {
  display: block;
}

#time-slot-modal .modal-dialog {
  margin: 100px auto;
}

#time-slot-modal .modal-content {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
}

#time-slot-modal .modal-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

#time-slot-modal .modal-title {
  font-weight: bold;
}

#time-slot-modal .modal-body {
  padding: 20px;
}

#time-slot-modal .modal-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#time-slot-modal .modal-body li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

#time-slot-modal .modal-body li:last-child {
  border-bottom: none;
}
</style>