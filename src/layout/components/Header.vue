<template>
    <div class="header">
        <div class="header-left">
            <div
                class="logo"
                v-show="false"
            >
                <img
                    :src="logoSrc"
                    style=""
                    alt=""
                >
            </div>
            <div class="logo2">
                <img
                    :src="logoSrc"
                    style=""
                    alt=""
                >
                Vue3-sys-manager
            </div>
            <Menu />
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <!-- <i class="el-icon-bell"></i> -->
                            <el-icon color="white">
                                <bell-filled />
                            </el-icon>
                        </router-link>
                    </el-tooltip>
                    <span
                        class="btn-bell-badge"
                        v-if="message"
                    ></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/me.png" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown
                    class="user-name"
                    trigger="click"
                    @command="handleCommand"
                >
                    <span class="el-dropdown-link">
                        {{username}}
                        <!-- <el-icon color="white">
                            <avatar />
                        </el-icon> -->
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <!-- <a
                                href="https://github.com/lin-xin/vue-manage-system"
                                target="_blank"
                            >
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a> -->
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item
                                divided
                                command="loginout"
                            >退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
// import userAvator from "../../assets/img/img.jpg";

export default {
    components: {
        Menu,
    },
    setup() {
        const username = localStorage.getItem("ms_username");
        const message = 2;

        const store = useStore();
        const collapse = computed(() => store.state.app.collapse);
        // 侧边栏折叠
        const collapseChage = () => {
            store.commit("app/handleCollapse", !collapse.value);
        };

        const logoSrc = new URL("../../assets/img/logo.png", import.meta.url)
            .href;

        onMounted(() => {
            if (document.body.clientWidth < 1500) {
                collapseChage();
            }
        });

        // 用户名下拉菜单选择事件
        const router = useRouter();
        const handleCommand = (command) => {
            if (command == "loginout") {
                localStorage.removeItem("ms_username");
                router.push("/login");
            } else if (command == "user") {
                router.push("/user");
            }
        };

        return {
            logoSrc,
            username,
            message,
            collapse,
            collapseChage,
            handleCommand,
        };
    },
};
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    padding: 0px 10px;
}

.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}

.header .logo {
    position: relative;
    float: left;
    width: 180px;
    height: 100%;
    font-size: 12px;
    line-height: 70px;
}

.header .logo2 {
    position: relative;
    float: left;
    width: 170px;
    height: 100%;
    font-size: 16px;
    line-height: 70px;
    text-align: right;
    padding: 0 30px;
}

.logo2 img {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 22px;
    height: 22px;
    transform: translate(-50%, -50%);
}

.logo img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
}

.header-left {
    width: calc(100% - 200px);
    height: 100%;
}

.header-right {
    float: right;
    width: 200px;
    /* padding-right: 50px; */
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}

.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}

.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

.btn-bell .el-icon-bell {
    color: #fff;
}

.user-name {
    margin-left: 10px;
}

.user-avator {
    margin-left: 20px;
}

.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>