/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Scan_DetectionsInputs */

const en_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The security scan reported detections.`)
};

const es_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El análisis de seguridad detectó amenazas.`)
};

const de_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Sicherheitsscan hat Funde gemeldet.`)
};

const fr_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’analyse de sécurité a signalé des détections.`)
};

const it_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La scansione di sicurezza ha segnalato rilevamenti.`)
};

const nl_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beveiligingsscan meldde detecties.`)
};

const pl_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skan bezpieczeństwa zgłosił wykrycia.`)
};

const pt_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação de segurança relatou detecções.`)
};

const ru_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка безопасности нашла угрозы.`)
};

const sv_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetsskanningen rapporterade fynd.`)
};

const tr_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik taraması tespit bildirdi.`)
};

const zh_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全扫描报告了检出项。`)
};

const ja_upload_flag_scan_detections = /** @type {(inputs: Upload_Flag_Scan_DetectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティスキャンで検出がありました。`)
};

/**
* | output |
* | --- |
* | "The security scan reported detections." |
*
* @param {Upload_Flag_Scan_DetectionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_scan_detections = /** @type {((inputs?: Upload_Flag_Scan_DetectionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Scan_DetectionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_scan_detections(inputs)
	if (locale === "de") return de_upload_flag_scan_detections(inputs)
	if (locale === "fr") return fr_upload_flag_scan_detections(inputs)
	if (locale === "it") return it_upload_flag_scan_detections(inputs)
	if (locale === "nl") return nl_upload_flag_scan_detections(inputs)
	if (locale === "pl") return pl_upload_flag_scan_detections(inputs)
	if (locale === "pt") return pt_upload_flag_scan_detections(inputs)
	if (locale === "ru") return ru_upload_flag_scan_detections(inputs)
	if (locale === "sv") return sv_upload_flag_scan_detections(inputs)
	if (locale === "tr") return tr_upload_flag_scan_detections(inputs)
	if (locale === "zh") return zh_upload_flag_scan_detections(inputs)
	if (locale === "ja") return ja_upload_flag_scan_detections(inputs)
	return en_upload_flag_scan_detections(inputs)
});
