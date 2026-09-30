/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_False_PositiveInputs */

const en_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified false positive`)
};

const es_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo verificado`)
};

const de_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigter Fehlalarm`)
};

const fr_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faux positif vérifié`)
};

const it_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo verificato`)
};

const nl_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerd vals positief`)
};

const pl_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdzony fałszywy alarm`)
};

const pt_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo verificado`)
};

const ru_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтверждённое ложное срабатывание`)
};

const sv_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierat falsklarm`)
};

const tr_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış yanlış pozitif`)
};

const zh_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已确认误报`)
};

const ja_ranger_scan_false_positive = /** @type {(inputs: Ranger_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認済みの誤検出`)
};

/**
* | output |
* | --- |
* | "Verified false positive" |
*
* @param {Ranger_Scan_False_PositiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_false_positive = /** @type {((inputs?: Ranger_Scan_False_PositiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_False_PositiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_false_positive(inputs)
	if (locale === "de") return de_ranger_scan_false_positive(inputs)
	if (locale === "fr") return fr_ranger_scan_false_positive(inputs)
	if (locale === "it") return it_ranger_scan_false_positive(inputs)
	if (locale === "nl") return nl_ranger_scan_false_positive(inputs)
	if (locale === "pl") return pl_ranger_scan_false_positive(inputs)
	if (locale === "pt") return pt_ranger_scan_false_positive(inputs)
	if (locale === "ru") return ru_ranger_scan_false_positive(inputs)
	if (locale === "sv") return sv_ranger_scan_false_positive(inputs)
	if (locale === "tr") return tr_ranger_scan_false_positive(inputs)
	if (locale === "zh") return zh_ranger_scan_false_positive(inputs)
	if (locale === "ja") return ja_ranger_scan_false_positive(inputs)
	return en_ranger_scan_false_positive(inputs)
});
