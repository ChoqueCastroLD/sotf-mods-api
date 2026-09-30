/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Settings_Password_TextInputs */

const en_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});return /** @type {LocalizedString} */ (`At least ${min__number} characters. A long phrase is easier to remember and harder to guess.`)
};

const es_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});return /** @type {LocalizedString} */ (`Al menos ${min__number} caracteres. Una frase larga es más fácil de recordar y más difícil de adivinar.`)
};

const de_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});return /** @type {LocalizedString} */ (`Mindestens ${min__number} Zeichen. Ein langer Satz ist leichter zu merken und schwerer zu erraten.`)
};

const fr_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});return /** @type {LocalizedString} */ (`Au moins ${min__number} caractères. Une longue phrase est plus facile à retenir et plus difficile à deviner.`)
};

const it_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});return /** @type {LocalizedString} */ (`Almeno ${min__number} caratteri. Una frase lunga è più facile da ricordare e più difficile da indovinare.`)
};

const nl_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});return /** @type {LocalizedString} */ (`Minstens ${min__number} tekens. Een lange zin is makkelijker te onthouden en moeilijker te raden.`)
};

const pl_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});return /** @type {LocalizedString} */ (`Co najmniej ${min__number} znaków. Długie zdanie łatwiej zapamiętać i trudniej odgadnąć.`)
};

const pt_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});return /** @type {LocalizedString} */ (`Pelo menos ${min__number} caracteres. Uma frase longa é mais fácil de lembrar e mais difícil de adivinhar.`)
};

const ru_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});return /** @type {LocalizedString} */ (`Не менее ${min__number} символов. Длинную фразу легче запомнить и труднее угадать.`)
};

const sv_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});return /** @type {LocalizedString} */ (`Minst ${min__number} tecken. En lång mening är lättare att komma ihåg och svårare att gissa.`)
};

const tr_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});return /** @type {LocalizedString} */ (`En az ${min__number} karakter. Uzun bir cümle hatırlaması daha kolay, tahmin etmesi daha zordur.`)
};

const zh_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`至少 ${min__number} 个字符。长句子更好记，也更难被猜到。`)
};

const ja_settings_password_text = /** @type {(inputs: Settings_Password_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`${min__number} 文字以上。長いフレーズは覚えやすく、推測されにくくなります。`)
};

/**
* | output |
* | --- |
* | "At least {min__number} characters. A long phrase is easier to remember and harder to guess." |
*
* @param {Settings_Password_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_text = /** @type {((inputs: Settings_Password_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_text(inputs)
	if (locale === "de") return de_settings_password_text(inputs)
	if (locale === "fr") return fr_settings_password_text(inputs)
	if (locale === "it") return it_settings_password_text(inputs)
	if (locale === "nl") return nl_settings_password_text(inputs)
	if (locale === "pl") return pl_settings_password_text(inputs)
	if (locale === "pt") return pt_settings_password_text(inputs)
	if (locale === "ru") return ru_settings_password_text(inputs)
	if (locale === "sv") return sv_settings_password_text(inputs)
	if (locale === "tr") return tr_settings_password_text(inputs)
	if (locale === "zh") return zh_settings_password_text(inputs)
	if (locale === "ja") return ja_settings_password_text(inputs)
	return en_settings_password_text(inputs)
});
