import { HttpTypes } from "@medusajs/types"
import { Table, Text, clx } from "@medusajs/ui"

import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import Thumbnail from "@modules/products/components/thumbnail"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  currencyCode: string
}

const Item = ({ item, currencyCode }: ItemProps) => {
  return (
    <Table.Row className="w-full border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors" data-testid="product-row">
      <Table.Cell className="!pl-0 p-4 w-24 align-middle">
        <div className="flex w-16 h-16 rounded-md overflow-hidden border border-gray-200">
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </div>
      </Table.Cell>

      <Table.Cell className="text-left align-middle">
        <div className="flex flex-col gap-y-1">
            <Text
            className="txt-medium-plus text-ui-fg-base font-semibold"
            data-testid="product-name"
            >
            {item.product_title}
            </Text>
            {/* Variant seçenekleri burada listelenir */}
            <div className="text-sm text-ui-fg-subtle">
                <LineItemOptions variant={item.variant} data-testid="product-variant" />
            </div>
        </div>
      </Table.Cell>

      <Table.Cell className="!pr-0 align-middle">
        <div className="flex flex-col items-end justify-center h-full gap-y-1">
          <div className="flex gap-x-2 items-center">
            <Text className="text-ui-fg-subtle text-small-regular bg-gray-100 px-2 py-0.5 rounded">
              <span className="font-medium">{item.quantity}</span> <span className="text-xs">Adet</span>
            </Text>
            <div className="text-ui-fg-muted text-small-regular">
                x
            </div>
            <LineItemUnitPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </div>

          <div className="font-bold text-ui-fg-base">
            <LineItemPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
            />
          </div>
        </div>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item