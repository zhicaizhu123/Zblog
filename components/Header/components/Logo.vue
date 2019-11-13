<template>
  <h1 class="logo">
    <img
      src="~assets/images/avatar.png"
      alt=""
    >
    <span>ZCoder</span>
  </h1>
</template>

<style lang="scss" scoped>
.logo {
  height: 32px;
  display: flex;
  align-items: center;
  img {
    height: 32px;
    width: auto;
    border-radius: 4px;
    object-fit: cover;
    transition: transform 0.15s;
    &:hover {
      transform: scale(1.05);
    }
  }
  span {
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
