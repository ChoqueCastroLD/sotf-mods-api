/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_ExpiredInputs */

const en_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This export link has expired.`)
};

const es_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este enlace de exportación ha caducado.`)
};

const de_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Export-Link ist abgelaufen.`)
};

const fr_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce lien d’export a expiré.`)
};

const it_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo link di esportazione è scaduto.`)
};

const nl_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze exportlink is verlopen.`)
};

const pl_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten link do eksportu wygasł.`)
};

const pt_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este link de exportação expirou.`)
};

const ru_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок действия этой ссылки истёк.`)
};

const sv_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här exportlänken har gått ut.`)
};

const tr_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dışa aktarım bağlantısının süresi doldu.`)
};

const zh_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此导出链接已过期。`)
};

const ja_settings_export_expired = /** @type {(inputs: Settings_Export_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このエクスポートのリンクは期限切れです。`)
};

/**
* | output |
* | --- |
* | "This export link has expired." |
*
* @param {Settings_Export_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_expired = /** @type {((inputs?: Settings_Export_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_expired(inputs)
	if (locale === "de") return de_settings_export_expired(inputs)
	if (locale === "fr") return fr_settings_export_expired(inputs)
	if (locale === "it") return it_settings_export_expired(inputs)
	if (locale === "nl") return nl_settings_export_expired(inputs)
	if (locale === "pl") return pl_settings_export_expired(inputs)
	if (locale === "pt") return pt_settings_export_expired(inputs)
	if (locale === "ru") return ru_settings_export_expired(inputs)
	if (locale === "sv") return sv_settings_export_expired(inputs)
	if (locale === "tr") return tr_settings_export_expired(inputs)
	if (locale === "zh") return zh_settings_export_expired(inputs)
	if (locale === "ja") return ja_settings_export_expired(inputs)
	return en_settings_export_expired(inputs)
});
