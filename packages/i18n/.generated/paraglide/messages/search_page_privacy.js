/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_PrivacyInputs */

const en_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy policy`)
};

const es_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de privacidad`)
};

const de_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenschutzerklärung`)
};

const fr_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique de confidentialité`)
};

const it_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informativa sulla privacy`)
};

const nl_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacybeleid`)
};

const pl_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polityka prywatności`)
};

const pt_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de privacidade`)
};

const ru_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Политика конфиденциальности`)
};

const sv_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritetspolicy`)
};

const tr_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik politikası`)
};

const zh_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私政策`)
};

const ja_search_page_privacy = /** @type {(inputs: Search_Page_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシーポリシー`)
};

/**
* | output |
* | --- |
* | "Privacy policy" |
*
* @param {Search_Page_PrivacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_privacy = /** @type {((inputs?: Search_Page_PrivacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_PrivacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_privacy(inputs)
	if (locale === "de") return de_search_page_privacy(inputs)
	if (locale === "fr") return fr_search_page_privacy(inputs)
	if (locale === "it") return it_search_page_privacy(inputs)
	if (locale === "nl") return nl_search_page_privacy(inputs)
	if (locale === "pl") return pl_search_page_privacy(inputs)
	if (locale === "pt") return pt_search_page_privacy(inputs)
	if (locale === "ru") return ru_search_page_privacy(inputs)
	if (locale === "sv") return sv_search_page_privacy(inputs)
	if (locale === "tr") return tr_search_page_privacy(inputs)
	if (locale === "zh") return zh_search_page_privacy(inputs)
	if (locale === "ja") return ja_search_page_privacy(inputs)
	return en_search_page_privacy(inputs)
});
