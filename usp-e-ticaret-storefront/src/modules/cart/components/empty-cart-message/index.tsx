import { Heading, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-24 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading level="h1" className="flex flex-row text-3xl font-black gap-x-2 items-baseline text-ui-fg-base">
        Sepetiniz
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem] text-ui-fg-subtle">
        Sepetinizde henüz ürün bulunmuyor. Endüstriyel pompalar, yedek parçalar ve teknik çözümlerimizi incelemek için ürün kataloğumuza göz atabilirsiniz.
      </Text>
      <div>
        <InteractiveLink href="/store">
          <span className="text-orange-600 font-bold hover:text-orange-700">Ürünleri Keşfet</span>
        </InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage