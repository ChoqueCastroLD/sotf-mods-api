/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Attention_Show_DismissedInputs */

const en_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show dismissed (${i?.count})`)
};

const es_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar descartados (${i?.count})`)
};

const de_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ausgeblendete anzeigen (${i?.count})`)
};

const fr_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afficher les éléments masqués (${i?.count})`)
};

const it_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostra nascosti (${i?.count})`)
};

const nl_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verborgen items tonen (${i?.count})`)
};

const pl_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokaż odrzucone (${i?.count})`)
};

const pt_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar dispensados (${i?.count})`)
};

const ru_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показать скрытые (${i?.count})`)
};

const sv_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa dolda (${i?.count})`)
};

const tr_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gizlenenleri göster (${i?.count})`)
};

const zh_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示已忽略的项目（${i?.count}）`)
};

const ja_basecamp_attention_show_dismissed = /** @type {(inputs: Basecamp_Attention_Show_DismissedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`非表示の項目を表示 (${i?.count})`)
};

/**
* | output |
* | --- |
* | "Show dismissed ({count})" |
*
* @param {Basecamp_Attention_Show_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_show_dismissed = /** @type {((inputs: Basecamp_Attention_Show_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Show_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_show_dismissed(inputs)
	if (locale === "de") return de_basecamp_attention_show_dismissed(inputs)
	if (locale === "fr") return fr_basecamp_attention_show_dismissed(inputs)
	if (locale === "it") return it_basecamp_attention_show_dismissed(inputs)
	if (locale === "nl") return nl_basecamp_attention_show_dismissed(inputs)
	if (locale === "pl") return pl_basecamp_attention_show_dismissed(inputs)
	if (locale === "pt") return pt_basecamp_attention_show_dismissed(inputs)
	if (locale === "ru") return ru_basecamp_attention_show_dismissed(inputs)
	if (locale === "sv") return sv_basecamp_attention_show_dismissed(inputs)
	if (locale === "tr") return tr_basecamp_attention_show_dismissed(inputs)
	if (locale === "zh") return zh_basecamp_attention_show_dismissed(inputs)
	if (locale === "ja") return ja_basecamp_attention_show_dismissed(inputs)
	return en_basecamp_attention_show_dismissed(inputs)
});
