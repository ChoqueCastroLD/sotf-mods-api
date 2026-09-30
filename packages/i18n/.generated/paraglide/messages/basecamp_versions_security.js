/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_SecurityInputs */

const en_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security report`)
};

const es_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe de seguridad`)
};

const de_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheitsbericht`)
};

const fr_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de sécurité`)
};

const it_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto di sicurezza`)
};

const nl_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiligingsrapport`)
};

const pl_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport bezpieczeństwa`)
};

const pt_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de segurança`)
};

const ru_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёт о безопасности`)
};

const sv_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetsrapport`)
};

const tr_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik raporu`)
};

const zh_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全报告`)
};

const ja_basecamp_versions_security = /** @type {(inputs: Basecamp_Versions_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティレポート`)
};

/**
* | output |
* | --- |
* | "Security report" |
*
* @param {Basecamp_Versions_SecurityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_security = /** @type {((inputs?: Basecamp_Versions_SecurityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_SecurityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_security(inputs)
	if (locale === "de") return de_basecamp_versions_security(inputs)
	if (locale === "fr") return fr_basecamp_versions_security(inputs)
	if (locale === "it") return it_basecamp_versions_security(inputs)
	if (locale === "nl") return nl_basecamp_versions_security(inputs)
	if (locale === "pl") return pl_basecamp_versions_security(inputs)
	if (locale === "pt") return pt_basecamp_versions_security(inputs)
	if (locale === "ru") return ru_basecamp_versions_security(inputs)
	if (locale === "sv") return sv_basecamp_versions_security(inputs)
	if (locale === "tr") return tr_basecamp_versions_security(inputs)
	if (locale === "zh") return zh_basecamp_versions_security(inputs)
	if (locale === "ja") return ja_basecamp_versions_security(inputs)
	return en_basecamp_versions_security(inputs)
});
