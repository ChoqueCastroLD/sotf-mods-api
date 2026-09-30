/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Display_Name_HintInputs */

const en_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any language and characters, 2–32 long. You can change it any time.`)
};

const es_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cualquier idioma y con cualquier carácter, de 2 a 32. Puedes cambiarlo cuando quieras.`)
};

const de_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In jeder Sprache und mit allen Zeichen, 2–32 lang. Du kannst ihn jederzeit ändern.`)
};

const fr_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dans n’importe quelle langue et avec n’importe quels caractères, de 2 à 32. Modifiable à tout moment.`)
};

const it_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In qualsiasi lingua e con qualsiasi carattere, da 2 a 32. Puoi cambiarlo quando vuoi.`)
};

const nl_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In elke taal en met elk teken, 2–32 lang. Je kunt hem altijd wijzigen.`)
};

const pl_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W dowolnym języku i z dowolnymi znakami, od 2 do 32. Możesz ją zmienić w każdej chwili.`)
};

const pt_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em qualquer idioma e com quaisquer caracteres, de 2 a 32. Você pode mudar quando quiser.`)
};

const ru_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На любом языке и с любыми символами, от 2 до 32. Его можно изменить в любой момент.`)
};

const sv_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På vilket språk och med vilka tecken som helst, 2–32 långt. Du kan ändra det när du vill.`)
};

const tr_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her dilde ve her karakterle, 2–32 uzunlukta. İstediğin zaman değiştirebilirsin.`)
};

const zh_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意语言、任意字符，2–32 个字符。可随时更改。`)
};

const ja_settings_display_name_hint = /** @type {(inputs: Settings_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どの言語・文字でも 2〜32 文字。いつでも変更できます。`)
};

/**
* | output |
* | --- |
* | "Any language and characters, 2–32 long. You can change it any time." |
*
* @param {Settings_Display_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_display_name_hint = /** @type {((inputs?: Settings_Display_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Display_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_display_name_hint(inputs)
	if (locale === "de") return de_settings_display_name_hint(inputs)
	if (locale === "fr") return fr_settings_display_name_hint(inputs)
	if (locale === "it") return it_settings_display_name_hint(inputs)
	if (locale === "nl") return nl_settings_display_name_hint(inputs)
	if (locale === "pl") return pl_settings_display_name_hint(inputs)
	if (locale === "pt") return pt_settings_display_name_hint(inputs)
	if (locale === "ru") return ru_settings_display_name_hint(inputs)
	if (locale === "sv") return sv_settings_display_name_hint(inputs)
	if (locale === "tr") return tr_settings_display_name_hint(inputs)
	if (locale === "zh") return zh_settings_display_name_hint(inputs)
	if (locale === "ja") return ja_settings_display_name_hint(inputs)
	return en_settings_display_name_hint(inputs)
});
