/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Scope_NoneInputs */

const en_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mod matches.`)
};

const es_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod coincide.`)
};

const de_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod passt.`)
};

const fr_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod ne correspond.`)
};

const it_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod corrisponde.`)
};

const nl_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mod komt overeen.`)
};

const pl_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie pasuje.`)
};

const pt_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod corresponde.`)
};

const ru_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих модов нет.`)
};

const sv_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen modd matchar.`)
};

const tr_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen mod yok.`)
};

const zh_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的模组。`)
};

const ja_ranger_sanction_scope_none = /** @type {(inputs: Ranger_Sanction_Scope_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するMODはありません。`)
};

/**
* | output |
* | --- |
* | "No mod matches." |
*
* @param {Ranger_Sanction_Scope_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_none = /** @type {((inputs?: Ranger_Sanction_Scope_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_none(inputs)
	if (locale === "de") return de_ranger_sanction_scope_none(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_none(inputs)
	if (locale === "it") return it_ranger_sanction_scope_none(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_none(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_none(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_none(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_none(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_none(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_none(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_none(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_none(inputs)
	return en_ranger_sanction_scope_none(inputs)
});
