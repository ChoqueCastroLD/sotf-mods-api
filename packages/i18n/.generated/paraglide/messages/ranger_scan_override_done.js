/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ verdict: NonNullable<unknown> }} Ranger_Scan_Override_DoneInputs */

const en_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scan verdict set to «${i?.verdict}».`)
};

const es_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veredicto del análisis: «${i?.verdict}».`)
};

const de_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scan-Urteil: „${i?.verdict}“.`)
};

const fr_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdict de l’analyse : « ${i?.verdict} ».`)
};

const it_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdetto dell’analisi: «${i?.verdict}».`)
};

const nl_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scanoordeel: ‘${i?.verdict}’.`)
};

const pl_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werdykt skanu: „${i?.verdict}”.`)
};

const pt_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veredito da análise: “${i?.verdict}”.`)
};

const ru_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вердикт сканирования: «${i?.verdict}».`)
};

const sv_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skanningens utlåtande: ”${i?.verdict}”.`)
};

const tr_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarama kararı: “${i?.verdict}”.`)
};

const zh_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`扫描判定：“${i?.verdict}”。`)
};

const ja_ranger_scan_override_done = /** @type {(inputs: Ranger_Scan_Override_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`スキャン判定：「${i?.verdict}」。`)
};

/**
* | output |
* | --- |
* | "Scan verdict set to «{verdict}»." |
*
* @param {Ranger_Scan_Override_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_done = /** @type {((inputs: Ranger_Scan_Override_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_done(inputs)
	if (locale === "de") return de_ranger_scan_override_done(inputs)
	if (locale === "fr") return fr_ranger_scan_override_done(inputs)
	if (locale === "it") return it_ranger_scan_override_done(inputs)
	if (locale === "nl") return nl_ranger_scan_override_done(inputs)
	if (locale === "pl") return pl_ranger_scan_override_done(inputs)
	if (locale === "pt") return pt_ranger_scan_override_done(inputs)
	if (locale === "ru") return ru_ranger_scan_override_done(inputs)
	if (locale === "sv") return sv_ranger_scan_override_done(inputs)
	if (locale === "tr") return tr_ranger_scan_override_done(inputs)
	if (locale === "zh") return zh_ranger_scan_override_done(inputs)
	if (locale === "ja") return ja_ranger_scan_override_done(inputs)
	return en_ranger_scan_override_done(inputs)
});
