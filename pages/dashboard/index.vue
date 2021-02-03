<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <Card>
        <vc-date-picker v-model="selectedDate" is-expanded></vc-date-picker>
        <time-slots></time-slots>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import TimeSlots from '@/components/TimeSlots'
export default {
  components: {
    Card,
    TimeSlots,
  },
  layout(context) {
    // this will be based on users role
    return 'admin'
  },
  data() {
    return {
      selectedDate: false,
    }
  },
}
</script>
