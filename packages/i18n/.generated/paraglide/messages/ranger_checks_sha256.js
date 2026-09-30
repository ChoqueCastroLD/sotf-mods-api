/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hash: NonNullable<unknown> }} Ranger_Checks_Sha256Inputs */

const en_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const es_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const de_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const fr_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const it_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const nl_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const pl_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const pt_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const ru_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const sv_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const tr_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const zh_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

const ja_ranger_checks_sha256 = /** @type {(inputs: Ranger_Checks_Sha256Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SHA-256 ${i?.hash}`)
};

/**
* | output |
* | --- |
* | "SHA-256 {hash}" |
*
* @param {Ranger_Checks_Sha256Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_sha256 = /** @type {((inputs: Ranger_Checks_Sha256Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_Sha256Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_sha256(inputs)
	if (locale === "de") return de_ranger_checks_sha256(inputs)
	if (locale === "fr") return fr_ranger_checks_sha256(inputs)
	if (locale === "it") return it_ranger_checks_sha256(inputs)
	if (locale === "nl") return nl_ranger_checks_sha256(inputs)
	if (locale === "pl") return pl_ranger_checks_sha256(inputs)
	if (locale === "pt") return pt_ranger_checks_sha256(inputs)
	if (locale === "ru") return ru_ranger_checks_sha256(inputs)
	if (locale === "sv") return sv_ranger_checks_sha256(inputs)
	if (locale === "tr") return tr_ranger_checks_sha256(inputs)
	if (locale === "zh") return zh_ranger_checks_sha256(inputs)
	if (locale === "ja") return ja_ranger_checks_sha256(inputs)
	return en_ranger_checks_sha256(inputs)
});
