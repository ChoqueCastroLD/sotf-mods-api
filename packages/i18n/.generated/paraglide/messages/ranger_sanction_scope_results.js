/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Scope_ResultsInputs */

const en_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Matching mods`)
};

const es_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que coinciden`)
};

const de_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passende Mods`)
};

const fr_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods correspondants`)
};

const it_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod corrispondenti`)
};

const nl_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overeenkomende mods`)
};

const pl_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasujące mody`)
};

const pt_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods correspondentes`)
};

const ru_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящие моды`)
};

const sv_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Matchande moddar`)
};

const tr_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen modlar`)
};

const zh_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`匹配的模组`)
};

const ja_ranger_sanction_scope_results = /** @type {(inputs: Ranger_Sanction_Scope_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するMOD`)
};

/**
* | output |
* | --- |
* | "Matching mods" |
*
* @param {Ranger_Sanction_Scope_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_results = /** @type {((inputs?: Ranger_Sanction_Scope_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_results(inputs)
	if (locale === "de") return de_ranger_sanction_scope_results(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_results(inputs)
	if (locale === "it") return it_ranger_sanction_scope_results(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_results(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_results(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_results(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_results(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_results(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_results(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_results(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_results(inputs)
	return en_ranger_sanction_scope_results(inputs)
});
