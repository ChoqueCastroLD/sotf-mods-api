/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_ScopeInputs */

const en_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only on one mod`)
};

const es_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo en un mod`)
};

const de_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur bei einem Mod`)
};

const fr_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur un seul mod`)
};

const it_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo su una mod`)
};

const nl_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen bij één mod`)
};

const pl_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko przy jednym modzie`)
};

const pt_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só em um mod`)
};

const ru_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только у одного мода`)
};

const sv_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara på en modd`)
};

const tr_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca tek bir modda`)
};

const zh_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限一个模组`)
};

const ja_ranger_sanction_scope = /** @type {(inputs: Ranger_Sanction_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一つのMODのみ`)
};

/**
* | output |
* | --- |
* | "Only on one mod" |
*
* @param {Ranger_Sanction_ScopeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope = /** @type {((inputs?: Ranger_Sanction_ScopeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_ScopeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope(inputs)
	if (locale === "de") return de_ranger_sanction_scope(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope(inputs)
	if (locale === "it") return it_ranger_sanction_scope(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope(inputs)
	return en_ranger_sanction_scope(inputs)
});
