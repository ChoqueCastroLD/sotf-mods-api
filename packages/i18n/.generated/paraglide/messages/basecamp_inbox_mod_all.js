/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Mod_AllInputs */

const en_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All mods`)
};

const es_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los mods`)
};

const de_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Mods`)
};

const fr_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les mods`)
};

const it_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i mod`)
};

const nl_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle mods`)
};

const pl_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie mody`)
};

const pt_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os mods`)
};

const ru_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все моды`)
};

const sv_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla moddar`)
};

const tr_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modlar`)
};

const zh_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部模组`)
};

const ja_basecamp_inbox_mod_all = /** @type {(inputs: Basecamp_Inbox_Mod_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての MOD`)
};

/**
* | output |
* | --- |
* | "All mods" |
*
* @param {Basecamp_Inbox_Mod_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_mod_all = /** @type {((inputs?: Basecamp_Inbox_Mod_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Mod_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_mod_all(inputs)
	if (locale === "de") return de_basecamp_inbox_mod_all(inputs)
	if (locale === "fr") return fr_basecamp_inbox_mod_all(inputs)
	if (locale === "it") return it_basecamp_inbox_mod_all(inputs)
	if (locale === "nl") return nl_basecamp_inbox_mod_all(inputs)
	if (locale === "pl") return pl_basecamp_inbox_mod_all(inputs)
	if (locale === "pt") return pt_basecamp_inbox_mod_all(inputs)
	if (locale === "ru") return ru_basecamp_inbox_mod_all(inputs)
	if (locale === "sv") return sv_basecamp_inbox_mod_all(inputs)
	if (locale === "tr") return tr_basecamp_inbox_mod_all(inputs)
	if (locale === "zh") return zh_basecamp_inbox_mod_all(inputs)
	if (locale === "ja") return ja_basecamp_inbox_mod_all(inputs)
	return en_basecamp_inbox_mod_all(inputs)
});
