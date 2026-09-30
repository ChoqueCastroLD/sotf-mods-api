/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Privacy_TitleInputs */

const en_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your messages`)
};

const es_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mensajes`)
};

const de_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Nachrichten`)
};

const fr_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos messages`)
};

const it_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi messaggi`)
};

const nl_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je berichten`)
};

const pl_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje wiadomości`)
};

const pt_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas mensagens`)
};

const ru_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши сообщения`)
};

const sv_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina meddelanden`)
};

const tr_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesajların`)
};

const zh_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的消息`)
};

const ja_content_kelvin_privacy_title = /** @type {(inputs: Content_Kelvin_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージの扱い`)
};

/**
* | output |
* | --- |
* | "Your messages" |
*
* @param {Content_Kelvin_Privacy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_privacy_title = /** @type {((inputs?: Content_Kelvin_Privacy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_privacy_title(inputs)
	if (locale === "de") return de_content_kelvin_privacy_title(inputs)
	if (locale === "fr") return fr_content_kelvin_privacy_title(inputs)
	if (locale === "it") return it_content_kelvin_privacy_title(inputs)
	if (locale === "nl") return nl_content_kelvin_privacy_title(inputs)
	if (locale === "pl") return pl_content_kelvin_privacy_title(inputs)
	if (locale === "pt") return pt_content_kelvin_privacy_title(inputs)
	if (locale === "ru") return ru_content_kelvin_privacy_title(inputs)
	if (locale === "sv") return sv_content_kelvin_privacy_title(inputs)
	if (locale === "tr") return tr_content_kelvin_privacy_title(inputs)
	if (locale === "zh") return zh_content_kelvin_privacy_title(inputs)
	if (locale === "ja") return ja_content_kelvin_privacy_title(inputs)
	return en_content_kelvin_privacy_title(inputs)
});
