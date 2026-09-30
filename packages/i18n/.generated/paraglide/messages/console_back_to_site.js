/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Back_To_SiteInputs */

const en_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the site`)
};

const es_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al sitio`)
};

const de_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Website`)
};

const fr_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au site`)
};

const it_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna al sito`)
};

const nl_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar de site`)
};

const pl_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć na stronę`)
};

const pt_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao site`)
};

const ru_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться на сайт`)
};

const sv_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till webbplatsen`)
};

const tr_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siteye dön`)
};

const zh_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回网站`)
};

const ja_console_back_to_site = /** @type {(inputs: Console_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the site" |
*
* @param {Console_Back_To_SiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_back_to_site = /** @type {((inputs?: Console_Back_To_SiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Back_To_SiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_back_to_site(inputs)
	if (locale === "de") return de_console_back_to_site(inputs)
	if (locale === "fr") return fr_console_back_to_site(inputs)
	if (locale === "it") return it_console_back_to_site(inputs)
	if (locale === "nl") return nl_console_back_to_site(inputs)
	if (locale === "pl") return pl_console_back_to_site(inputs)
	if (locale === "pt") return pt_console_back_to_site(inputs)
	if (locale === "ru") return ru_console_back_to_site(inputs)
	if (locale === "sv") return sv_console_back_to_site(inputs)
	if (locale === "tr") return tr_console_back_to_site(inputs)
	if (locale === "zh") return zh_console_back_to_site(inputs)
	if (locale === "ja") return ja_console_back_to_site(inputs)
	return en_console_back_to_site(inputs)
});
