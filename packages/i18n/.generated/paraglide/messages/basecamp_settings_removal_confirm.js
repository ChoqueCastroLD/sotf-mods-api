/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_ConfirmInputs */

const en_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send request`)
};

const es_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar petición`)
};

const de_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antrag senden`)
};

const fr_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer la demande`)
};

const it_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia la richiesta`)
};

const nl_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek versturen`)
};

const pl_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij prośbę`)
};

const pt_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar pedido`)
};

const ru_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить запрос`)
};

const sv_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka begäran`)
};

const tr_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Talebi gönder`)
};

const zh_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送申请`)
};

const ja_basecamp_settings_removal_confirm = /** @type {(inputs: Basecamp_Settings_Removal_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依頼を送信`)
};

/**
* | output |
* | --- |
* | "Send request" |
*
* @param {Basecamp_Settings_Removal_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_confirm = /** @type {((inputs?: Basecamp_Settings_Removal_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_confirm(inputs)
	if (locale === "de") return de_basecamp_settings_removal_confirm(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_confirm(inputs)
	if (locale === "it") return it_basecamp_settings_removal_confirm(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_confirm(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_confirm(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_confirm(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_confirm(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_confirm(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_confirm(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_confirm(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_confirm(inputs)
	return en_basecamp_settings_removal_confirm(inputs)
});
