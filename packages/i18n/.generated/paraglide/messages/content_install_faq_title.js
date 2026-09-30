/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Faq_TitleInputs */

const en_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
};

const es_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntas frecuentes`)
};

const de_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Häufige Fragen`)
};

const fr_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions fréquentes`)
};

const it_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domande frequenti`)
};

const nl_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veelgestelde vragen`)
};

const pl_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęstsze pytania`)
};

const pt_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntas frequentes`)
};

const ru_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частые вопросы`)
};

const sv_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanliga frågor`)
};

const tr_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sık sorulan sorular`)
};

const zh_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`常见问题`)
};

const ja_content_install_faq_title = /** @type {(inputs: Content_Install_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`よくある質問`)
};

/**
* | output |
* | --- |
* | "Frequently asked questions" |
*
* @param {Content_Install_Faq_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_faq_title = /** @type {((inputs?: Content_Install_Faq_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Faq_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_faq_title(inputs)
	if (locale === "de") return de_content_install_faq_title(inputs)
	if (locale === "fr") return fr_content_install_faq_title(inputs)
	if (locale === "it") return it_content_install_faq_title(inputs)
	if (locale === "nl") return nl_content_install_faq_title(inputs)
	if (locale === "pl") return pl_content_install_faq_title(inputs)
	if (locale === "pt") return pt_content_install_faq_title(inputs)
	if (locale === "ru") return ru_content_install_faq_title(inputs)
	if (locale === "sv") return sv_content_install_faq_title(inputs)
	if (locale === "tr") return tr_content_install_faq_title(inputs)
	if (locale === "zh") return zh_content_install_faq_title(inputs)
	if (locale === "ja") return ja_content_install_faq_title(inputs)
	return en_content_install_faq_title(inputs)
});
