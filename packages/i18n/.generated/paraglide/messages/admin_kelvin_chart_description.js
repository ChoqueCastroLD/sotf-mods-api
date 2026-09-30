/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ cost: NonNullable<unknown>, tokensIn: NonNullable<unknown>, tokensOut: NonNullable<unknown>, over: NonNullable<unknown> }} Admin_Kelvin_Chart_DescriptionInputs */

const en_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("en", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("en", i?.over, {});
	const over__number = registry.number("en", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} in total · ${i?.tokensIn} tokens in, ${i?.tokensOut} out · never over budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} in total · ${i?.tokensIn} tokens in, ${i?.tokensOut} out · ${over__number} day over budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} in total · ${i?.tokensIn} tokens in, ${i?.tokensOut} out · ${over__number} days over budget`)
	
};

const es_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("es", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("es", i?.over, {});
	const over__number = registry.number("es", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} en total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de salida · nunca por encima del presupuesto`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} en total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de salida · ${over__number} día por encima del presupuesto`);
	return /** @type {LocalizedString} */ (`${i?.cost} en total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de salida · ${over__number} días por encima del presupuesto`)
	
};

const de_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("de", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("de", i?.over, {});
	const over__number = registry.number("de", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} insgesamt · ${i?.tokensIn} Tokens rein, ${i?.tokensOut} raus · nie über dem Budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} insgesamt · ${i?.tokensIn} Tokens rein, ${i?.tokensOut} raus · ${over__number} Tag über dem Budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} insgesamt · ${i?.tokensIn} Tokens rein, ${i?.tokensOut} raus · ${over__number} Tage über dem Budget`)
	
};

const fr_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("fr", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("fr", i?.over, {});
	const over__number = registry.number("fr", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} au total · ${i?.tokensIn} tokens en entrée, ${i?.tokensOut} en sortie · jamais au-dessus du budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} au total · ${i?.tokensIn} tokens en entrée, ${i?.tokensOut} en sortie · ${over__number} jour au-dessus du budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} au total · ${i?.tokensIn} tokens en entrée, ${i?.tokensOut} en sortie · ${over__number} jours au-dessus du budget`)
	
};

const it_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("it", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("it", i?.over, {});
	const over__number = registry.number("it", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} in totale · ${i?.tokensIn} token in ingresso, ${i?.tokensOut} in uscita · mai oltre il budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} in totale · ${i?.tokensIn} token in ingresso, ${i?.tokensOut} in uscita · ${over__number} giorno oltre il budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} in totale · ${i?.tokensIn} token in ingresso, ${i?.tokensOut} in uscita · ${over__number} giorni oltre il budget`)
	
};

const nl_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("nl", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("nl", i?.over, {});
	const over__number = registry.number("nl", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} in totaal · ${i?.tokensIn} tokens in, ${i?.tokensOut} uit · nooit boven budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} in totaal · ${i?.tokensIn} tokens in, ${i?.tokensOut} uit · ${over__number} dag boven budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} in totaal · ${i?.tokensIn} tokens in, ${i?.tokensOut} uit · ${over__number} dagen boven budget`)
	
};

const pl_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("pl", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("pl", i?.over, {});
	const over__number = registry.number("pl", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`Razem ${i?.cost} · tokeny: ${i?.tokensIn} na wejściu, ${i?.tokensOut} na wyjściu · nigdy ponad budżet`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`Razem ${i?.cost} · tokeny: ${i?.tokensIn} na wejściu, ${i?.tokensOut} na wyjściu · ${over__number} dzień ponad budżet`);
	if (over__plural === "few") return /** @type {LocalizedString} */ (`Razem ${i?.cost} · tokeny: ${i?.tokensIn} na wejściu, ${i?.tokensOut} na wyjściu · ${over__number} dni ponad budżet`);
	if (over__plural === "many") return /** @type {LocalizedString} */ (`Razem ${i?.cost} · tokeny: ${i?.tokensIn} na wejściu, ${i?.tokensOut} na wyjściu · ${over__number} dni ponad budżet`);
	return /** @type {LocalizedString} */ (`Razem ${i?.cost} · tokeny: ${i?.tokensIn} na wejściu, ${i?.tokensOut} na wyjściu · ${over__number} dnia ponad budżet`)
	
};

const pt_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("pt", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("pt", i?.over, {});
	const over__number = registry.number("pt", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} no total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de saída · nunca acima do orçamento`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} no total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de saída · ${over__number} dia acima do orçamento`);
	return /** @type {LocalizedString} */ (`${i?.cost} no total · ${i?.tokensIn} tokens de entrada, ${i?.tokensOut} de saída · ${over__number} dias acima do orçamento`)
	
};

const ru_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("ru", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("ru", i?.over, {});
	const over__number = registry.number("ru", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`Всего ${i?.cost} · токенов на входе: ${i?.tokensIn}, на выходе: ${i?.tokensOut} · бюджет ни разу не превышен`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`Всего ${i?.cost} · токенов на входе: ${i?.tokensIn}, на выходе: ${i?.tokensOut} · ${over__number} день сверх бюджета`);
	if (over__plural === "few") return /** @type {LocalizedString} */ (`Всего ${i?.cost} · токенов на входе: ${i?.tokensIn}, на выходе: ${i?.tokensOut} · ${over__number} дня сверх бюджета`);
	if (over__plural === "many") return /** @type {LocalizedString} */ (`Всего ${i?.cost} · токенов на входе: ${i?.tokensIn}, на выходе: ${i?.tokensOut} · ${over__number} дней сверх бюджета`);
	return /** @type {LocalizedString} */ (`Всего ${i?.cost} · токенов на входе: ${i?.tokensIn}, на выходе: ${i?.tokensOut} · ${over__number} дня сверх бюджета`)
	
};

const sv_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("sv", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("sv", i?.over, {});
	const over__number = registry.number("sv", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`${i?.cost} totalt · ${i?.tokensIn} tokens in, ${i?.tokensOut} ut · aldrig över budget`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`${i?.cost} totalt · ${i?.tokensIn} tokens in, ${i?.tokensOut} ut · ${over__number} dag över budget`);
	return /** @type {LocalizedString} */ (`${i?.cost} totalt · ${i?.tokensIn} tokens in, ${i?.tokensOut} ut · ${over__number} dagar över budget`)
	
};

const tr_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("tr", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("tr", i?.over, {});
	const over__number = registry.number("tr", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`Toplam ${i?.cost} · ${i?.tokensIn} giriş, ${i?.tokensOut} çıkış token’ı · bütçe hiç aşılmadı`);
	if (over__plural === "one") return /** @type {LocalizedString} */ (`Toplam ${i?.cost} · ${i?.tokensIn} giriş, ${i?.tokensOut} çıkış token’ı · ${over__number} gün bütçe aşıldı`);
	return /** @type {LocalizedString} */ (`Toplam ${i?.cost} · ${i?.tokensIn} giriş, ${i?.tokensOut} çıkış token’ı · ${over__number} gün bütçe aşıldı`)
	
};

const zh_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("zh", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("zh", i?.over, {});
	const over__number = registry.number("zh", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`共 ${i?.cost} · 输入 ${i?.tokensIn} 个 token，输出 ${i?.tokensOut} 个 · 从未超出预算`);
	return /** @type {LocalizedString} */ (`共 ${i?.cost} · 输入 ${i?.tokensIn} 个 token，输出 ${i?.tokensOut} 个 · ${over__number} 天超出预算`)
	
};

const ja_admin_kelvin_chart_description = /** @type {(inputs: Admin_Kelvin_Chart_DescriptionInputs) => LocalizedString} */ (i) => {const over__exact = registry.number("ja", i?.over, { maximumFractionDigits: 20 });
	const over__plural = registry.plural("ja", i?.over, {});
	const over__number = registry.number("ja", i?.over, {});
	if (over__exact === "0") return /** @type {LocalizedString} */ (`合計 ${i?.cost} · 入力トークン ${i?.tokensIn}、出力 ${i?.tokensOut} · 予算超過なし`);
	return /** @type {LocalizedString} */ (`合計 ${i?.cost} · 入力トークン ${i?.tokensIn}、出力 ${i?.tokensOut} · 予算超過 ${over__number} 日`)
	
};

/**
* | over__exact | over__plural | output |
* | --- | --- | --- |
* | "0" | * | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · never over budget" |
* | * | "one" | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · {over__number} day over budget" |
* | * | * | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · {over__number} days over budget" |
*
* @param {Admin_Kelvin_Chart_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_chart_description = /** @type {((inputs: Admin_Kelvin_Chart_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Chart_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_chart_description(inputs)
	if (locale === "de") return de_admin_kelvin_chart_description(inputs)
	if (locale === "fr") return fr_admin_kelvin_chart_description(inputs)
	if (locale === "it") return it_admin_kelvin_chart_description(inputs)
	if (locale === "nl") return nl_admin_kelvin_chart_description(inputs)
	if (locale === "pl") return pl_admin_kelvin_chart_description(inputs)
	if (locale === "pt") return pt_admin_kelvin_chart_description(inputs)
	if (locale === "ru") return ru_admin_kelvin_chart_description(inputs)
	if (locale === "sv") return sv_admin_kelvin_chart_description(inputs)
	if (locale === "tr") return tr_admin_kelvin_chart_description(inputs)
	if (locale === "zh") return zh_admin_kelvin_chart_description(inputs)
	if (locale === "ja") return ja_admin_kelvin_chart_description(inputs)
	return en_admin_kelvin_chart_description(inputs)
});
