/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Privacy_LinkInputs */

const en_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the privacy policy`)
};

const es_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer la política de privacidad`)
};

const de_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenschutzerklärung lesen`)
};

const fr_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire la politique de confidentialité`)
};

const it_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi l’informativa sulla privacy`)
};

const nl_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacybeleid lezen`)
};

const pl_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeczytaj politykę prywatności`)
};

const pt_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler a política de privacidade`)
};

const ru_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Политика конфиденциальности`)
};

const sv_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs integritetspolicyn`)
};

const tr_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik politikasını oku`)
};

const zh_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读隐私政策`)
};

const ja_content_kelvin_privacy_link = /** @type {(inputs: Content_Kelvin_Privacy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシーポリシーを読む`)
};

/**
* | output |
* | --- |
* | "Read the privacy policy" |
*
* @param {Content_Kelvin_Privacy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_privacy_link = /** @type {((inputs?: Content_Kelvin_Privacy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_privacy_link(inputs)
	if (locale === "de") return de_content_kelvin_privacy_link(inputs)
	if (locale === "fr") return fr_content_kelvin_privacy_link(inputs)
	if (locale === "it") return it_content_kelvin_privacy_link(inputs)
	if (locale === "nl") return nl_content_kelvin_privacy_link(inputs)
	if (locale === "pl") return pl_content_kelvin_privacy_link(inputs)
	if (locale === "pt") return pt_content_kelvin_privacy_link(inputs)
	if (locale === "ru") return ru_content_kelvin_privacy_link(inputs)
	if (locale === "sv") return sv_content_kelvin_privacy_link(inputs)
	if (locale === "tr") return tr_content_kelvin_privacy_link(inputs)
	if (locale === "zh") return zh_content_kelvin_privacy_link(inputs)
	if (locale === "ja") return ja_content_kelvin_privacy_link(inputs)
	return en_content_kelvin_privacy_link(inputs)
});
