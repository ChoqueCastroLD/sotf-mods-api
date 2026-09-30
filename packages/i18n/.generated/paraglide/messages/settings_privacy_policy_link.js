/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_Policy_LinkInputs */

const en_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy policy`)
};

const es_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de privacidad`)
};

const de_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenschutzerklärung`)
};

const fr_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique de confidentialité`)
};

const it_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informativa sulla privacy`)
};

const nl_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacybeleid`)
};

const pl_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polityka prywatności`)
};

const pt_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de privacidade`)
};

const ru_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Политика конфиденциальности`)
};

const sv_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritetspolicy`)
};

const tr_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik politikası`)
};

const zh_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私政策`)
};

const ja_settings_privacy_policy_link = /** @type {(inputs: Settings_Privacy_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシーポリシー`)
};

/**
* | output |
* | --- |
* | "Privacy policy" |
*
* @param {Settings_Privacy_Policy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_policy_link = /** @type {((inputs?: Settings_Privacy_Policy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_Policy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_policy_link(inputs)
	if (locale === "de") return de_settings_privacy_policy_link(inputs)
	if (locale === "fr") return fr_settings_privacy_policy_link(inputs)
	if (locale === "it") return it_settings_privacy_policy_link(inputs)
	if (locale === "nl") return nl_settings_privacy_policy_link(inputs)
	if (locale === "pl") return pl_settings_privacy_policy_link(inputs)
	if (locale === "pt") return pt_settings_privacy_policy_link(inputs)
	if (locale === "ru") return ru_settings_privacy_policy_link(inputs)
	if (locale === "sv") return sv_settings_privacy_policy_link(inputs)
	if (locale === "tr") return tr_settings_privacy_policy_link(inputs)
	if (locale === "zh") return zh_settings_privacy_policy_link(inputs)
	if (locale === "ja") return ja_settings_privacy_policy_link(inputs)
	return en_settings_privacy_policy_link(inputs)
});
