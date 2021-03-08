import { shallowMount } from "@vue/test-utils";
import LeerPost from "@/components/post/LeerPost";

describe("LeerPost", () => {

  it("Verificar que la variable escribir_post tenga datos", () => {
  
    const wrapper = shallowMount(LeerPost, {
      props: {
        usuario: {
          nombre: "Luis Vega",
          foto: "https://picsum.photos/200/300",
        },
        data: { contenido: "Hola mundo - Vega", fecha_creacion: "2020-10-15" },
      },
    });
    //console.log(wrapper.text());
   expect(wrapper.text()).toContain('Luis');
  });
});