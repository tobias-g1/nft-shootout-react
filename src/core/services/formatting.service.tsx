const FormattingService = {
    formatBalance(balance: string) {
        return new Intl.NumberFormat("en-US", {
          notation: "compact",
          compactDisplay: "short",
          minimumFractionDigits: 2,
        }).format(parseFloat(balance));
    },
    formatAttributeNames(attribute: string) {
        return attribute.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
};

export default FormattingService;
