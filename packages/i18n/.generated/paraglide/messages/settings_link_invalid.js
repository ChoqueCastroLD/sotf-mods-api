/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_InvalidInputs */

const en_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a full web address starting with https://`)
};

const es_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe una dirección web completa que empiece por https://`)
};

const de_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine vollständige Webadresse ein, die mit https:// beginnt`)
};

const fr_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une adresse web complète commençant par https://`)
};

const it_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un indirizzo web completo che inizi con https://`)
};

const nl_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer een volledig webadres in dat begint met https://`)
};

const pl_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz pełny adres strony zaczynający się od https://`)
};

const pt_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um endereço web completo começando com https://`)
};

const ru_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите полный веб-адрес, начинающийся с https://`)
};

const sv_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en fullständig webbadress som börjar med https://`)
};

const tr_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// ile başlayan tam bir web adresi gir`)
};

const zh_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 https:// 开头的完整网址`)
};

const ja_settings_link_invalid = /** @type {(inputs: Settings_Link_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// で始まる完全なウェブアドレスを入力してください`)
};

/**
* | output |
* | --- |
* | "Enter a full web address starting with https://" |
*
* @param {Settings_Link_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_invalid = /** @type {((inputs?: Settings_Link_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_invalid(inputs)
	if (locale === "de") return de_settings_link_invalid(inputs)
	if (locale === "fr") return fr_settings_link_invalid(inputs)
	if (locale === "it") return it_settings_link_invalid(inputs)
	if (locale === "nl") return nl_settings_link_invalid(inputs)
	if (locale === "pl") return pl_settings_link_invalid(inputs)
	if (locale === "pt") return pt_settings_link_invalid(inputs)
	if (locale === "ru") return ru_settings_link_invalid(inputs)
	if (locale === "sv") return sv_settings_link_invalid(inputs)
	if (locale === "tr") return tr_settings_link_invalid(inputs)
	if (locale === "zh") return zh_settings_link_invalid(inputs)
	if (locale === "ja") return ja_settings_link_invalid(inputs)
	return en_settings_link_invalid(inputs)
});
