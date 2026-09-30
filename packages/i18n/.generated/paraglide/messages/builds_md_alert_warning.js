/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_Alert_WarningInputs */

const en_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const es_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const de_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnung`)
};

const fr_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

const it_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avviso`)
};

const nl_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarschuwing`)
};

const pl_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenie`)
};

const pt_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const ru_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

const sv_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varning`)
};

const tr_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarı`)
};

const zh_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_builds_md_alert_warning = /** @type {(inputs: Builds_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Builds_Md_Alert_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_alert_warning = /** @type {((inputs?: Builds_Md_Alert_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_Alert_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_alert_warning(inputs)
	if (locale === "de") return de_builds_md_alert_warning(inputs)
	if (locale === "fr") return fr_builds_md_alert_warning(inputs)
	if (locale === "it") return it_builds_md_alert_warning(inputs)
	if (locale === "nl") return nl_builds_md_alert_warning(inputs)
	if (locale === "pl") return pl_builds_md_alert_warning(inputs)
	if (locale === "pt") return pt_builds_md_alert_warning(inputs)
	if (locale === "ru") return ru_builds_md_alert_warning(inputs)
	if (locale === "sv") return sv_builds_md_alert_warning(inputs)
	if (locale === "tr") return tr_builds_md_alert_warning(inputs)
	if (locale === "zh") return zh_builds_md_alert_warning(inputs)
	if (locale === "ja") return ja_builds_md_alert_warning(inputs)
	return en_builds_md_alert_warning(inputs)
});
