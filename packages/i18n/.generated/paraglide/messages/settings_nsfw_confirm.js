/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_ConfirmInputs */

const en_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show it`)
};

const es_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrarlo`)
};

const de_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen`)
};

const fr_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

const it_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra`)
};

const nl_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tonen`)
};

const pl_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż`)
};

const pt_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ru_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать`)
};

const sv_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göster`)
};

const zh_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const ja_settings_nsfw_confirm = /** @type {(inputs: Settings_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示する`)
};

/**
* | output |
* | --- |
* | "Show it" |
*
* @param {Settings_Nsfw_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_confirm = /** @type {((inputs?: Settings_Nsfw_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_confirm(inputs)
	if (locale === "de") return de_settings_nsfw_confirm(inputs)
	if (locale === "fr") return fr_settings_nsfw_confirm(inputs)
	if (locale === "it") return it_settings_nsfw_confirm(inputs)
	if (locale === "nl") return nl_settings_nsfw_confirm(inputs)
	if (locale === "pl") return pl_settings_nsfw_confirm(inputs)
	if (locale === "pt") return pt_settings_nsfw_confirm(inputs)
	if (locale === "ru") return ru_settings_nsfw_confirm(inputs)
	if (locale === "sv") return sv_settings_nsfw_confirm(inputs)
	if (locale === "tr") return tr_settings_nsfw_confirm(inputs)
	if (locale === "zh") return zh_settings_nsfw_confirm(inputs)
	if (locale === "ja") return ja_settings_nsfw_confirm(inputs)
	return en_settings_nsfw_confirm(inputs)
});
