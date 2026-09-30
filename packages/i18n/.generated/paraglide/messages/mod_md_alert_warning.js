/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_Alert_WarningInputs */

const en_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const es_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertencia`)
};

const de_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnung`)
};

const fr_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

const it_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avviso`)
};

const nl_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarschuwing`)
};

const pl_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenie`)
};

const pt_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const ru_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

const sv_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varning`)
};

const tr_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarı`)
};

const zh_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_mod_md_alert_warning = /** @type {(inputs: Mod_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Mod_Md_Alert_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_alert_warning = /** @type {((inputs?: Mod_Md_Alert_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_alert_warning(inputs)
	if (locale === "de") return de_mod_md_alert_warning(inputs)
	if (locale === "fr") return fr_mod_md_alert_warning(inputs)
	if (locale === "it") return it_mod_md_alert_warning(inputs)
	if (locale === "nl") return nl_mod_md_alert_warning(inputs)
	if (locale === "pl") return pl_mod_md_alert_warning(inputs)
	if (locale === "pt") return pt_mod_md_alert_warning(inputs)
	if (locale === "ru") return ru_mod_md_alert_warning(inputs)
	if (locale === "sv") return sv_mod_md_alert_warning(inputs)
	if (locale === "tr") return tr_mod_md_alert_warning(inputs)
	if (locale === "zh") return zh_mod_md_alert_warning(inputs)
	if (locale === "ja") return ja_mod_md_alert_warning(inputs)
	return en_mod_md_alert_warning(inputs)
});
