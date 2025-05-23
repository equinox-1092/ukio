
<script>
import { ApartmentsService } from '../../../services/aparments.service.js';

export default {
  name: 'ApartmentRent',
  props: {
    apartment: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'rented', 'close'],
  data() {
    return {
      description: '',
      startDate: null,
      endDate: null,
      error: '',
      loading: false,
      apartmentsService: new ApartmentsService()
    };
  },
  methods: {
    async handleSubmit() {
      // Validate form
      if (!this.startDate || !this.endDate) {
        this.error = 'Completing the date fields is mandatory';
        return;
      }

      try {
        // Show confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to rent this apartment?');
        
        if (isConfirmed) {
          this.loading = true;
          
          // Prepare updated apartment data
          const updatedApartment = {
            ...this.apartment,
            description: this.description,
            startDate: this.formatDateForApi(this.startDate),
            endDate: this.formatDateForApi(this.endDate),
            state: 'C' 
          };

          await this.apartmentsService.update(this.apartment.apartmentId, updatedApartment);
          
          this.$emit('rented', updatedApartment);
          
          this.resetForm();
          
          alert('Apartment rented successfully!');
        }
      } catch (error) {
        console.error('Error renting apartment:', error);
        this.error = 'Failed to rent apartment. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    resetForm() {
      this.description = '';
      this.startDate = null;
      this.endDate = null;
      this.error = '';
    },
    formatDateForApi(date) {
      if (!date) return '';
      return new Date(date).toISOString().split('T')[0];
    },
    closeModal() {
      this.resetForm();
      this.$emit('close');
      this.$emit('update:visible', false);
    }
  }
};
</script>

<template>
  <pv-dialog
    :visible="visible"
    :modal="true"
    :style="{ width: '450px' }"
    :header="$t('apartment.rent')"
    :closable="!loading"
    @update:visible="$emit('update:visible', $event)"
    @hide="closeModal"
  >
    <div class="p-fluid">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="field">
          <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('apartment.description') }}
          </label>
          <pv-inputtext
            id="description"
            v-model="description"
            type="text"
            class="w-full"
          />
        </div>
        
        <div class="field">
          <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('apartment.startDate') }}
          </label>
          <pv-datepicker
            id="startDate"
            v-model="startDate"
            :showIcon="true"
            dateFormat="yy-mm-dd"
            :showButtonBar="true"
            class="w-full"
            :class="{'p-invalid': error && !startDate}"
          />
        </div>
        
        <div class="field">
          <label for="endDate" class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('apartment.endDate') }}
          </label>
          <pv-datepicker
            id="endDate"
            v-model="endDate"
            :showIcon="true"
            dateFormat="yy-mm-dd"
            :showButtonBar="true"
            class="w-full"
            :minDate="startDate"
            :class="{'p-invalid': error && !endDate}"
          />
        </div>
        
        <!-- Error Message -->
        <div v-if="error" class="p-error text-sm">
          {{ error }}
        </div>
        
        <div class="flex justify-end space-x-3 pt-4">
          <pv-button
            type="button"
            label="Cancel"
            icon="pi pi-times"
            class="p-button-text"
            @click="closeModal"
            :disabled="loading"
          />
          <pv-button
            type="submit"
            :label="$t('apartment.makeRent')"
            icon="pi pi-check"
            :loading="loading"
          />
        </div>
      </form>
    </div>
  </pv-dialog>
</template>

<style scoped>
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>