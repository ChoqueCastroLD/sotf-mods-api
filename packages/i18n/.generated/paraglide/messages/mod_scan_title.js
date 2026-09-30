/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_TitleInputs */

const en_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security scan`)
};

const es_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Análisis de seguridad`)
};

const de_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheitsscan`)
};

const fr_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyse de sécurité`)
};

const it_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scansione di sicurezza`)
};

const nl_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiligingsscan`)
};

const pl_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skan bezpieczeństwa`)
};

const pt_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação de segurança`)
};

const ru_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка безопасности`)
};

const sv_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetsskanning`)
};

const tr_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik taraması`)
};

const zh_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全扫描`)
};

const ja_mod_scan_title = /** @type {(inputs: Mod_Scan_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティスキャン`)
};

/**
* | output |
* | --- |
* | "Security scan" |
*
* @param {Mod_Scan_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_title = /** @type {((inputs?: Mod_Scan_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_title(inputs)
	if (locale === "de") return de_mod_scan_title(inputs)
	if (locale === "fr") return fr_mod_scan_title(inputs)
	if (locale === "it") return it_mod_scan_title(inputs)
	if (locale === "nl") return nl_mod_scan_title(inputs)
	if (locale === "pl") return pl_mod_scan_title(inputs)
	if (locale === "pt") return pt_mod_scan_title(inputs)
	if (locale === "ru") return ru_mod_scan_title(inputs)
	if (locale === "sv") return sv_mod_scan_title(inputs)
	if (locale === "tr") return tr_mod_scan_title(inputs)
	if (locale === "zh") return zh_mod_scan_title(inputs)
	if (locale === "ja") return ja_mod_scan_title(inputs)
	return en_mod_scan_title(inputs)
});
