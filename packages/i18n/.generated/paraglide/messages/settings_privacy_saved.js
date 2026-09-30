/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_SavedInputs */

const en_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy settings saved`)
};

const es_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de privacidad guardados`)
};

const de_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privatsphäre-Einstellungen gespeichert`)
};

const fr_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres de confidentialité enregistrés`)
};

const it_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni della privacy salvate`)
};

const nl_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy-instellingen opgeslagen`)
};

const pl_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ustawienia prywatności`)
};

const pt_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações de privacidade salvas`)
};

const ru_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки приватности сохранены`)
};

const sv_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritetsinställningarna sparade`)
};

const tr_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik ayarları kaydedildi`)
};

const zh_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私设置已保存`)
};

const ja_settings_privacy_saved = /** @type {(inputs: Settings_Privacy_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシー設定を保存しました`)
};

/**
* | output |
* | --- |
* | "Privacy settings saved" |
*
* @param {Settings_Privacy_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_saved = /** @type {((inputs?: Settings_Privacy_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_saved(inputs)
	if (locale === "de") return de_settings_privacy_saved(inputs)
	if (locale === "fr") return fr_settings_privacy_saved(inputs)
	if (locale === "it") return it_settings_privacy_saved(inputs)
	if (locale === "nl") return nl_settings_privacy_saved(inputs)
	if (locale === "pl") return pl_settings_privacy_saved(inputs)
	if (locale === "pt") return pt_settings_privacy_saved(inputs)
	if (locale === "ru") return ru_settings_privacy_saved(inputs)
	if (locale === "sv") return sv_settings_privacy_saved(inputs)
	if (locale === "tr") return tr_settings_privacy_saved(inputs)
	if (locale === "zh") return zh_settings_privacy_saved(inputs)
	if (locale === "ja") return ja_settings_privacy_saved(inputs)
	return en_settings_privacy_saved(inputs)
});
