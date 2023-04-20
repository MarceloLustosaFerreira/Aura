({
    showToast : function(component, event, helper, titulo, tipo, mensagem) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": titulo,
            "type" : tipo,
            "message": mensagem
        });
        toastEvent.fire();
    },
    handleReset: function(component, event, helper) {
        const inputFields = this.template.querySelectorAll(
            'lightning:inputField'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
            }
            }
            })
