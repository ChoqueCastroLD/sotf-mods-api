/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_VerdictInputs */

const en_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New verdict`)
};

const es_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo veredicto`)
};

const de_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Urteil`)
};

const fr_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau verdict`)
};

const it_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo verdetto`)
};

const nl_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw oordeel`)
};

const pl_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy werdykt`)
};

const pt_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo veredito`)
};

const ru_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый вердикт`)
};

const sv_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt utlåtande`)
};

const tr_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni karar`)
};

const zh_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新判定`)
};

const ja_ranger_scan_override_verdict = /** @type {(inputs: Ranger_Scan_Override_VerdictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい判定`)
};

/**
* | output |
* | --- |
* | "New verdict" |
*
* @param {Ranger_Scan_Override_VerdictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_verdict = /** @type {((inputs?: Ranger_Scan_Override_VerdictInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_VerdictInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_verdict(inputs)
	if (locale === "de") return de_ranger_scan_override_verdict(inputs)
	if (locale === "fr") return fr_ranger_scan_override_verdict(inputs)
	if (locale === "it") return it_ranger_scan_override_verdict(inputs)
	if (locale === "nl") return nl_ranger_scan_override_verdict(inputs)
	if (locale === "pl") return pl_ranger_scan_override_verdict(inputs)
	if (locale === "pt") return pt_ranger_scan_override_verdict(inputs)
	if (locale === "ru") return ru_ranger_scan_override_verdict(inputs)
	if (locale === "sv") return sv_ranger_scan_override_verdict(inputs)
	if (locale === "tr") return tr_ranger_scan_override_verdict(inputs)
	if (locale === "zh") return zh_ranger_scan_override_verdict(inputs)
	if (locale === "ja") return ja_ranger_scan_override_verdict(inputs)
	return en_ranger_scan_override_verdict(inputs)
});
