<template>
  <div id="calendar">
    <div data-reactroot="" class="calendar">
      <nav class="calendar--days"><span class="label">Mon</span><span class="label">Tue</span><span
          class="label">Wed</span><span class="label">Thu</span><span class="label">Fri</span><span
          class="label">Sat</span><span class="label">Sun</span><span class="muted">31</span><span
          class="">1</span><span class="">2</span><span class="">3</span><span class="">4</span><span
          class="">5</span><span class="">6</span><span class="">7</span><span class="">8</span><span
          class="">9</span><span class="">10</span><span class="">11</span><span class="">12</span><span
          class="">13</span><span class="">14</span><span class="">15</span><span class="">16</span><span
          class="active start end">17</span><span class="">18</span><span class="">19</span><span
          class="">20</span><span class="">21</span><span class="">22</span><span class="">23</span><span
          class="">24</span><span class="">25</span><span class="">26</span><span class="">27</span><span
          class="">28</span><span class="">29</span><span class="">30</span><span class="muted">1</span><span
          class="muted">2</span><span class="muted">3</span><span class="muted">4</span><span
          class="muted">5</span><span class="muted">6</span><span class="muted">7</span><span
          class="muted">8</span><span class="muted">9</span><span class="muted">10</span><span class="muted">11</span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar"
}
</script>

<style lang="scss" scoped>
$primary: #{var(--app-color-primary)};
$radius: 12px;

.calendar {
  width: 100%;
  //padding: 15px;
  //box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.4);
  //border-radius: $radius;
  overflow: hidden;

  &--nav {
    margin: -15px -15px 15px;
    padding: 0 15px;
    background-color: $primary;
    color: #fff;
    height: 70px;
    position: relative;

    a {
      position: absolute;
      cursor: pointer;
      left: 10px;
      font-size: 32px;
      line-height: 1;
      top: 16px;
      width: 30px;
      text-align: center;
      display: inline-block;
      color: transparentize(#fff, 0.6);
      user-select: none;

      &:hover {
        color: #fff;
      }

      &:last-child {
        left: auto;
        right: 10px;
      }
    }

    h1 {
      margin: 0;
      position: absolute;
      left: 40px;
      right: 40px;
      text-align: center;
      cursor: pointer;
      font-weight: 400;
      font-size: 30px;
      line-height: 66px;
      user-select: none;
    }

    small {
      font-weight: 300;
      font-size: 60%;
    }
  }

  &--days {
    font-size: 0;

    span {
      width: 14.28571%;
      display: inline-block;
      text-align: center;
      user-select: none;
      cursor: pointer;
      margin: 8px 0;
      line-height: 34px;
      position: relative;
      font-size: 16px;

      &.label {
        text-transform: uppercase;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.3);
        font-size: 14px;
        cursor: initial;
      }

      &.active {
        font-weight: 700;
        background-color: $primary;
        border-radius: $radius;
      }

      &.muted {
        color: rgba(0, 0, 0, 0.3);
      }

      &.between {
        border-radius: 0;
      }

      &.start, &.between, &.end {
        background-color: #b670f4;
        color: #fff;
      }

      &.start {
        border-radius: $radius 0 0 $radius;
      }

      &.end {
        border-radius: 0 $radius $radius 0;
      }

      &.start.end {
        border-radius: $radius;
      }

      &.between:nth-child(7n):after, &.start:nth-child(7n):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 100%;
        background-color: #b670f4;
        width: 20px;
      }

      &.between:nth-child(7n + 1):after, &.end:nth-child(7n + 1):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        background-color: #b670f4;
        width: 20px;
      }

      &.start.end:after {
        display: none;
      }
    }
  }
}

</style>
