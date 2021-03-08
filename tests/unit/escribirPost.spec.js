import { shallowMount } from "@vue/test-utils";
import EscribirPost from '@/components/post/EscribirPost'

describe('EscribirPost.vue', () => {
    it('Verificar que la variable escribir_post este vacia', () => {
      const wrapper = shallowMount(EscribirPost)
       expect(wrapper.vm.escribir_post).toBeNull
    })

    it('Verificar que la variable escribir_post tenga datos', () => {
      let mensaje ="prueba de post";
      const wrapper = shallowMount(EscribirPost,{
        data() {
          return {
            escribir_post: mensaje
          }
        },
      })
       expect(wrapper.vm.escribir_post).toBe(mensaje);
    })
  })
