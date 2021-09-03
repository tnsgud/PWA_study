<template>
    <v-container>
        <v-card class="mx-auto" max-width="500">
            <v-img src="../assets/push-image.jpg" height="200px"></v-img>
            <v-row align="center">
                <v-col offset="1" cols="2">
                    <v-img contain color="blue darken-2" src="../assets/push-noti.png" max-width="70px"></v-img>
                </v-col>
                <v-col cols="8">
                    <v-card-title primary-title>
                        <h1 class="headline">졸업작품 전시회 푸시알림</h1>
                        <p class="body-1">
                            졸업작품 전시회의 초청 푸시 알림을 보내려고 합니다.
                            [알림허용] 단추를 클릭하시면 알림 정보를 받으실 수 있습니다.
                        </p>
                    </v-card-title>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col offset="1" cols="5">
                    <v-btn block large @click="fnPushSubscribe" color="orange" dark>
                        <v-icon>add_alert</v-icon>
                        알림허용
                    </v-btn>
                </v-col>

                <v-col cols="5">
                    <v-btn block large @click="fnUnSubscription" color="orange" dark>
                        <v-icon>notifications_off</v-icon>
                        알림 해제
                    </v-btn>
                </v-col>
            </v-row>

            <v-snackbar v-model="bMsg">
                푸시알람이 해제되었습니다.
                <v-btn color="orange" text @click="bMsg = false">닫기</v-btn>
            </v-snackbar>
        </v-card>
    </v-container>
</template>

<script>
import {oSubscriptionsInDB} from "@/datasources/firebase";

export default {
    name: '',

    data: () => ({
        bMsg: false
    }),

    methods: {
        fnPushSubscribe() {
            let tmp_this = this
            Notification.requestPermission(function (result) {
                if (result !== 'granted') {
                    console.log('푸시 알림 기능이 허용되지 않았습니다.')
                } else {
                    tmp_this.fnConfigurePushSub()
                }
            })
        },
        fnConfigurePushSub() {
            let tmp_this = this

            if (!('serviceWorker' in navigator)) {
                console.log('서비스 워커가 없습니다!')
                return
            }

            navigator.serviceWorker.ready.then(function (swreg) {
                return swreg.pushManager.getSubscription()
            }).then(function (sub) {
                if (sub === null) {
                    tmp_this.fnNewSubscription()
                    tmp_this.fnDisplayNotification()
                } else {
                    console.log('이미 구독되어 있습니다.')
                }
            })
        },
        fnNewSubscription() {
            let tmp_this = this
            navigator.serviceWorker.ready.then(function (swreg) {
                const vapidPublicKey = 'BMAu-HeSWCUmocatjlVEZJwexonHpQNpTX4Ed6Wqi4CpNRO3mx4GkeafuY_vGvO7jY1m1FPZUVgR3z9R6sznpAo'
                const convertedVapidPublicKey = tmp_this.urlBase64ToUint8Array(vapidPublicKey)

                return swreg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidPublicKey
                }).then(function (newSub) {
                    const filteredSub = JSON.parse(JSON.stringify(newSub))
                    let pushConfig = {
                        endpoint: filteredSub.endpoint,
                        keys: {
                            p256dh: filteredSub.keys.p256dh,
                            auth: filteredSub.keys.auth
                        }
                    }

                    return oSubscriptionsInDB.push(pushConfig)
                })
            })
        },
        fnUnSubscription() {
            let tmp_this = this
            navigator.serviceWorker.ready.then(function (swreg) {
                return swreg.pushManager.getSubscription()
            }).then(function (oldSub) {
                tmp_this.bMsg = true
                oldSub.unsubscribe()
            }).catch(err => console.log(err))
        },
        fnDisplayNotification() {
            const title = '졸업작품 전시회'
            const options = {
                body:'새로운 소식 알림 서비스에 가입하신 것을 환영합니다.',
                icon:'/img/push-noti.png',
                badge: '/img/push-badge-icon.png',
                image: '/img/push-image.png',
                actions: [
                    {
                        action:'Like',
                        title:'커피를 좋아하시면 링크를 클릭하세요.',
                        icon:'/img/push-coffee.png'
                    }
                ],
                vibrate: [500, 100, 500]
            }

            navigator.serviceWorker.ready.then(function (swreg) {
                swreg.showNotification(title, options)
            })
        },
        urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }
    }
};
</script>