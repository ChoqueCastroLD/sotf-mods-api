/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_Manifest_OkInputs */

const en_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json valid`)
};

const es_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json válido`)
};

const de_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json gültig`)
};

const fr_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json valide`)
};

const it_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json valido`)
};

const nl_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json geldig`)
};

const pl_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json poprawny`)
};

const pt_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json válido`)
};

const ru_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json корректен`)
};

const sv_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json giltig`)
};

const tr_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json geçerli`)
};

const zh_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json 有效`)
};

const ja_ranger_checks_manifest_ok = /** @type {(inputs: Ranger_Checks_Manifest_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json は有効`)
};

/**
* | output |
* | --- |
* | "manifest.json valid" |
*
* @param {Ranger_Checks_Manifest_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_manifest_ok = /** @type {((inputs?: Ranger_Checks_Manifest_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_Manifest_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_manifest_ok(inputs)
	if (locale === "de") return de_ranger_checks_manifest_ok(inputs)
	if (locale === "fr") return fr_ranger_checks_manifest_ok(inputs)
	if (locale === "it") return it_ranger_checks_manifest_ok(inputs)
	if (locale === "nl") return nl_ranger_checks_manifest_ok(inputs)
	if (locale === "pl") return pl_ranger_checks_manifest_ok(inputs)
	if (locale === "pt") return pt_ranger_checks_manifest_ok(inputs)
	if (locale === "ru") return ru_ranger_checks_manifest_ok(inputs)
	if (locale === "sv") return sv_ranger_checks_manifest_ok(inputs)
	if (locale === "tr") return tr_ranger_checks_manifest_ok(inputs)
	if (locale === "zh") return zh_ranger_checks_manifest_ok(inputs)
	if (locale === "ja") return ja_ranger_checks_manifest_ok(inputs)
	return en_ranger_checks_manifest_ok(inputs)
});
