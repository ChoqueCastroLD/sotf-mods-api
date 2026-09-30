/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_KitsInputs */

const en_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show my kits`)
};

const es_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mis kits`)
};

const de_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Kits zeigen`)
};

const fr_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher mes kits`)
};

const it_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra i miei kit`)
};

const nl_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn kits tonen`)
};

const pl_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuj moje zestawy`)
};

const pt_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar meus kits`)
};

const ru_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать мои наборы`)
};

const sv_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa mina kit`)
};

const tr_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlerimi göster`)
};

const zh_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示我的套装`)
};

const ja_settings_show_kits = /** @type {(inputs: Settings_Show_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを表示`)
};

/**
* | output |
* | --- |
* | "Show my kits" |
*
* @param {Settings_Show_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_kits = /** @type {((inputs?: Settings_Show_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_kits(inputs)
	if (locale === "de") return de_settings_show_kits(inputs)
	if (locale === "fr") return fr_settings_show_kits(inputs)
	if (locale === "it") return it_settings_show_kits(inputs)
	if (locale === "nl") return nl_settings_show_kits(inputs)
	if (locale === "pl") return pl_settings_show_kits(inputs)
	if (locale === "pt") return pt_settings_show_kits(inputs)
	if (locale === "ru") return ru_settings_show_kits(inputs)
	if (locale === "sv") return sv_settings_show_kits(inputs)
	if (locale === "tr") return tr_settings_show_kits(inputs)
	if (locale === "zh") return zh_settings_show_kits(inputs)
	if (locale === "ja") return ja_settings_show_kits(inputs)
	return en_settings_show_kits(inputs)
});
