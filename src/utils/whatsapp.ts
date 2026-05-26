export function openWhatsAppConfirmation(order:any){
 const message = `✨ طلب جديد - Mony Store\n\nرقم الطلب: ${order.orderNumber}\nالعميل: ${order.name}\nالهاتف: ${order.phone}\nالعنوان: ${order.governorate} - ${order.city} - ${order.address}\n\nالمنتجات:\n${order.items.map((i:any)=>`• ${i.product.nameAr} x${i.quantity}`).join('\n')}\n\nالإجمالي: ${order.total} جنيه\n\nلتأكيد الطلب اضغط:\nhttps://wa.me/201021569722?text=${encodeURIComponent('تم تأكيد الطلب ' + order.orderNumber)}\n\nلإلغاء الطلب اضغط:\nhttps://wa.me/201021569722?text=${encodeURIComponent('تم إلغاء الطلب ' + order.orderNumber)}`;
 window.open(`https://wa.me/2${order.phone.replace(/^0/,'')}?text=${encodeURIComponent(message)}`,'_blank');
}
