/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_AllInputs */

const en_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all`)
};

const es_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos`)
};

const de_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle ansehen`)
};

const fr_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout voir`)
};

const it_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutte`)
};

const nl_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles bekijken`)
};

const pl_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie`)
};

const pt_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos`)
};

const ru_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть все`)
};

const sv_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla`)
};

const tr_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü gör`)
};

const zh_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部`)
};

const ja_basecamp_mods_all = /** @type {(inputs: Basecamp_Mods_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて見る`)
};

/**
* | output |
* | --- |
* | "See all" |
*
* @param {Basecamp_Mods_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_all = /** @type {((inputs?: Basecamp_Mods_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_all(inputs)
	if (locale === "de") return de_basecamp_mods_all(inputs)
	if (locale === "fr") return fr_basecamp_mods_all(inputs)
	if (locale === "it") return it_basecamp_mods_all(inputs)
	if (locale === "nl") return nl_basecamp_mods_all(inputs)
	if (locale === "pl") return pl_basecamp_mods_all(inputs)
	if (locale === "pt") return pt_basecamp_mods_all(inputs)
	if (locale === "ru") return ru_basecamp_mods_all(inputs)
	if (locale === "sv") return sv_basecamp_mods_all(inputs)
	if (locale === "tr") return tr_basecamp_mods_all(inputs)
	if (locale === "zh") return zh_basecamp_mods_all(inputs)
	if (locale === "ja") return ja_basecamp_mods_all(inputs)
	return en_basecamp_mods_all(inputs)
});
