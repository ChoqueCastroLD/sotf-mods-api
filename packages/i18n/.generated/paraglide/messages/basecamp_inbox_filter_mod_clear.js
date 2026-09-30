/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Filter_Mod_ClearInputs */

const en_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show every mod`)
};

const es_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar todos los mods`)
};

const de_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Mods zeigen`)
};

const fr_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher tous les mods`)
};

const it_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra tutte le mod`)
};

const nl_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle mods tonen`)
};

const pl_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż wszystkie mody`)
};

const pt_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar todos os mods`)
};

const ru_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать все моды`)
};

const sv_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla moddar`)
};

const tr_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modları göster`)
};

const zh_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示所有模组`)
};

const ja_basecamp_inbox_filter_mod_clear = /** @type {(inputs: Basecamp_Inbox_Filter_Mod_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての MOD を表示`)
};

/**
* | output |
* | --- |
* | "Show every mod" |
*
* @param {Basecamp_Inbox_Filter_Mod_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_filter_mod_clear = /** @type {((inputs?: Basecamp_Inbox_Filter_Mod_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Filter_Mod_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "de") return de_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "fr") return fr_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "it") return it_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "nl") return nl_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "pl") return pl_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "pt") return pt_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "ru") return ru_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "sv") return sv_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "tr") return tr_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "zh") return zh_basecamp_inbox_filter_mod_clear(inputs)
	if (locale === "ja") return ja_basecamp_inbox_filter_mod_clear(inputs)
	return en_basecamp_inbox_filter_mod_clear(inputs)
});
