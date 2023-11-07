import { useState, useCallback } from 'react';

function useMoneyFormatter(currency = 'NGN', locale = 'en-US') {
    const [formattedValue, setFormattedValue] = useState('');

    const format = useCallback((amount: number) => {
        const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount);
        setFormattedValue(formatted);
        return formatted;
    }, [currency, locale]);

    return { formattedValue, format };
}


export default useMoneyFormatter