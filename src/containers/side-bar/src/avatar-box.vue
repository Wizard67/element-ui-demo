<template>
    <div class="avatar-box">
        <img class="avatar el-dropdown-link"
             :src="avatar">
        <div class="text">
            <p class="greeting">{{ greeting }}</p>
            <p class="name">{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        avatar: {
            type: String,
            required: true
        },
        greeting: {
            type: String,
            default: 'Welcome.'
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.avatar-box {
  display: flex;
  position: relative;
  padding: 30px 20px 0 20px;
  width: 100%;
  color: white;
  transition: .3s all ease-in-out;

  &>.avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px #5e6d82 solid;
    cursor: pointer;
  }

  &>.text {
    padding: 0 20px;
    visibility: visible;
    transition: visibility .3s ease-in-out;

    &>.greeting {
      font-size: 14px;
      line-height: 1.8;
      color: #BAB8B8;
    }

    &>.name {
      font-size: 16px;
      line-height: 2;
    }
  }
}
/* -collapse */
.-collapse {
    & .avatar-box {
        padding: 30px 0 0 0;
        transition: all .3s ease-in-out;

        &>.avatar {
            margin: auto;
        }

        &>.text {
            visibility: hidden;
            transition: visibility .2s ease-in-out;
        }
    }
}
</style>


