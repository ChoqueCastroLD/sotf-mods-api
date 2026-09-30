/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_Tips_TitleInputs */

const en_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keeping your camp safe`)
};

const es_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantén tu campamento a salvo`)
};

const de_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So bleibt dein Lager sicher`)
};

const fr_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Garder votre camp en sécurité`)
};

const it_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tieni al sicuro il tuo campo`)
};

const nl_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Houd je kamp veilig`)
};

const pl_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak dbać o bezpieczeństwo obozu`)
};

const pt_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantenha seu acampamento seguro`)
};

const ru_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как защитить свой лагерь`)
};

const sv_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Håll ditt läger säkert`)
};

const tr_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampını güvende tut`)
};

const zh_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保护好你的营地`)
};

const ja_settings_security_tips_title = /** @type {(inputs: Settings_Security_Tips_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプを安全に保つために`)
};

/**
* | output |
* | --- |
* | "Keeping your camp safe" |
*
* @param {Settings_Security_Tips_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_tips_title = /** @type {((inputs?: Settings_Security_Tips_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tips_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_tips_title(inputs)
	if (locale === "de") return de_settings_security_tips_title(inputs)
	if (locale === "fr") return fr_settings_security_tips_title(inputs)
	if (locale === "it") return it_settings_security_tips_title(inputs)
	if (locale === "nl") return nl_settings_security_tips_title(inputs)
	if (locale === "pl") return pl_settings_security_tips_title(inputs)
	if (locale === "pt") return pt_settings_security_tips_title(inputs)
	if (locale === "ru") return ru_settings_security_tips_title(inputs)
	if (locale === "sv") return sv_settings_security_tips_title(inputs)
	if (locale === "tr") return tr_settings_security_tips_title(inputs)
	if (locale === "zh") return zh_settings_security_tips_title(inputs)
	if (locale === "ja") return ja_settings_security_tips_title(inputs)
	return en_settings_security_tips_title(inputs)
});
