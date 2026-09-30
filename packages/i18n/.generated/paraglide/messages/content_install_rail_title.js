/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Rail_TitleInputs */

const en_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steps`)
};

const es_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasos`)
};

const de_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schritte`)
};

const fr_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étapes`)
};

const it_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passaggi`)
};

const nl_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stappen`)
};

const pl_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kroki`)
};

const pt_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passos`)
};

const ru_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаги`)
};

const sv_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steg`)
};

const tr_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adımlar`)
};

const zh_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`步骤`)
};

const ja_content_install_rail_title = /** @type {(inputs: Content_Install_Rail_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手順`)
};

/**
* | output |
* | --- |
* | "Steps" |
*
* @param {Content_Install_Rail_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_rail_title = /** @type {((inputs?: Content_Install_Rail_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Rail_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_rail_title(inputs)
	if (locale === "de") return de_content_install_rail_title(inputs)
	if (locale === "fr") return fr_content_install_rail_title(inputs)
	if (locale === "it") return it_content_install_rail_title(inputs)
	if (locale === "nl") return nl_content_install_rail_title(inputs)
	if (locale === "pl") return pl_content_install_rail_title(inputs)
	if (locale === "pt") return pt_content_install_rail_title(inputs)
	if (locale === "ru") return ru_content_install_rail_title(inputs)
	if (locale === "sv") return sv_content_install_rail_title(inputs)
	if (locale === "tr") return tr_content_install_rail_title(inputs)
	if (locale === "zh") return zh_content_install_rail_title(inputs)
	if (locale === "ja") return ja_content_install_rail_title(inputs)
	return en_content_install_rail_title(inputs)
});
