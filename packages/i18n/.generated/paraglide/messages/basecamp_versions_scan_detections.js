/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ positives: NonNullable<unknown>, total: NonNullable<unknown> }} Basecamp_Versions_Scan_DetectionsInputs */

const en_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} of ${i?.total} engines`)
};

const es_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} de ${i?.total} motores`)
};

const de_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} von ${i?.total} Scannern`)
};

const fr_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} moteurs sur ${i?.total}`)
};

const it_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} motori su ${i?.total}`)
};

const nl_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} van ${i?.total} scanners`)
};

const pl_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} z ${i?.total} silników`)
};

const pt_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} de ${i?.total} mecanismos`)
};

const ru_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} из ${i?.total} движков`)
};

const sv_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.positives} av ${i?.total} motorer`)
};

const tr_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} motordan ${i?.positives}`)
};

const zh_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 个引擎中 ${i?.positives} 个报毒`)
};

const ja_basecamp_versions_scan_detections = /** @type {(inputs: Basecamp_Versions_Scan_DetectionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} エンジン中 ${i?.positives} 件`)
};

/**
* | output |
* | --- |
* | "{positives} of {total} engines" |
*
* @param {Basecamp_Versions_Scan_DetectionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_scan_detections = /** @type {((inputs: Basecamp_Versions_Scan_DetectionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Scan_DetectionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_scan_detections(inputs)
	if (locale === "de") return de_basecamp_versions_scan_detections(inputs)
	if (locale === "fr") return fr_basecamp_versions_scan_detections(inputs)
	if (locale === "it") return it_basecamp_versions_scan_detections(inputs)
	if (locale === "nl") return nl_basecamp_versions_scan_detections(inputs)
	if (locale === "pl") return pl_basecamp_versions_scan_detections(inputs)
	if (locale === "pt") return pt_basecamp_versions_scan_detections(inputs)
	if (locale === "ru") return ru_basecamp_versions_scan_detections(inputs)
	if (locale === "sv") return sv_basecamp_versions_scan_detections(inputs)
	if (locale === "tr") return tr_basecamp_versions_scan_detections(inputs)
	if (locale === "zh") return zh_basecamp_versions_scan_detections(inputs)
	if (locale === "ja") return ja_basecamp_versions_scan_detections(inputs)
	return en_basecamp_versions_scan_detections(inputs)
});
