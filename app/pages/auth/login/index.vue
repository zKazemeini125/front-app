<script lang="ts">
</script>

<template>
    <v-form>
        <!--! میشه با استفاده از breakpoint ها استایل های مختلف به یک تگ ویوتی داد؟؟ -->
        <!--h max-width -->
        <v-container max-width="500px">
            <v-row>
                <v-col cols="12">
                    <!--! راهی وجود داره که کامپونتت های ویوتی رو overwrite کرد؟-->
                    <!--h hide-details -->
                    <v-text-field label="t('general.username')" variant="outlined" density="compact" hide-details/>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="t('general.password')" variant="outlined" density="compact" hide-details/>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<style>
</style>