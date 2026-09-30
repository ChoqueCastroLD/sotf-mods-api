/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Language_BrowserInputs */

const en_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Same as my browser`)
};

const es_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El de mi navegador`)
};

const de_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie mein Browser`)
};

const fr_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Celle de mon navigateur`)
};

const it_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come il mio browser`)
};

const nl_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoals mijn browser`)
};

const pl_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak w mojej przeglądarce`)
};

const pt_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mesmo do meu navegador`)
};

const ru_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как в браузере`)
};

const sv_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samma som min webbläsare`)
};

const tr_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarayıcımla aynı`)
};

const zh_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随浏览器`)
};

const ja_settings_language_browser = /** @type {(inputs: Settings_Language_BrowserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ブラウザーと同じ`)
};

/**
* | output |
* | --- |
* | "Same as my browser" |
*
* @param {Settings_Language_BrowserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_language_browser = /** @type {((inputs?: Settings_Language_BrowserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_BrowserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_language_browser(inputs)
	if (locale === "de") return de_settings_language_browser(inputs)
	if (locale === "fr") return fr_settings_language_browser(inputs)
	if (locale === "it") return it_settings_language_browser(inputs)
	if (locale === "nl") return nl_settings_language_browser(inputs)
	if (locale === "pl") return pl_settings_language_browser(inputs)
	if (locale === "pt") return pt_settings_language_browser(inputs)
	if (locale === "ru") return ru_settings_language_browser(inputs)
	if (locale === "sv") return sv_settings_language_browser(inputs)
	if (locale === "tr") return tr_settings_language_browser(inputs)
	if (locale === "zh") return zh_settings_language_browser(inputs)
	if (locale === "ja") return ja_settings_language_browser(inputs)
	return en_settings_language_browser(inputs)
});
