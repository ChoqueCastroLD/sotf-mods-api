/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown> }} Ranger_Sanction_ConfirmInputs */

const en_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const es_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const de_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const fr_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const it_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const nl_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const pl_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const pt_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const ru_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const sv_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const tr_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const zh_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

const ja_ranger_sanction_confirm = /** @type {(inputs: Ranger_Sanction_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}`)
};

/**
* | output |
* | --- |
* | "{kind}" |
*
* @param {Ranger_Sanction_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_confirm = /** @type {((inputs: Ranger_Sanction_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_confirm(inputs)
	if (locale === "de") return de_ranger_sanction_confirm(inputs)
	if (locale === "fr") return fr_ranger_sanction_confirm(inputs)
	if (locale === "it") return it_ranger_sanction_confirm(inputs)
	if (locale === "nl") return nl_ranger_sanction_confirm(inputs)
	if (locale === "pl") return pl_ranger_sanction_confirm(inputs)
	if (locale === "pt") return pt_ranger_sanction_confirm(inputs)
	if (locale === "ru") return ru_ranger_sanction_confirm(inputs)
	if (locale === "sv") return sv_ranger_sanction_confirm(inputs)
	if (locale === "tr") return tr_ranger_sanction_confirm(inputs)
	if (locale === "zh") return zh_ranger_sanction_confirm(inputs)
	if (locale === "ja") return ja_ranger_sanction_confirm(inputs)
	return en_ranger_sanction_confirm(inputs)
});
