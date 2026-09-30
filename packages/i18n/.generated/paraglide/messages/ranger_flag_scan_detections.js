/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Scan_DetectionsInputs */

const en_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security scan detections`)
};

const es_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detecciones del análisis de seguridad`)
};

const de_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treffer im Sicherheitsscan`)
};

const fr_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détections de l’analyse de sécurité`)
};

const it_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rilevamenti dell’analisi di sicurezza`)
};

const nl_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detecties van de beveiligingsscan`)
};

const pl_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wykrycia skanu bezpieczeństwa`)
};

const pt_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detecções da análise de segurança`)
};

const ru_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срабатывания сканирования безопасности`)
};

const sv_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Träffar i säkerhetsskanningen`)
};

const tr_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik taraması tespitleri`)
};

const zh_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全扫描检出`)
};

const ja_ranger_flag_scan_detections = /** @type {(inputs: Ranger_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティスキャンの検出`)
};

/**
* | output |
* | --- |
* | "Security scan detections" |
*
* @param {Ranger_Flag_Scan_DetectionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_scan_detections = /** @type {((inputs?: Ranger_Flag_Scan_DetectionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Scan_DetectionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_scan_detections(inputs)
	if (locale === "de") return de_ranger_flag_scan_detections(inputs)
	if (locale === "fr") return fr_ranger_flag_scan_detections(inputs)
	if (locale === "it") return it_ranger_flag_scan_detections(inputs)
	if (locale === "nl") return nl_ranger_flag_scan_detections(inputs)
	if (locale === "pl") return pl_ranger_flag_scan_detections(inputs)
	if (locale === "pt") return pt_ranger_flag_scan_detections(inputs)
	if (locale === "ru") return ru_ranger_flag_scan_detections(inputs)
	if (locale === "sv") return sv_ranger_flag_scan_detections(inputs)
	if (locale === "tr") return tr_ranger_flag_scan_detections(inputs)
	if (locale === "zh") return zh_ranger_flag_scan_detections(inputs)
	if (locale === "ja") return ja_ranger_flag_scan_detections(inputs)
	return en_ranger_flag_scan_detections(inputs)
});
