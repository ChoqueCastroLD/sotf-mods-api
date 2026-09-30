/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_PermanentInputs */

const en_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent`)
};

const es_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente`)
};

const de_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dauerhaft`)
};

const fr_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Définitive`)
};

const it_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente`)
};

const nl_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent`)
};

const pl_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na stałe`)
};

const pt_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanente`)
};

const ru_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навсегда`)
};

const sv_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanent`)
};

const tr_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kalıcı`)
};

const zh_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久`)
};

const ja_ranger_sanction_permanent = /** @type {(inputs: Ranger_Sanction_PermanentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久`)
};

/**
* | output |
* | --- |
* | "Permanent" |
*
* @param {Ranger_Sanction_PermanentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_permanent = /** @type {((inputs?: Ranger_Sanction_PermanentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_PermanentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_permanent(inputs)
	if (locale === "de") return de_ranger_sanction_permanent(inputs)
	if (locale === "fr") return fr_ranger_sanction_permanent(inputs)
	if (locale === "it") return it_ranger_sanction_permanent(inputs)
	if (locale === "nl") return nl_ranger_sanction_permanent(inputs)
	if (locale === "pl") return pl_ranger_sanction_permanent(inputs)
	if (locale === "pt") return pt_ranger_sanction_permanent(inputs)
	if (locale === "ru") return ru_ranger_sanction_permanent(inputs)
	if (locale === "sv") return sv_ranger_sanction_permanent(inputs)
	if (locale === "tr") return tr_ranger_sanction_permanent(inputs)
	if (locale === "zh") return zh_ranger_sanction_permanent(inputs)
	if (locale === "ja") return ja_ranger_sanction_permanent(inputs)
	return en_ranger_sanction_permanent(inputs)
});
