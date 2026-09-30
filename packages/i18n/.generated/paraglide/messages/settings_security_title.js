/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_TitleInputs */

const en_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
};

const es_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguridad`)
};

const de_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheit`)
};

const fr_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sécurité`)
};

const it_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicurezza`)
};

const nl_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiliging`)
};

const pl_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezpieczeństwo`)
};

const pt_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segurança`)
};

const ru_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Безопасность`)
};

const sv_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhet`)
};

const tr_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik`)
};

const zh_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全`)
};

const ja_settings_security_title = /** @type {(inputs: Settings_Security_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティ`)
};

/**
* | output |
* | --- |
* | "Security" |
*
* @param {Settings_Security_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_title = /** @type {((inputs?: Settings_Security_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_title(inputs)
	if (locale === "de") return de_settings_security_title(inputs)
	if (locale === "fr") return fr_settings_security_title(inputs)
	if (locale === "it") return it_settings_security_title(inputs)
	if (locale === "nl") return nl_settings_security_title(inputs)
	if (locale === "pl") return pl_settings_security_title(inputs)
	if (locale === "pt") return pt_settings_security_title(inputs)
	if (locale === "ru") return ru_settings_security_title(inputs)
	if (locale === "sv") return sv_settings_security_title(inputs)
	if (locale === "tr") return tr_settings_security_title(inputs)
	if (locale === "zh") return zh_settings_security_title(inputs)
	if (locale === "ja") return ja_settings_security_title(inputs)
	return en_settings_security_title(inputs)
});
