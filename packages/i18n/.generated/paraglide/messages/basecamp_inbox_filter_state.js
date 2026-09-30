/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Filter_StateInputs */

const en_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show`)
};

const es_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const de_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen`)
};

const fr_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

const it_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra`)
};

const nl_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tonen`)
};

const pl_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż`)
};

const pt_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ru_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать`)
};

const sv_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göster`)
};

const zh_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const ja_basecamp_inbox_filter_state = /** @type {(inputs: Basecamp_Inbox_Filter_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "Show" |
*
* @param {Basecamp_Inbox_Filter_StateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_filter_state = /** @type {((inputs?: Basecamp_Inbox_Filter_StateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Filter_StateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_filter_state(inputs)
	if (locale === "de") return de_basecamp_inbox_filter_state(inputs)
	if (locale === "fr") return fr_basecamp_inbox_filter_state(inputs)
	if (locale === "it") return it_basecamp_inbox_filter_state(inputs)
	if (locale === "nl") return nl_basecamp_inbox_filter_state(inputs)
	if (locale === "pl") return pl_basecamp_inbox_filter_state(inputs)
	if (locale === "pt") return pt_basecamp_inbox_filter_state(inputs)
	if (locale === "ru") return ru_basecamp_inbox_filter_state(inputs)
	if (locale === "sv") return sv_basecamp_inbox_filter_state(inputs)
	if (locale === "tr") return tr_basecamp_inbox_filter_state(inputs)
	if (locale === "zh") return zh_basecamp_inbox_filter_state(inputs)
	if (locale === "ja") return ja_basecamp_inbox_filter_state(inputs)
	return en_basecamp_inbox_filter_state(inputs)
});
