/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_TitleInputs */

const en_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My mods`)
};

const es_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis mods`)
};

const de_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Mods`)
};

const fr_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes mods`)
};

const it_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mie mod`)
};

const nl_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn mods`)
};

const pl_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje mody`)
};

const pt_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus mods`)
};

const ru_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои моды`)
};

const sv_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina moddar`)
};

const tr_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarım`)
};

const zh_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的模组`)
};

const ja_basecamp_mods_title = /** @type {(inputs: Basecamp_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイ MOD`)
};

/**
* | output |
* | --- |
* | "My mods" |
*
* @param {Basecamp_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_title = /** @type {((inputs?: Basecamp_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_title(inputs)
	if (locale === "de") return de_basecamp_mods_title(inputs)
	if (locale === "fr") return fr_basecamp_mods_title(inputs)
	if (locale === "it") return it_basecamp_mods_title(inputs)
	if (locale === "nl") return nl_basecamp_mods_title(inputs)
	if (locale === "pl") return pl_basecamp_mods_title(inputs)
	if (locale === "pt") return pt_basecamp_mods_title(inputs)
	if (locale === "ru") return ru_basecamp_mods_title(inputs)
	if (locale === "sv") return sv_basecamp_mods_title(inputs)
	if (locale === "tr") return tr_basecamp_mods_title(inputs)
	if (locale === "zh") return zh_basecamp_mods_title(inputs)
	if (locale === "ja") return ja_basecamp_mods_title(inputs)
	return en_basecamp_mods_title(inputs)
});
