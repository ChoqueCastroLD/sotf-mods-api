/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown>, name: NonNullable<unknown> }} Ranger_Sanction_DoneInputs */

const en_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const es_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const de_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const fr_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} : ${i?.name}`)
};

const it_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const nl_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const pl_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const pt_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const ru_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const sv_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const tr_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}: ${i?.name}`)
};

const zh_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}：${i?.name}`)
};

const ja_ranger_sanction_done = /** @type {(inputs: Ranger_Sanction_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}：${i?.name}`)
};

/**
* | output |
* | --- |
* | "{kind}: {name}" |
*
* @param {Ranger_Sanction_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_done = /** @type {((inputs: Ranger_Sanction_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_done(inputs)
	if (locale === "de") return de_ranger_sanction_done(inputs)
	if (locale === "fr") return fr_ranger_sanction_done(inputs)
	if (locale === "it") return it_ranger_sanction_done(inputs)
	if (locale === "nl") return nl_ranger_sanction_done(inputs)
	if (locale === "pl") return pl_ranger_sanction_done(inputs)
	if (locale === "pt") return pt_ranger_sanction_done(inputs)
	if (locale === "ru") return ru_ranger_sanction_done(inputs)
	if (locale === "sv") return sv_ranger_sanction_done(inputs)
	if (locale === "tr") return tr_ranger_sanction_done(inputs)
	if (locale === "zh") return zh_ranger_sanction_done(inputs)
	if (locale === "ja") return ja_ranger_sanction_done(inputs)
	return en_ranger_sanction_done(inputs)
});
