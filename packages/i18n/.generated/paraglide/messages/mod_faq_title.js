/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Faq_TitleInputs */

const en_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
};

const es_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntas frecuentes`)
};

const de_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Häufige Fragen`)
};

const fr_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions fréquentes`)
};

const it_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domande frequenti`)
};

const nl_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veelgestelde vragen`)
};

const pl_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęstsze pytania`)
};

const pt_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntas frequentes`)
};

const ru_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частые вопросы`)
};

const sv_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanliga frågor`)
};

const tr_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sık sorulan sorular`)
};

const zh_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`常见问题`)
};

const ja_mod_faq_title = /** @type {(inputs: Mod_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`よくある質問`)
};

/**
* | output |
* | --- |
* | "Frequently asked questions" |
*
* @param {Mod_Faq_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_faq_title = /** @type {((inputs?: Mod_Faq_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Faq_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_faq_title(inputs)
	if (locale === "de") return de_mod_faq_title(inputs)
	if (locale === "fr") return fr_mod_faq_title(inputs)
	if (locale === "it") return it_mod_faq_title(inputs)
	if (locale === "nl") return nl_mod_faq_title(inputs)
	if (locale === "pl") return pl_mod_faq_title(inputs)
	if (locale === "pt") return pt_mod_faq_title(inputs)
	if (locale === "ru") return ru_mod_faq_title(inputs)
	if (locale === "sv") return sv_mod_faq_title(inputs)
	if (locale === "tr") return tr_mod_faq_title(inputs)
	if (locale === "zh") return zh_mod_faq_title(inputs)
	if (locale === "ja") return ja_mod_faq_title(inputs)
	return en_mod_faq_title(inputs)
});
