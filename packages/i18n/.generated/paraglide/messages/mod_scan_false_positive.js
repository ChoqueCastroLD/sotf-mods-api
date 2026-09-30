/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_False_PositiveInputs */

const en_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagged by some engines, cleared by a ranger`)
};

const es_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado por algunos motores, aprobado por un guardabosques`)
};

const de_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von einigen Engines markiert, von einem Ranger freigegeben`)
};

const fr_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalé par certains moteurs, validé par un ranger`)
};

const it_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalato da alcuni motori, approvato da un ranger`)
};

const nl_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemarkeerd door sommige engines, vrijgegeven door een ranger`)
};

const pl_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczony przez niektóre silniki, zatwierdzony przez strażnika`)
};

const pt_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado por alguns antivírus, liberado por um guarda`)
};

const ru_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечен некоторыми антивирусами, одобрен рейнджером`)
};

const sv_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flaggad av vissa motorer, godkänd av en ranger`)
};

const tr_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı motorlar işaretledi, bir korucu onayladı`)
};

const zh_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分引擎报毒，已由护林员确认安全`)
};

const ja_mod_scan_false_positive = /** @type {(inputs: Mod_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部のエンジンが検出、レンジャーが安全と判断`)
};

/**
* | output |
* | --- |
* | "Flagged by some engines, cleared by a ranger" |
*
* @param {Mod_Scan_False_PositiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_false_positive = /** @type {((inputs?: Mod_Scan_False_PositiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_False_PositiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_false_positive(inputs)
	if (locale === "de") return de_mod_scan_false_positive(inputs)
	if (locale === "fr") return fr_mod_scan_false_positive(inputs)
	if (locale === "it") return it_mod_scan_false_positive(inputs)
	if (locale === "nl") return nl_mod_scan_false_positive(inputs)
	if (locale === "pl") return pl_mod_scan_false_positive(inputs)
	if (locale === "pt") return pt_mod_scan_false_positive(inputs)
	if (locale === "ru") return ru_mod_scan_false_positive(inputs)
	if (locale === "sv") return sv_mod_scan_false_positive(inputs)
	if (locale === "tr") return tr_mod_scan_false_positive(inputs)
	if (locale === "zh") return zh_mod_scan_false_positive(inputs)
	if (locale === "ja") return ja_mod_scan_false_positive(inputs)
	return en_mod_scan_false_positive(inputs)
});
