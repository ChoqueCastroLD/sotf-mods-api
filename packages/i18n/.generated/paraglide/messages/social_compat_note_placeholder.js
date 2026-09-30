/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Note_PlaceholderInputs */

const en_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What works, what doesn’t, any error message…`)
};

const es_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué funciona, qué no, algún mensaje de error…`)
};

const de_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was geht, was nicht, eine Fehlermeldung…`)
};

const fr_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qui marche, ce qui ne marche pas, un message d’erreur…`)
};

const it_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa funziona, cosa no, eventuali messaggi di errore…`)
};

const nl_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat werkt, wat niet, een foutmelding…`)
};

const pl_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co działa, co nie, komunikat błędu…`)
};

const pt_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que funciona, o que não, alguma mensagem de erro…`)
};

const ru_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что работает, что нет, текст ошибки…`)
};

const sv_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad som fungerar, vad som inte gör det, felmeddelanden…`)
};

const tr_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne çalışıyor, ne çalışmıyor, hata mesajı…`)
};

const zh_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`哪些可用、哪些不可用、错误信息…`)
};

const ja_social_compat_note_placeholder = /** @type {(inputs: Social_Compat_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動くこと、動かないこと、エラーメッセージなど…`)
};

/**
* | output |
* | --- |
* | "What works, what doesn’t, any error message…" |
*
* @param {Social_Compat_Note_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_note_placeholder = /** @type {((inputs?: Social_Compat_Note_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Note_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_note_placeholder(inputs)
	if (locale === "de") return de_social_compat_note_placeholder(inputs)
	if (locale === "fr") return fr_social_compat_note_placeholder(inputs)
	if (locale === "it") return it_social_compat_note_placeholder(inputs)
	if (locale === "nl") return nl_social_compat_note_placeholder(inputs)
	if (locale === "pl") return pl_social_compat_note_placeholder(inputs)
	if (locale === "pt") return pt_social_compat_note_placeholder(inputs)
	if (locale === "ru") return ru_social_compat_note_placeholder(inputs)
	if (locale === "sv") return sv_social_compat_note_placeholder(inputs)
	if (locale === "tr") return tr_social_compat_note_placeholder(inputs)
	if (locale === "zh") return zh_social_compat_note_placeholder(inputs)
	if (locale === "ja") return ja_social_compat_note_placeholder(inputs)
	return en_social_compat_note_placeholder(inputs)
});
