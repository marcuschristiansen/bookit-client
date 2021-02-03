<template>
  <div>
    <h1>Select your timeslot</h1>
    <div v-for="(timeslot, index) in timeslots" :key="index" class="my-4">
      <button
        :class="timeslot.status"
        class="block text-white rounded-md py-2 w-full"
        :disabled="isTimeSlotDisabled(timeslot.status)"
      >
        {{ timeslot.time }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeslots: [
        {
          time: '9:00',
          status: 'open',
        },
        {
          time: '10:00',
          status: 'booked',
        },
        {
          time: '11:00',
          status: 'booked',
        },
        {
          time: '13:00',
          status: 'need-booking',
        },
        {
          time: '14:00',
          status: 'open',
        },
        {
          time: '15:00',
          status: 'need-booking',
        },
      ],
    }
  },
  methods: {
    isTimeSlotDisabled(status) {
      return status === 'booked'
    },
  },
}
</script>

<style>
.open {
  @apply bg-green-400;
}
.booked {
  @apply bg-gray-300;
}
.need-booking {
  @apply bg-indigo-400;
}
</style>
