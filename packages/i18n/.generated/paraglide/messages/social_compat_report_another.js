/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Report_AnotherInputs */

const en_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report another setup`)
};

const es_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar otra configuración`)
};

const de_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anderes Setup melden`)
};

const fr_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler une autre configuration`)
};

const it_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala un’altra configurazione`)
};

const nl_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere opstelling melden`)
};

const pl_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś inną konfigurację`)
};

const pt_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar outra configuração`)
};

const ru_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить о другой конфигурации`)
};

const sv_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera en annan uppsättning`)
};

const tr_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir kurulum bildir`)
};

const zh_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告其他环境`)
};

const ja_social_compat_report_another = /** @type {(inputs: Social_Compat_Report_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別の環境を報告`)
};

/**
* | output |
* | --- |
* | "Report another setup" |
*
* @param {Social_Compat_Report_AnotherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_report_another = /** @type {((inputs?: Social_Compat_Report_AnotherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Report_AnotherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_report_another(inputs)
	if (locale === "de") return de_social_compat_report_another(inputs)
	if (locale === "fr") return fr_social_compat_report_another(inputs)
	if (locale === "it") return it_social_compat_report_another(inputs)
	if (locale === "nl") return nl_social_compat_report_another(inputs)
	if (locale === "pl") return pl_social_compat_report_another(inputs)
	if (locale === "pt") return pt_social_compat_report_another(inputs)
	if (locale === "ru") return ru_social_compat_report_another(inputs)
	if (locale === "sv") return sv_social_compat_report_another(inputs)
	if (locale === "tr") return tr_social_compat_report_another(inputs)
	if (locale === "zh") return zh_social_compat_report_another(inputs)
	if (locale === "ja") return ja_social_compat_report_another(inputs)
	return en_social_compat_report_another(inputs)
});
