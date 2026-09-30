/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Help_TitleInputs */

const en_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still stuck?`)
};

const es_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Sigues atascado?`)
};

const de_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommst du nicht weiter?`)
};

const fr_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours bloqué ?`)
};

const it_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora bloccato?`)
};

const nl_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kom je er niet uit?`)
};

const pl_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadal utknąłeś?`)
};

const pt_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda travado?`)
};

const ru_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё ещё не получается?`)
};

const sv_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortfarande fast?`)
};

const tr_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hâlâ takıldın mı?`)
};

const zh_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还是没搞定？`)
};

const ja_content_install_help_title = /** @type {(inputs: Content_Install_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだうまくいかない？`)
};

/**
* | output |
* | --- |
* | "Still stuck?" |
*
* @param {Content_Install_Help_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_help_title = /** @type {((inputs?: Content_Install_Help_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Help_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_help_title(inputs)
	if (locale === "de") return de_content_install_help_title(inputs)
	if (locale === "fr") return fr_content_install_help_title(inputs)
	if (locale === "it") return it_content_install_help_title(inputs)
	if (locale === "nl") return nl_content_install_help_title(inputs)
	if (locale === "pl") return pl_content_install_help_title(inputs)
	if (locale === "pt") return pt_content_install_help_title(inputs)
	if (locale === "ru") return ru_content_install_help_title(inputs)
	if (locale === "sv") return sv_content_install_help_title(inputs)
	if (locale === "tr") return tr_content_install_help_title(inputs)
	if (locale === "zh") return zh_content_install_help_title(inputs)
	if (locale === "ja") return ja_content_install_help_title(inputs)
	return en_content_install_help_title(inputs)
});
