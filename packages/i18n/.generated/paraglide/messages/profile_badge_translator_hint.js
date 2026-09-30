/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Translator_HintInputs */

const en_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helped translate SOTF Mods into another language.`)
};

const es_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayudó a traducir SOTF Mods a otro idioma.`)
};

const de_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat geholfen, SOTF Mods in eine andere Sprache zu übersetzen.`)
};

const fr_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A aidé à traduire SOTF Mods dans une autre langue.`)
};

const it_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha aiutato a tradurre SOTF Mods in un’altra lingua.`)
};

const nl_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hielp SOTF Mods in een andere taal te vertalen.`)
};

const pl_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomógł(a) przetłumaczyć SOTF Mods na inny język.`)
};

const pt_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajudou a traduzir o SOTF Mods para outro idioma.`)
};

const ru_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Помог(ла) перевести SOTF Mods на другой язык.`)
};

const sv_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälpte till att översätta SOTF Mods till ett annat språk.`)
};

const tr_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’u başka bir dile çevirmeye yardım etti.`)
};

const zh_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`帮助将 SOTF Mods 翻译成其他语言。`)
};

const ja_profile_badge_translator_hint = /** @type {(inputs: Profile_Badge_Translator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の翻訳に協力した。`)
};

/**
* | output |
* | --- |
* | "Helped translate SOTF Mods into another language." |
*
* @param {Profile_Badge_Translator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_translator_hint = /** @type {((inputs?: Profile_Badge_Translator_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Translator_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_translator_hint(inputs)
	if (locale === "de") return de_profile_badge_translator_hint(inputs)
	if (locale === "fr") return fr_profile_badge_translator_hint(inputs)
	if (locale === "it") return it_profile_badge_translator_hint(inputs)
	if (locale === "nl") return nl_profile_badge_translator_hint(inputs)
	if (locale === "pl") return pl_profile_badge_translator_hint(inputs)
	if (locale === "pt") return pt_profile_badge_translator_hint(inputs)
	if (locale === "ru") return ru_profile_badge_translator_hint(inputs)
	if (locale === "sv") return sv_profile_badge_translator_hint(inputs)
	if (locale === "tr") return tr_profile_badge_translator_hint(inputs)
	if (locale === "zh") return zh_profile_badge_translator_hint(inputs)
	if (locale === "ja") return ja_profile_badge_translator_hint(inputs)
	return en_profile_badge_translator_hint(inputs)
});
