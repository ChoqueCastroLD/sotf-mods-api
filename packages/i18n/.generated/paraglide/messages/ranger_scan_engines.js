/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ positives: NonNullable<unknown>, total: NonNullable<unknown> }} Ranger_Scan_EnginesInputs */

const en_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} of ${i?.total} engines`)
};

const es_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} de ${i?.total} motores`)
};

const de_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} von ${i?.total} Engines`)
};

const fr_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} moteurs sur ${i?.total}`)
};

const it_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} motori su ${i?.total}`)
};

const nl_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} van ${i?.total} engines`)
};

const pl_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} z ${i?.total} silników`)
};

const pt_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} de ${i?.total} mecanismos`)
};

const ru_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} из ${i?.total} движков`)
};

const sv_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} av ${i?.total} motorer`)
};

const tr_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} motordan ${i?.positives}`)
};

const zh_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 个引擎中 ${i?.positives} 个`)
};

const ja_ranger_scan_engines = /** @type {(inputs: Ranger_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} エンジン中 ${i?.positives}`)
};

/**
* | output |
* | --- |
* | "{positives} of {total} engines" |
*
* @param {Ranger_Scan_EnginesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_engines = /** @type {((inputs: Ranger_Scan_EnginesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_EnginesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_engines(inputs)
	if (locale === "de") return de_ranger_scan_engines(inputs)
	if (locale === "fr") return fr_ranger_scan_engines(inputs)
	if (locale === "it") return it_ranger_scan_engines(inputs)
	if (locale === "nl") return nl_ranger_scan_engines(inputs)
	if (locale === "pl") return pl_ranger_scan_engines(inputs)
	if (locale === "pt") return pt_ranger_scan_engines(inputs)
	if (locale === "ru") return ru_ranger_scan_engines(inputs)
	if (locale === "sv") return sv_ranger_scan_engines(inputs)
	if (locale === "tr") return tr_ranger_scan_engines(inputs)
	if (locale === "zh") return zh_ranger_scan_engines(inputs)
	if (locale === "ja") return ja_ranger_scan_engines(inputs)
	return en_ranger_scan_engines(inputs)
});
