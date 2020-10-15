<template>
    <div class="popup-layout" @click="closePopup">
        <div class="popup" @click.stop="">
            <div class="popup__header">
                <h5>{{popupTitle}}</h5>
                <span class="popup-close" @click.stop="closePopup"><i class="material-icons">close</i></span>
            </div>
            <div class="popup__content">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button class="btn close-btn" @click.stop="closePopup">Close</button>
                <button class="btn tocart-btn" v-if="!inCart" @click.stop="$emit('rightBtnAction')">{{rightBtnName}}</button>
                <button class="btn tocart-btn active" v-else>{{rightBtnActive}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popup",
        props: {
            popupTitle: {
                type: String,
                default: 'Popup title'
            },
            rightBtnName: {
                type: String,
                default: 'Ok'
            },
            rightBtnActive: {
                type: String,
                default: 'Already in cart'
            },
            inCart: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({

        }),
        methods: {
            closePopup() {
                this.$emit('closePopup');
            }
        }
    }
</script>

<style lang="scss" scoped>

    .popup-layout {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,.9);
        display: flex;
        justify-content: center;
        align-items: start;
    }
    .popup {
        padding: 15px 30px 30px;
        position: relative;
        top: 50px;
        width: 900px;
        background-color: white;
        border: 1px solid #999;
        box-shadow: 2px 3px 10px rgba(1,1,1,.26);


        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__content {
            display: flex;
            justify-content: start;
            align-items: start;
            padding-top: 20px;
            padding-bottom: 20px;

            .img {
                height: 500px;
                border: 1px dashed #ddd;
            }

            .popup-right {
                padding-left: 30px;
                text-align: left;

                .warning {
                    color: orange;
                }
                .error {
                    color: red;
                }
            }

            .catalog-item__price {
                font-size: 1.4rem;
                b {
                    font-size: 130%;
                }
            }
        }

        &__footer {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .btn {
                margin: 0 10px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        &-close {
            position: relative;
            cursor: pointer;
            opacity: .5;
            transition: .2s opacity;
            &:hover {
                opacity: 1;
            }
        }

        .btn {
            padding: 0 15px;

        }
        .close-btn {
            background-color: whitesmoke;
            border: 1px solid #999;
            color: #333;
        }
        .tocart-btn {

            &.active {
                background-color: #9adeaa;
                cursor: default;
                box-shadow: none;
            }
        }
    }

</style>