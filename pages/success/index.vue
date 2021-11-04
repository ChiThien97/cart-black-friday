<template>
  <div>
    <TopBar
      title="Hoàn tất"
      close-text="Đóng"
      href="/"
    />
    <div class="block-info">
      <ProcessBar
        choose
        info
        payment
        done
      />
      <div class="container block-box">
        <p class="mb-2">Cảm ơn anh Phương đã cho CellphoneS cơ hội được phục vụ. Trong 15 phút, CellphoneS sẽ gửi SMS
          hoặc Gọi để xác nhận đơn hàng.</p>
        <Information
          title="đơn hàng"
          order-id="157NTMK.21.01.022256"
          customer-name="Đoàn Anh Phương"
          phone="0911646437"
          address="350 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành Phố Hồ Chí Minh"
          shipping="20000"
          total="26320000"
        />
        <SuccessProductBlock
          time="14h00"
          date="10/04/2021"
        />
        <ButtonGroup/>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/CartPage/TopBar";
import ProcessBar from "~/components/Payment/ProcessBar";
import BottomBar from "~/components/CartPage/BottomBar";
import Information from "~/components/Payment/Information";
import SuccessProductBlock from "~/components/Payment/SuccessProductBlock";
import ButtonGroup from "@/components/Payment/ButtonGroup";

export default {
  components: {
    TopBar,
    ProcessBar,
    BottomBar,
    Information,
    SuccessProductBlock,
    ButtonGroup
  },
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'default-desktop'
}
</script>

<style scoped>
.block-info {
  background: #fef2f2;
  max-width: 600px;
  margin: auto;
  border-radius: 15px;
}

.block-box {
  background: #FFF;
}
</style>
