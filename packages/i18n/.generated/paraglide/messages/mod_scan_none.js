/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_NoneInputs */

const en_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No security report for this file yet.`)
};

const es_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este archivo todavía no tiene informe de seguridad.`)
};

const de_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für diese Datei gibt es noch keinen Sicherheitsbericht.`)
};

const fr_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de rapport de sécurité pour ce fichier.`)
};

const it_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c’è ancora un rapporto di sicurezza per questo file.`)
};

const nl_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen beveiligingsrapport voor dit bestand.`)
};

const pl_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten plik nie ma jeszcze raportu bezpieczeństwa.`)
};

const pt_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há relatório de segurança para este arquivo.`)
};

const ru_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этого файла ещё нет отчёта о безопасности.`)
};

const sv_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns ingen säkerhetsrapport för filen än.`)
};

const tr_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya için henüz güvenlik raporu yok.`)
};

const zh_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此文件还没有安全报告。`)
};

const ja_mod_scan_none = /** @type {(inputs: Mod_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイルのセキュリティレポートはまだありません。`)
};

/**
* | output |
* | --- |
* | "No security report for this file yet." |
*
* @param {Mod_Scan_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_none = /** @type {((inputs?: Mod_Scan_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_none(inputs)
	if (locale === "de") return de_mod_scan_none(inputs)
	if (locale === "fr") return fr_mod_scan_none(inputs)
	if (locale === "it") return it_mod_scan_none(inputs)
	if (locale === "nl") return nl_mod_scan_none(inputs)
	if (locale === "pl") return pl_mod_scan_none(inputs)
	if (locale === "pt") return pt_mod_scan_none(inputs)
	if (locale === "ru") return ru_mod_scan_none(inputs)
	if (locale === "sv") return sv_mod_scan_none(inputs)
	if (locale === "tr") return tr_mod_scan_none(inputs)
	if (locale === "zh") return zh_mod_scan_none(inputs)
	if (locale === "ja") return ja_mod_scan_none(inputs)
	return en_mod_scan_none(inputs)
});
