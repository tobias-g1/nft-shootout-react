const FormattingService = {
    formatBalance(balance: string): string {
        return new Intl.NumberFormat("en-US", {
          notation: "compact",
          compactDisplay: "short",
          minimumFractionDigits: 2,
        }).format(parseFloat(balance));
    },
    formatAttributeNames(attribute: string): string {
        return attribute.replace(/([a-z])([A-Z])/g, '$1 $2');
    },
    truncateForAddress(str: String): string {
        return (str) ? str.substring(0, 8) + "..." + str.substring(str.length - 6) : null;
      }      
};

export default FormattingService;
